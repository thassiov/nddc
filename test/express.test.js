/**
 * @module test/express.test.js
 * @author Thassio Victor <tvmcarvalho@gmail.com>
 * @desc Testes do servidor Express
 */

'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Teste do servidor Express', () => {
    it('Deve retornar a versão do projeto (contido no package.json)', (done) => {
        chai.request(server)
        .get('/versao')
        .end((err, res) => {
            expect(res.body).to.have.property('version').and.to.equal('0.1.0');
            done();
        });
    });

    it('Deve retornar corretamente as dependências do projeto', (done) => {
        const deps = {
            "express":"^4.15.4"
        };

        chai.request(server)
        .get('/deps')
        .end((end, res) => {
            expect(res.body).to.have.property('dependencies').and
                .to.deep.equal(deps)
            done();
        });
    });
});
