FROM node:20.16-alpine3.19 as builder

WORKDIR /builder

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:20.16-alpine3.19 as production

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY --from=builder /builder/dist ./dist
COPY --from=builder /builder/.next ./.next
COPY --from=builder /builder/public ./public

EXPOSE 3001

CMD ["yarn", "start"]