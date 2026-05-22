# UTokyo iii Exhibition 2026: Beginning

東京大学制作展 2026「Beginning」の公開ページです。

Next.js、React、Tailwind CSS をベースに制作された展示 Web サイトで、日本語ページと英語ページを提供します。

## 技術スタック

- Next.js
- React
- TypeScript
- Tailwind CSS
- npm

## 実行方法

依存パッケージをインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで以下の URL にアクセスします。

```text
http://localhost:3000
```

言語別ページは以下のパスで確認できます。

- Japanese: `http://localhost:3000/ja`
- English: `http://localhost:3000/en`

## ビルドと本番実行

本番用ビルドを作成します。

```bash
npm run build
```

ビルド済みのアプリをローカルで起動します。

```bash
npm run start
```

## 主なスクリプト

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用ビルドを作成 |
| `npm run start` | ビルド済みアプリを起動 |
| `npm run lint` | Next.js の lint を実行 |

## プロジェクト構成

```text
.
├── app
│   ├── [locale]/page.tsx   # 言語別のメインページ
│   ├── globals.css         # グローバルスタイル
│   ├── layout.tsx          # ルートレイアウトとメタデータ
│   └── page.tsx            # ルートパスから /ja へリダイレクト
├── components
│   └── sections            # ページを構成するセクションコンポーネント
├── lib
│   ├── i18n.ts             # 対応言語、デフォルト言語、dictionary 型
│   └── locales             # 日本語・英語の文言 JSON
├── next.config.ts
├── package.json
└── README.md
```

## ページ構成

`app/[locale]/page.tsx` で、以下のセクションコンポーネントを順番にレンダリングしています。

- `MainPageSection`
- `NavigationSection`
- `ConceptSection`
- `AboutSection`
- `WorksSection`
- `MembersSection`
- `AccessSection`
- `ArchivesSection`
- `FooterSection`

各セクションのテキストはコンポーネント内に直接書かず、`lib/locales` の JSON ファイルから取得しています。

## 多言語テキストの編集

文言を変更する場合は、以下のファイルを編集します。

- 日本語: `lib/locales/ja.json`
- 英語: `lib/locales/en.json`

対応言語の一覧、デフォルト言語、dictionary 型は `lib/i18n.ts` で管理しています。

現在のデフォルト言語は日本語（`ja`）です。`/` にアクセスすると、`app/page.tsx` によって `/ja` へ移動します。

## 開発メモ

- 新しいセクションを追加する場合は、`components/sections` にコンポーネントを作成し、`app/[locale]/page.tsx` に接続します。
- セクションに新しい文言が必要な場合は、`lib/i18n.ts` の `Dictionary` 型と `lib/locales/ja.json`、`lib/locales/en.json` をあわせて更新します。
- 開発サーバーがすでに起動している場合は、まず `http://localhost:3000` を確認します。
- `Another next dev server is already running` というエラーが出る場合は、既存のサーバーを終了するか、別のポートで起動します。

```bash
npm run dev -- -p 3001
```
