FROM node:alpine as build
WORKDIR /app 
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build  /var/www/build
EXPOSE 8080
CMD [ "nginx", "-g", "daemon off;"]
