import * as vscode from 'vscode'

let outputChannel: vscode.OutputChannel | undefined

export function getOutputChannel(): vscode.OutputChannel {
  if (!outputChannel) {
    outputChannel = vscode.window.createOutputChannel('ESLint Intl')
  }
  return outputChannel
}

export function log(message: string): void {
  const channel = getOutputChannel()
  const timestamp = new Date().toLocaleTimeString()
  channel.appendLine(`[${timestamp}] ${message}`)
}

export function logError(message: string, error?: unknown): void {
  const channel = getOutputChannel()
  const timestamp = new Date().toLocaleTimeString()
  channel.appendLine(`[${timestamp}] ❌ ${message}`)
  if (error) {
    channel.appendLine(`    ${String(error)}`)
  }
}

export function showOutput(): void {
  getOutputChannel().show()
}

export function disposeOutputChannel(): void {
  outputChannel?.dispose()
  outputChannel = undefined
}
