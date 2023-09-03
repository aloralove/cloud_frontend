# Stage 1: Build the Angular application
FROM node:latest as build
WORKDIR /cloud_frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ARG configuration=production
RUN npm run build --configuration=$configuration

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /dist/cloud_frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

