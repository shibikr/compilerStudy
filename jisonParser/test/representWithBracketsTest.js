var assert = require('assert');
var parseData = require('../source/representWithBrackets.js');

describe('represent with brackets',function(){
  it('should return ((1+2)+3) when 1+2+3 passes',function(){
    var data = '1+2+3;';
    var result = parseData(data);
    assert.equal(result,'((1+2)+3)');
  });

  it('should return (((1234*2)+3)+(4*5)) when 1234*2+3+4*5 passes',function(){
    var data = '1234*2+3+4*5;';
    var result = parseData(data);
    assert.equal(result,'(((1234*2)+3)+(4*5))');
  });

});
