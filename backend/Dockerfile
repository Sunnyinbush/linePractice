FROM node:19-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .
EXPOSE 4000:4000

CMD ["npm", "start"]