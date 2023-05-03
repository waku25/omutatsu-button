# 依存パッケージインストール
FROM node:16.19.0-alpine3.17 AS dependencies
WORKDIR /src
COPY package*.json ./
RUN npm ci

CMD ["sh"]