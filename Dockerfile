
FROM node:alpine AS builder
ENV NODE_ENV production
WORKDIR /app
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
	