var assert = require('assert');
var parseData = require('../source/javascriptConverter.js');

describe('convert to js',function(){
  it('convert variable declaration',function(){
    var result = parseData('x=5;');
    assert.equal(result,'var x=5;');
  });

  it('convert multiple expressions to js',function(){
    var result = parseData('x=5;5+x*2;')
    assert.equal(result,'var x=5;\nconsole.log(5+(10*2));');
  });
});
