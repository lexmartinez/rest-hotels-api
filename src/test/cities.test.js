/* eslint-env node, mocha */
'use strict';
import 'babel-polyfill'
const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));
const app = require('../index.js');

describe('Testing Cities API - endpoint /v1/cities', function()  {

  this.timeout(5000);

  before(() => {});

  after(()  => {});

  // GET - List all cities
  it('should return all cities', () => {
    return chai.request(app)
      .get('/v1/cities')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
      });
  });

});