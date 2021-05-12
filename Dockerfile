FROM node:14-alpine
ENV APP_ROOT /web
ENV NODE_ENV dependencies

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN yarn
RUN yarn build

CMD yarn run dev -p $PORT