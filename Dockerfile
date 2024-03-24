# 使用するベースイメージ
FROM node:20.11.1-alpine3.19

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# package.json と package-lock.json をコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# ホストOSのファイルをコンテナにコピー
COPY . .

# ビルドを実行
RUN npm run build

# デフォルトのポートを公開
EXPOSE 3000

# アプリの起動
CMD ["npm", "start"]