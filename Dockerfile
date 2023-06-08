FROM node:12.16.1-alpine as angular
WORKDIR /app   

COPY package.json /app/package.json
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:stable-alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf


