# FROM node:12.20-alpine as angular
# WORKDIR /app   

# COPY package.json /app/package.json
# RUN npm install
# COPY . .
# RUN npm run build --prod

# FROM nginx:stable-alpine
# VOLUME /var/cache/nginx
# COPY --from=angular app/dist /usr/share/nginx/html
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

FROM nginx:stable-alpine
COPY dist/rayotec-adminstracion-app/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
