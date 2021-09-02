// import { expect } from 'chai';
import { describe, it } from 'mocha';
import { stringify } from 'query-string';
import request from 'supertest-as-promised';
import app from '../src/graphql';

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();

chai.use(chaiHttp);
process.env.NODE_ENV = 'test';

const urlString = (urlParams) => {
  let string = '/graphql';
  if (urlParams) {
    string += (`?${stringify(urlParams)}`);
  }
  return string;
};

describe('GraphQL-HTTP tests', () => {
  describe('Ping Server', () => {
    it('connects to addition endpoint', () => {
      request(app)
        .get('/add/1/1')
        .expect(200);
    });
  });
});

describe('get all values getfilms test', () => {
  it('start getfilms data', (done) => {
    request(app)
      .post('/graphql')
      .send({ query: '{ getFilms { id times  } }' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const JSONData = JSON.stringify(res.body.data.getFilms);

        const response = JSON.parse(JSONData);

        console.log(response);

        // response.text.getFilms.should.have.property('id');
        // response.text.getFilms.should.have.property('times');

        done();
      });
  });
});
