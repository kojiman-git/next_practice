# ベースイメージ
FROM node:18

# 作業ディレクトリを設定
WORKDIR /app

# パッケージをインストール
COPY package*.json ./
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# アプリケーションを起動
CMD ["npm", "run", "dev"]
