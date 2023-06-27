declare namespace NodeJS {
  interface ProcessEnv {
    readonly BASE_URL: string
    // 他の環境変数もここに追加できます
  }
}
