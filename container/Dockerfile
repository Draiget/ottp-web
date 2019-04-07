FROM yobasystems/alpine-nginx

COPY dist/ /tmp
VOLUME /var/www
ADD nginx.conf /etc/nginx/nginx.conf
EXPOSE 8091
ENTRYPOINT nginx
