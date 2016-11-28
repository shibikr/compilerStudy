var assert = require('assert');
var parseData = require('../source/assignment2.js');

describe('parseData',function(){
  it('should return ((one plus two) plus three) when 1+2+3 passes',function(){
    var data = '1+2+3;';
    var result = parseData(data);
    assert.equal(result,'((one plus two) plus three)');
  });

  it('should return (( one thousand, two hundred thirty-four times two) plus three) when 1234*2+3 passes',function(){
    var data = '1234*2+3;';
    var result = parseData(data);
    assert.equal(result,'((one thousand, two hundred thirty-four times two) plus three)');
  });

});
