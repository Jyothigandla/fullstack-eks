FROM node:18

WORKDIR /app

COPY backend/package.json .
RUN npm install

COPY backend/app.js .

COPY frontend/index.html ./public/index.html

RUN npm install express

EXPOSE 3000

CMD ["node", "app.js"]
