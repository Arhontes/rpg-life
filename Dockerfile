FROM node:alpine as build
WORKDIR /app 
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build  /var/www/build
COPY --from=build /app/.nginx/server.conf /etc/nginx/sites-enabled/default
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD [ "nginx", "-g", "daemon off;"]
