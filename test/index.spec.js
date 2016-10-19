import should from 'should';
import Load from '../dist/storm-load';
import 'jsdom-global/register';

const html = `<div class="chart"></div>`;

document.body.innerHTML = html;

describe('Load', () => {

  let loader = Load(['//d3js.org/d3.v3.min.js']);

  it('should return a promise', () => {
    loader.should.be.a.Promise();
  });

  it('should reject anything but an array', () => {
    Load('//d3js.org/d3.v3.min.js').should.be.rejected();
  });

  it('should return promise fulfilled', () => {
    Load(['//d3js.org/d3.v3.min.js']).then(() => { return 10; }).should.be.fulfilled();
  });

  it('should reject a non-JS file in the array', () => {
    Load(['//d3js.org/']).then(() => { return 10; }).should.be.fulfilled();
  });

});