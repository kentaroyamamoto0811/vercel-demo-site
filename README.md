# 🚀 Vercelデプロイ完全ガイド

このプロジェクトは、Vercelでのデプロイを学ぶためのシンプルなデモサイトです。

## 📋 目次
1. [プロジェクト概要](#プロジェクト概要)
2. [必要なもの](#必要なもの)
3. [ローカルでの確認](#ローカルでの確認)
4. [Vercelへのデプロイ方法](#vercelへのデプロイ方法)
5. [デプロイ後の管理](#デプロイ後の管理)

## 🎯 プロジェクト概要

このプロジェクトには以下のファイルが含まれています：
- `index.html` - メインのHTMLファイル
- `styles.css` - スタイルシート
- `script.js` - JavaScriptファイル
- `vercel.json` - Vercelの設定ファイル

## 🛠️ 必要なもの

### 1. Vercelアカウント
- [Vercel公式サイト](https://vercel.com/)でアカウントを作成
- GitHub、GitLab、Bitbucketアカウントで簡単に登録可能

### 2. Node.js（Vercel CLIを使う場合）
- [Node.js公式サイト](https://nodejs.org/)からダウンロード
- LTS版の推奨

### 3. Git（推奨）
- [Git公式サイト](https://git-scm.com/)からダウンロード
- バージョン管理とデプロイに使用

## 🖥️ ローカルでの確認

デプロイ前に、ローカルでサイトを確認できます：

### 方法1: Pythonを使う
```bash
# プロジェクトディレクトリに移動
cd vercel-demo-site

# 簡易サーバーを起動
python -m http.server 3000

# ブラウザで http://localhost:3000 にアクセス
```

### 方法2: Live Serverを使う
VS Code拡張機能「Live Server」をインストールして、`index.html`を右クリック → "Open with Live Server"

### 方法3: Vercel CLIを使う
```bash
# Vercel CLIをインストール
npm i -g vercel

# プレビュー
vercel dev
```

## 🚀 Vercelへのデプロイ方法

### 方法A: Vercel CLIを使う（最も簡単）

#### ステップ1: Vercel CLIのインストール
```bash
npm install -g vercel
```

#### ステップ2: ログイン
```bash
vercel login
```
→ メールアドレスを入力し、送られてくるメールのリンクをクリック

#### ステップ3: デプロイ
```bash
# プロジェクトディレクトリで実行
cd vercel-demo-site
vercel
```

初回デプロイ時の質問：
- **Set up and deploy?** → `Y`（Enter）
- **Which scope?** → あなたのアカウントを選択
- **Link to existing project?** → `N`
- **What's your project's name?** → `vercel-demo-site`（またはお好きな名前）
- **In which directory is your code located?** → `./`（Enter）
- **Override settings?** → `N`

→ デプロイが完了すると、URLが表示されます！

#### ステップ4: 本番環境へデプロイ
```bash
vercel --prod
```

---

### 方法B: GitHubと連携してデプロイ（推奨）

#### ステップ1: Gitリポジトリの初期化
```bash
cd vercel-demo-site
git init
git add .
git commit -m "Initial commit"
```

#### ステップ2: GitHubでリポジトリ作成
1. [GitHub](https://github.com/)にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名を入力（例：`vercel-demo-site`）
4. 「Create repository」をクリック

#### ステップ3: GitHubにプッシュ
```bash
# GitHubのリポジトリURLを設定（<username>を自分のユーザー名に置き換え）
git remote add origin https://github.com/<username>/vercel-demo-site.git
git branch -M main
git push -u origin main
```

#### ステップ4: Vercelと連携
1. [Vercel Dashboard](https://vercel.com/dashboard)にログイン
2. 「Add New...」→「Project」をクリック
3. 「Import Git Repository」でGitHubを選択
4. 作成したリポジトリを選択
5. 「Import」をクリック
6. 設定はデフォルトのままでOK
7. 「Deploy」をクリック

→ デプロイが完了すると、URLが表示されます！

**以降は自動デプロイ：**
- `main`ブランチにプッシュすると自動的に本番環境にデプロイ
- 他のブランチにプッシュすると、プレビュー環境が作成される

---

### 方法C: Vercel Webインターフェースから直接デプロイ

#### ステップ1: プロジェクトをZIPで圧縮
プロジェクトフォルダを右クリック → 「送る」→「圧縮（ZIP形式）フォルダー」

#### ステップ2: Vercelにアップロード
1. [Vercel Dashboard](https://vercel.com/dashboard)にログイン
2. 「Add New...」→「Project」をクリック
3. 「Deploy with Zero Configuration」セクションでZIPファイルをドラッグ&ドロップ

→ 自動的にデプロイが開始されます！

## 🎛️ デプロイ後の管理

### デプロイ状況の確認
- [Vercel Dashboard](https://vercel.com/dashboard)で確認
- デプロイ履歴、ログ、パフォーマンスなどを確認可能

### カスタムドメインの設定
1. Vercelダッシュボードでプロジェクトを選択
2. 「Settings」→「Domains」
3. 「Add」をクリックしてドメインを入力
4. DNSレコードを設定（指示に従う）

### 環境変数の設定
1. 「Settings」→「Environment Variables」
2. 変数名と値を入力
3. 「Save」をクリック

### ロールバック
1. 「Deployments」タブで過去のデプロイを表示
2. ロールバックしたいデプロイの「...」→「Promote to Production」

## 📝 よくある質問

### Q: デプロイは無料ですか？
A: はい、個人プロジェクトや小規模プロジェクトは無料プランで十分です。

### Q: 何回でもデプロイできますか？
A: はい、無料プランでも無制限にデプロイ可能です。

### Q: HTTPSは自動ですか？
A: はい、Vercelは自動的にSSL証明書を設定します。

### Q: デプロイは何分かかりますか？
A: このような静的サイトなら、通常30秒〜1分程度です。

## 🎉 成功のヒント

1. **小さく始める**: まずシンプルなサイトをデプロイ
2. **Git連携**: GitHubと連携すると自動デプロイが便利
3. **プレビュー機能**: 本番前にプレビュー環境で確認
4. **ログを確認**: エラーが出たらVercelのログを確認
5. **ドキュメント**: [Vercel公式ドキュメント](https://vercel.com/docs)を参照

## 🔗 参考リンク

- [Vercel公式サイト](https://vercel.com/)
- [Vercelドキュメント](https://vercel.com/docs)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Vercelテンプレート](https://vercel.com/templates)

## 📧 サポート

問題が発生した場合：
1. [Vercelコミュニティ](https://github.com/vercel/vercel/discussions)
2. [Vercelサポート](https://vercel.com/support)

---

**おめでとうございます！🎉**

これで、あなたのサイトが世界中に公開されました！

