/**
 * @module server.js
 * @author Thassio Victor <tvmcarvalho@gmail.com>
 * @desc Servidor Express da demonstração "Node, Docker e docker-compose"
 *
 */
'use strict';

const express = require('express');
const server = express();

const porta = 3000;
const host = 'localhost';

const pjson = require('./package.json');

server.get('/versao', (req, res) => {
    res.json({'version':pjson.version});
});

server.get('/deps', (req, res) => {
    res.json({'dependencies':pjson.dependencies});
});

server.listen(porta, host, () => {
    console.log(`Servidor online! : http://${host}:${porta}`);
});

// Para poder executar os testes
module.exports = server;
