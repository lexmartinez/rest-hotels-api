/* eslint-env node, mocha */
'use strict';
import 'babel-polyfill'
const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));
const app = require('../index.js');

describe('Testing Hotels API - endpoint /v1/hotels', () => {

  before(() => {});

  after(()  => {});

  // GET - List all hotels
  it('should return all hotels', () => {
    return chai.request(app)
      .get('/v1/hotels')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
      });
  });

  // GET - hotel by id
  it('should return hotel information', () => {
    return chai.request(app)
      .get('/v1/hotels/5aa2a6c393b33cda1e73fa1c')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  // GET - hotel by invalid id
  it('should return 500 error', () => {
    return chai.request(app)
      .get('/v1/hotels/6543')
      .then(function(res) {
        throw new Error('Path exists!' + res);
      })
      .catch(function(err) {
        expect(err).to.have.status(500);
      });
  });

});