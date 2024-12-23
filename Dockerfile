FROM node:20.16-alpine3.19 AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --production;
COPY . .
RUN yarn build
RUN rm -rf ./.next/cache

FROM base AS runner
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static

EXPOSE 3001

CMD ["yarn", "start"]