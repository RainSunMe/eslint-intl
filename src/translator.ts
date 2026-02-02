import * as vscode from "vscode";
import * as https from "https";
import * as http from "http";
import { TranslationCache } from "./cache";
import { log, logError } from "./logger";

interface OpenAIConfig {
  baseUrl: string;
  apiKey: string;
  model: string;
  targetLanguage: string;
}

interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

const LANGUAGE_NAMES: Record<string, string> = {
  "zh-CN": "Simplified Chinese",
  "zh-TW": "Traditional Chinese",
  ko: "Korean",
  de: "German",
  fr: "French",
  es: "Spanish",
  ru: "Russian",
  pt: "Portuguese",
  it: "Italian",
  ar: "Arabic",
};

/**
 * Get language display name based on VSCode's current locale
 */
export function getLanguageDisplayName(langCode: string): string {
  const key = LANGUAGE_NAMES[langCode];
  if (!key) return langCode;
  return vscode.l10n.t(key);
}

export class Translator {
  private cache: TranslationCache;
  private pendingTranslations: Map<string, Promise<string | null>> = new Map();

  constructor(cache: TranslationCache) {
    this.cache = cache;
  }

  private getConfig(): OpenAIConfig {
    const config = vscode.workspace.getConfiguration("eslintIntl");
    return {
      baseUrl: config.get<string>(
        "openai.baseUrl",
        "https://api.openai.com/v1",
      ),
      apiKey: config.get<string>("openai.apiKey", ""),
      model: config.get<string>("openai.model", "gpt-4o-mini"),
      targetLanguage: config.get<string>("targetLanguage", "zh-CN"),
    };
  }

  async translate(message: string, ruleId?: string): Promise<string | null> {
    const config = this.getConfig();
    const cacheKey = `${config.targetLanguage}:${message}`;

    // 1. 检查缓存
    const cached = this.cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    // 2. 检查是否有正在进行的翻译
    const pending = this.pendingTranslations.get(cacheKey);
    if (pending) {
      return pending;
    }

    // 3. 发起新的翻译请求
    const translationPromise = this.doTranslate(message, ruleId, config);
    this.pendingTranslations.set(cacheKey, translationPromise);

    try {
      const result = await translationPromise;
      if (result) {
        this.cache.set(cacheKey, result);
      }
      return result;
    } finally {
      this.pendingTranslations.delete(cacheKey);
    }
  }

  private async doTranslate(
    message: string,
    ruleId: string | undefined,
    config: OpenAIConfig,
  ): Promise<string | null> {
    if (!config.apiKey) {
      log(vscode.l10n.t("API Key not configured, skipping translation"));
      return null;
    }

    const languageName = getLanguageDisplayName(config.targetLanguage);
    log(
      vscode.l10n.t(
        'Translating: "{0}" -> {1}',
        message.slice(0, 40) + "...",
        languageName,
      ),
    );

    const prompt = this.buildPrompt(message, ruleId, languageName);

    try {
      const response = await this.callOpenAI(prompt, config);
      if (response) {
        log(
          vscode.l10n.t(
            'Translation complete: "{0}"',
            response.slice(0, 40) + "...",
          ),
        );
      }
      return response;
    } catch (err) {
      logError(vscode.l10n.t("Translation failed"), err);
      return null;
    }
  }

  private buildPrompt(
    message: string,
    ruleId: string | undefined,
    languageName: string,
  ): string {
    let prompt = `Translate the following ESLint error message to ${languageName} and provide a very brief fix suggestion (one short sentence, max 15 words).

Respond in JSON format:
{"translation": "translated message", "fix": "brief fix suggestion"}

Error message: "${message}"`;

    if (ruleId) {
      prompt += `\n\nRule: ${ruleId}`;
    }

    return prompt;
  }

  private async callOpenAI(
    prompt: string,
    config: OpenAIConfig,
  ): Promise<string | null> {
    log(
      vscode.l10n.t(
        "Calling API: {0}, Model: {1}",
        config.baseUrl,
        config.model,
      ),
    );

    const url = new URL(`${config.baseUrl}/chat/completions`);
    const isHttps = url.protocol === "https:";

    const requestBody = JSON.stringify({
      model: config.model,
      messages: [
        {
          role: "system",
          content:
            "You are a professional technical translator specializing in programming and ESLint error messages. Always respond with valid JSON containing translation and fix suggestion. Keep fix suggestions very brief (under 15 words).",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 1,
      max_tokens: 500,
    });

    return new Promise((resolve) => {
      const options: https.RequestOptions = {
        hostname: url.hostname,
        port: url.port || (isHttps ? 443 : 80),
        path: url.pathname,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.apiKey}`,
          "Content-Length": Buffer.byteLength(requestBody),
        },
        timeout: 30000,
      };

      const httpModule = isHttps ? https : http;

      const req = httpModule.request(options, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          try {
            if (res.statusCode !== 200) {
              logError(
                vscode.l10n.t("API error: {0}", String(res.statusCode)),
                data,
              );
              resolve(null);
              return;
            }

            const json: OpenAIResponse = JSON.parse(data);
            const content = json.choices?.[0]?.message?.content;
            resolve(content?.trim() || null);
          } catch (err) {
            logError(vscode.l10n.t("Response parsing failed"), err);
            resolve(null);
          }
        });
      });

      req.on("error", (err) => {
        logError(vscode.l10n.t("Request failed"), err);
        resolve(null);
      });

      req.on("timeout", () => {
        req.destroy();
        logError(vscode.l10n.t("Request timeout"));
        resolve(null);
      });

      req.write(requestBody);
      req.end();
    });
  }
}
