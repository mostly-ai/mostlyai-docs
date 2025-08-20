FROM node:20-slim AS build

COPY . /build

WORKDIR /build
RUN npm ci
RUN npm run export

# * We need to update the `public` hrefs because next export doesn't do that even if you provide a basePath.
# * Thankfully, only the `public` directory is affected and we're using static serving, so it's easy to do.
RUN set -eux; \
  for dir in $(find /build/public -mindepth 1 -maxdepth 1 -type d -exec basename {} \;); do \
  find /build/out -type f -name "*.html" -exec sed -i "s|/${dir}/|/docs/${dir}/|g" {} +; \
  find /build/out -type f -name "*.js" -exec sed -i "s|/${dir}/|/docs/${dir}/|g" {} +; \
  done \
  && \
  for dir in $(find /build/public -mindepth 1 -maxdepth 1 -type d -exec basename {} \;); do \
  find /build/out -type f -name "*.html" -exec sed -i "s|docs/docs|docs|g" {} +; \
  find /build/out -type f -name "*.js" -exec sed -i "s|docs/docs|docs|g" {} +; \
  done

FROM cgr.dev/chainguard/wolfi-base:latest AS final

USER root
WORKDIR /app
RUN chmod 777 /app
RUN apk add --no-cache wget bash tzdata
ENV LANG="C.UTF-8"

RUN apk add --no-cache caddy
RUN mkdir -p /etc/caddy.d/config \
  && chmod 755 /etc/caddy.d \
  && chmod 777 /etc/caddy.d/config

COPY --chown=root:root --chmod=644 ./docker/Caddyfile /etc/caddy.d/Caddyfile
COPY --chown=root:root --chmod=644 ./docker/_global.Caddyfile /etc/caddy.d/_global.Caddyfile
COPY --chmod=644 /docker/server.Caddyfile /etc/caddy.d/config/server.Caddyfile
COPY --from=build --chmod=755 /build/out /app/html

ARG GIT_COMMIT_SHA=unknown
LABEL GIT_COMMIT_SHA=$GIT_COMMIT_SHA
ENV GIT_COMMIT_SHA=$GIT_COMMIT_SHA

USER nonroot

ENTRYPOINT [ "caddy", "run", "--config", "/etc/caddy.d/Caddyfile", "--adapter", "caddyfile" ]
