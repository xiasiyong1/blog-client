FROM nginx

WORKDIR /APP

COPY ./blog-client.conf /etc/nginx/conf.d
COPY ./dist /etc/nginx/html