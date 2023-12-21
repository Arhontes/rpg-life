FROM node:alpine as build
WORKDIR /app 
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/rpg-life/build  /var/www/build
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/sites-enabled/default
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]
