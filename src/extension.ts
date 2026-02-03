import * as vscode from "vscode";
import { Translator } from "./translator";
import { TranslationCache } from "./cache";
import { log, getOutputChannel, showOutput } from "./logger";

let translator: Translator;
let cache: TranslationCache;
let statusBarItem: vscode.StatusBarItem;

const CONFIG_PREFIX = "eslintIntl";

export function activate(context: vscode.ExtensionContext) {
  log(vscode.l10n.t("ESLint Intl activated"));

  // 注册输出通道
  context.subscriptions.push(getOutputChannel());

  // 初始化缓存
  cache = new TranslationCache(context.globalState);

  // 初始化翻译器
  translator = new Translator(cache);

  // 创建状态栏项
  statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100,
  );
  statusBarItem.command = `${CONFIG_PREFIX}.toggleEnabled`;
  context.subscriptions.push(statusBarItem);
  updateStatusBar();

  // 注册 Hover Provider
  const hoverProvider = vscode.languages.registerHoverProvider(
    [
      { scheme: "file", language: "javascript" },
      { scheme: "file", language: "typescript" },
      { scheme: "file", language: "javascriptreact" },
      { scheme: "file", language: "typescriptreact" },
      { scheme: "file", language: "vue" },
    ],
    new ESLintIntlHoverProvider(),
  );
  context.subscriptions.push(hoverProvider);

  // 注册命令：清除缓存
  context.subscriptions.push(
    vscode.commands.registerCommand(`${CONFIG_PREFIX}.clearCache`, () => {
      cache.clear();
      log(vscode.l10n.t("Translation cache cleared"));
      vscode.window.showInformationMessage(
        `ESLint Intl: ${vscode.l10n.t("Cache cleared")}`,
      );
    }),
  );

  // 注册命令：显示输出
  context.subscriptions.push(
    vscode.commands.registerCommand(`${CONFIG_PREFIX}.showOutput`, () => {
      showOutput();
    }),
  );

  // 注册命令：开关翻译
  context.subscriptions.push(
    vscode.commands.registerCommand(
      `${CONFIG_PREFIX}.toggleEnabled`,
      async () => {
        const config = vscode.workspace.getConfiguration(CONFIG_PREFIX);
        const currentValue = config.get<boolean>("enabled", true);
        const newValue = !currentValue;
        log(vscode.l10n.t("Toggle: {0} -> {1}", currentValue, newValue));

        try {
          await config.update(
            "enabled",
            newValue,
            vscode.ConfigurationTarget.Workspace,
          );
        } catch {
          try {
            await config.update(
              "enabled",
              newValue,
              vscode.ConfigurationTarget.Global,
            );
          } catch (err) {
            log(vscode.l10n.t("Config update failed: {0}", String(err)));
          }
        }

        updateStatusBarWithValue(newValue);
        vscode.window.showInformationMessage(
          `ESLint Intl: ${newValue ? vscode.l10n.t("Enabled") : vscode.l10n.t("Disabled")}`,
        );
      },
    ),
  );

  // 注册命令：重新翻译
  context.subscriptions.push(
    vscode.commands.registerCommand(
      `${CONFIG_PREFIX}.retranslate`,
      async (message: string, ruleId?: string) => {
        const config = vscode.workspace.getConfiguration(CONFIG_PREFIX);
        const targetLang = config.get<string>("targetLanguage", "zh-CN");
        const cacheKey = `${targetLang}:${message}`;
        
        // 清除缓存中的这条翻译
        cache.delete(cacheKey);
        
        log(vscode.l10n.t("Retranslating: \"{0}\"", message.slice(0, 40) + (message.length > 40 ? "..." : "")));
        
        // 触发重新翻译
        try {
          await translator.translate(message, ruleId);
          vscode.window.showInformationMessage(
            `ESLint Intl: ${vscode.l10n.t("Retranslation complete")}`,
          );
        } catch (err) {
          log(vscode.l10n.t("Translation failed: {0}", String(err)));
          vscode.window.showErrorMessage(
            `ESLint Intl: ${vscode.l10n.t("Retranslation failed")}`,
          );
        }
      },
    ),
  );

  // 监听配置变化
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration(CONFIG_PREFIX)) {
        translator = new Translator(cache);
        updateStatusBar();
      }
    }),
  );
}

function updateStatusBarWithValue(enabled: boolean) {
  const config = vscode.workspace.getConfiguration(CONFIG_PREFIX);
  const hasApiKey = !!config.get<string>("openai.apiKey");
  const targetLang = config.get<string>("targetLanguage", "zh-CN");

  if (!hasApiKey) {
    statusBarItem.text = "$(warning) ESLint Intl";
    statusBarItem.tooltip = vscode.l10n.t("Click to configure API Key");
    statusBarItem.backgroundColor = new vscode.ThemeColor(
      "statusBarItem.warningBackground",
    );
  } else if (enabled) {
    statusBarItem.text = "$(comment-discussion) Intl";
    statusBarItem.tooltip = vscode.l10n.t(
      "ESLint Intl: Enabled ({0}) - click to toggle",
      targetLang,
    );
    statusBarItem.backgroundColor = undefined;
  } else {
    statusBarItem.text = "$(circle-slash) Intl";
    statusBarItem.tooltip = vscode.l10n.t(
      "ESLint Intl: Disabled (click to enable)",
    );
    statusBarItem.backgroundColor = undefined;
  }
  statusBarItem.show();
}

function updateStatusBar() {
  const config = vscode.workspace.getConfiguration(CONFIG_PREFIX);
  const enabled = config.get<boolean>("enabled", true);
  updateStatusBarWithValue(enabled);
}

function extractRuleId(diagnostic: vscode.Diagnostic): string | undefined {
  if (typeof diagnostic.code === "string") {
    return diagnostic.code;
  }
  if (typeof diagnostic.code === "object" && diagnostic.code !== null) {
    return String((diagnostic.code as { value: unknown }).value);
  }
  return undefined;
}

/**
 * Strip markdown code block syntax from AI response
 * Handles cases like:
 * ```json\n{...}\n```
 * ```{...}```
 * ```\n{...}\n```
 */
function stripCodeBlock(text: string): string {
  // Remove leading/trailing code block markers with optional language identifier
  let cleaned = text.trim();
  
  // Pattern: ``` with any optional language identifier at the start
  cleaned = cleaned.replace(/^```\w*\s*\n?/, "");
  
  // Pattern: ``` at the end
  cleaned = cleaned.replace(/\n?```\s*$/, "");
  
  return cleaned.trim();
}

class ESLintIntlHoverProvider implements vscode.HoverProvider {
  async provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken,
  ): Promise<vscode.Hover | null> {
    const config = vscode.workspace.getConfiguration(CONFIG_PREFIX);
    if (!config.get<boolean>("enabled", true)) {
      return null;
    }

    // 获取当前位置的 ESLint 诊断
    const diagnostics = vscode.languages.getDiagnostics(document.uri);
    const eslintDiagnostics = diagnostics.filter(
      (d) => d.source === "eslint" && d.range.contains(position),
    );

    if (eslintDiagnostics.length === 0) {
      return null;
    }

    const hoverContents: vscode.MarkdownString[] = [];

    for (const diagnostic of eslintDiagnostics) {
      const originalMessage = diagnostic.message;
      const ruleId = extractRuleId(diagnostic);

      // 尝试从缓存获取翻译
      const targetLang = config.get<string>("targetLanguage", "zh-CN");
      const cacheKey = `${targetLang}:${originalMessage}`;
      let translated: string | null | undefined = cache.get(cacheKey);

      // 如果没有缓存，实时翻译
      if (!translated) {
        try {
          translated = await translator.translate(originalMessage, ruleId);
        } catch (err) {
          log(vscode.l10n.t("Translation failed: {0}", String(err)));
        }
      }

      if (translated && translated !== originalMessage) {
        const md = new vscode.MarkdownString();
        md.isTrusted = true;
        md.supportHtml = true;

        // 尝试解析 JSON 格式的翻译结果
        let translationText = translated;
        let fixSuggestion = "";
        try {
          // Strip markdown code blocks before parsing JSON
          const cleanedTranslation = stripCodeBlock(translated);
          const parsed = JSON.parse(cleanedTranslation);
          if (parsed.translation) {
            translationText = parsed.translation;
          }
          if (parsed.fix) {
            fixSuggestion = parsed.fix;
          }
        } catch {
          // 如果不是 JSON 格式，直接使用原始翻译
        }

        // 模仿 ESLint 的样式：翻译内容 + 灰色来源标识
        md.appendMarkdown(
          `${translationText} <span style="color:#888;">eslint-intl</span>`,
        );

        // 显示解决方案（小字）
        if (fixSuggestion) {
          md.appendMarkdown(
            `\n\n<span style="color:#4a9;\">💡 ${fixSuggestion}</span>`,
          );
        }

        // 添加重新翻译按钮
        const retranslateCommand = vscode.Uri.parse(
          `command:${CONFIG_PREFIX}.retranslate?${encodeURIComponent(JSON.stringify([originalMessage, ruleId]))}`,
        );
        md.appendMarkdown(
          `\n\n[$(refresh) ${vscode.l10n.t("Retranslate")}](${retranslateCommand})`,
        );

        // 可选显示原文
        if (config.get<boolean>("showOriginal", false)) {
          md.appendMarkdown(`\n\n---\n\n`);
          md.appendMarkdown(
            `<span style="color:#666;">${originalMessage}</span>`,
          );
        }

        hoverContents.push(md);
      }
    }

    if (hoverContents.length > 0) {
      return new vscode.Hover(hoverContents);
    }

    return null;
  }
}

export function deactivate() {
  statusBarItem?.dispose();
}
