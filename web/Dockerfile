FROM node:16.13.0-alpine as watermonitor-web

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.23.1-alpine

COPY --from=watermonitor-web /app/dist/ /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=watermonitor-web /nginx.conf /etc/nginx/conf.d/default.conf