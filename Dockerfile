FROM node:14-alpine
ENV APP_ROOT /web
ENV NODE_ENV dependencies

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]