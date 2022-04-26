FROM node:lts-alpine AS debug
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .