/* eslint-env node, mocha */
'use strict';
import 'babel-polyfill'
const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));
const app = require('../index.js');

describe('Testing API - Invalid Path', function() {

  before(function() {});

  after(function() {});

  // GET - Invalid path
  it('should return 404 - Not Found', function() {
    return chai.request(app)
      .get('/INVALID_PATH')
      .then(function(res) {
        throw new Error('Path exists!' + res);
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
      });
  });

});