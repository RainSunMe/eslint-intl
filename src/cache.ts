import * as vscode from 'vscode'

interface CacheEntry {
  translation: string
  timestamp: number
}

interface CacheData {
  [key: string]: CacheEntry
}

const CACHE_KEY = 'eslintIntl.translationCache'
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000 // 7 天过期

export class TranslationCache {
  private memoryCache: Map<string, string> = new Map()
  private globalState: vscode.Memento

  constructor(globalState: vscode.Memento) {
    this.globalState = globalState
    this.loadFromStorage()
  }

  private loadFromStorage(): void {
    const stored = this.globalState.get<CacheData>(CACHE_KEY, {})
    const now = Date.now()

    // 加载未过期的缓存
    for (const [key, entry] of Object.entries(stored)) {
      if (now - entry.timestamp < CACHE_TTL) {
        this.memoryCache.set(key, entry.translation)
      }
    }
  }

  private saveToStorage(): void {
    const data: CacheData = {}
    const now = Date.now()

    for (const [key, translation] of this.memoryCache) {
      data[key] = {
        translation,
        timestamp: now,
      }
    }

    this.globalState.update(CACHE_KEY, data)
  }

  get(message: string): string | undefined {
    return this.memoryCache.get(message)
  }

  set(message: string, translation: string): void {
    this.memoryCache.set(message, translation)
    // 异步保存到持久化存储
    this.saveToStorage()
  }

  has(message: string): boolean {
    return this.memoryCache.has(message)
  }

  clear(): void {
    this.memoryCache.clear()
    this.globalState.update(CACHE_KEY, {})
  }

  get size(): number {
    return this.memoryCache.size
  }
}
