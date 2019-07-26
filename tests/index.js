/* eslint-disable prefer-const */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mocha from 'mocha';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import app from '../server';
import 'dotenv';

const { describe, it } = mocha;


chai.use(chaiHttp);

describe('API ', () => {
  describe('/GET tasks request', () => {
    it('expect valid request to have status 200', (done) => {
      chai.request(app)
        .get('/tasks')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('/POST task request', () => {
    it('expect response body to have 201 "Created" header code', (done) => {
      chai.request(app)
        .post('/tasks/{title}/{column}/{isComplete}')
        .end((err, res) => {
          expect(res).to.have.status(201);
          done();
        });
    });
  });
  describe('/PUT Requests', () => {
    it('should fail if ID does not exist', (done) => {
      let id = 921;
      let key = 'column';
      let value = 3;
      chai.request(app)
        .put(`/tasks/${id}/${key}/${value}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
  describe('/DELETE Requests', () => {
    it('expect 404 error if the ID does not exist', (done) => {
      let id = 8;
      chai.request(app)
        .delete(`/tasks/${id}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
    it('expect response body to not contain deleted ID', (done) => {
      let id = 102;
      chai.request(app)
        .delete(`/tasks/${id}`)
        .end((err, res) => {
          expect(res.body).to.not.include({ id });
          done();
        });
    });
  });
});
