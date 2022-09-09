# vitejs-vite-xqx4i5

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-xqx4i5)

### JSXの注意点
- JSXは必ず階層構造
最上位コンポーネントは並列にできない
#### 対処
- React.Fragmentで囲む
これ自体はHTMLタグとして出力されない

### propsで受け渡せるデータ
文字列、数値、真偽値、配列、オブジェクト、日付、もうなんでもOK
変数を渡してもええ。

### Hooks
コンポーネント内で状態を管理するstate
コンポーネントの時間の流れに基づくライフサイクル
#### stateを使うのは
- Reactコンポーネントの値を書き換えたいとき、新しい値を使って再描画させるため
- Reactコンポーネントが再描画されるきっかけは、stateもしくはpropsが変更されたとき