# 概要

- React プロジェクトを量産するためのボイラープレート  
- 学習しながら作り上げていく

# セットアップ
```
yarn install
yarn start
```

## Storybook

```
yarn storybook
```

# 完全初期のブランチ

以下は create-react-app した直後のものです
```
git checkout init/project
```

# 運用手順

- develop ブランチがボイラープレートになる
- 新しくライブラリを追加したい場合は、developからブランチを切って動作確認後にマージする

# ルーティングの設定

- src/index.tsx で編集してできる
- 参考: https://reffect.co.jp/react/react-router-6#Not_Found_Routes

```tsx
 <Route path="/パス名" element={<表示するコンポーネント />} />
```



# 開発環境

Yarn / Typescript / AtomicDesign / Storybook / axios
