FROM node:16.17-alpine as watermonitor-web

WORKDIR /app

COPY package*.json /app/
COPY yarn.lock /app/
COPY nginx.conf /app/

RUN yarn

COPY ./ /app/

RUN yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.23.1-alpine

COPY --from=watermonitor-web /app/dist/ /usr/share/nginx/html

# Copy the default nginx.conf
# COPY --from=watermonitor-web /nginx.conf /etc/nginx/conf.d/default.conf