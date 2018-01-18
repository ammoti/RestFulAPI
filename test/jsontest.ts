import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import index from '../src/index';

chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {

  it('should be json', () => {
    return chai.request(index).get('/api/collection')
    .then(res => {
      expect(res.type).to.eql('application/json');
    });
  });

  it('should be json', () => {
    return chai.request(index).get('/api/albums')
    .then(res => {
      expect(res.type).to.eql('application/json');
    });
  });

});
