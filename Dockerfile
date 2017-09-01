FROM node:8-alpine

ADD ./package.json /tmp/package.json
RUN mkdir /src && cd /tmp && npm install
RUN cp -a /tmp/node_modules /src/node_modules

ADD . /src
WORKDIR /src

EXPOSE 3000
