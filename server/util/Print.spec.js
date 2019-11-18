/* eslint-disable prefer-const */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import Print from './Print';


describe('Printer Methods ', () => {
  it('expect "repsFromState" request to contain state code', () => {
    const print = new Print({ state: 'AZ' });
    const url = print.url.repsFromState();
    const expected = 'https://www.opensecrets.org/api/?method=getLegislators&id=AZ&apikey=88d1aa9112f23c0bdf6a3fddaef2ccdf&output=json';
    expect(url).to.equal(expected);
  });

  it('expect "sectorsToCandidate" request to render with CID', () => {
    const print = new Print({ cid: '01923710', cycle: '2012' });
    const url = print.url.sectorsToCandidate();
    const expected = 'https://www.opensecrets.org/api/?method=candSector&cid=01923710&cycle=2012&apikey=88d1aa9112f23c0bdf6a3fddaef2ccdf&output=json';
    expect(url).to.equal(expected);
  });
});
