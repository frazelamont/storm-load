import should from 'should';
import Load from '../dist/storm-load';
import 'jsdom-global/register';

const html = `<div class="chart"></div>`;

document.body.innerHTML = html;

describe('Load', () => {

  let loader = Load(['//d3js.org/d3.v3.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/preact/6.3.0/preact.min.js']);

  it('should return a promise', () => {
    loader.should.be.a.Promise();
  });

  it('should reject anything but an array', () => {
    Load('//d3js.org/d3.v3.min.js').should.be.rejected();
  });

  it('should return promise fulfilled if passed an array of valid JS files', () => {
    loader.should.be.fulfilled();
  });

  it('should reject a non-JS file in the array', () => {
    Load(['//d3js.org/']).should.be.rejected();
  });

});

describe('Load synchronously', () => {
  let loader = Load(['//d3js.org/d3.v3.min.js', '//cdnjs.cloudflare.com/ajax/libs/d3.chart/0.2.0/d3.chart.js'], false)

  it('should return a promise', () => {
    loader.should.be.a.Promise();
  });

  it('should reject anything but an array', () => {
    Load('//d3js.org/d3.v3.min.js', false).should.be.rejected();
  });

  it('should return promise fulfilled if passed an array of valid JS files', () => {
    loader.should.be.fulfilled();
  });

  it('should reject a non-JS file in the array', () => {
    Load(['//d3js.org/'], false).should.be.rejected();
  });



});