FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

ENV PORT 3000

CMD ["node", "src/server.js"]