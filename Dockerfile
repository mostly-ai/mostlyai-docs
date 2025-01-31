FROM harbor.m-dev.mostlylab.com/ubi/ubi9-nginx:124

ARG GIT_COMMIT_SHA=unknown
LABEL GIT_COMMIT_SHA=$GIT_COMMIT_SHA
ENV GIT_COMMIT_SHA=$GIT_COMMIT_SHA

ADD /docker/server.conf.template /etc/nginx/templates/server.conf.template

COPY /out ./html
COPY /docker/error  ./error

CMD mostly_start_nginx.sh
