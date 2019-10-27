/* eslint-disable prefer-const */
import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../server';
import 'dotenv';


describe('API ', () => {
  describe('/GET legislators request', () => {
    it('expect URL to contain state code', (done) => {
      chai.request(app)
        .get('/reps')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
