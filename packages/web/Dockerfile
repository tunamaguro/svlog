FROM node:16.15.1-buster-slim

USER node

WORKDIR /workspace

COPY package.json yarn.lock ./

RUN yarn install