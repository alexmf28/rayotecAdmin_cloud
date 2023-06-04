FROM nginx:stable-alpine
COPY dist/rayotecAdministracionAPP/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

