/* eslint-env node, mocha */
'use strict';
import 'babel-polyfill'
const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));
const app = require('../index.js');

describe('Testing API - Invalid Path', function() {

  this.timeout(5000);

  before(() => {});

  after(() => {});

  // GET - Invalid path
  it('should return 404 - Not Found', () => {
    return chai.request(app)
      .get('/INVALID_PATH')
      .then((res) => {
        throw new Error('Path exists!' + res);
      })
      .catch((err)  => {
        expect(err).to.have.status(404);
      });
  });

});