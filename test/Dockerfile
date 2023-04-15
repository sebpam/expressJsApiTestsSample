FROM node:18.16.0

WORKDIR /app

COPY ./test /app

RUN dir -s

RUN npm i -g mocha
RUN npm i -g ts-node
RUN npm ci

ENV TEST_ENV=docker

EXPOSE 8080

CMD ["sh", "runtests.sh"]
