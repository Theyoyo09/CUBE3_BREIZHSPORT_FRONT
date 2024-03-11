# Stage 1: Build the Angular application
FROM node:latest as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build -- --output-path=./dist/out

# Stage 2: Serve the built Angular application using Nginx
FROM nginx:alpine

COPY --from=build /app/dist/out /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
