// .vue ファイルを Vue コンポーネントとして認識でき、それらが any 型であると誤って認識するのを防ぐ
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
