var assert = require('assert');
var parseData = require('../source/assignment3.js');
var expect = require('chai').expect;

describe('Parse tree', function() {
  it('should throw an error when variable is not assigned', function() {
    var expected = function(){parseData('x+10;x=10;');}
    expect(expected).to.throws(Error,'x is not defined');
  });

  it('should evaluate the tree of the given expression x=10;5*x+2;', function() {
    var result = parseData('x=10;5*x+2;');
    assert.equal(result, 52);
  });

  it('should evaluate the tree of the given expression x=10;5+x*2;', function() {
    var result = parseData('x=10;5+x*2;');
    assert.equal(result, 25);
  });

  it('should evaluate the tree of the given expression of multiple assignments', function() {
    var result = parseData('x=10;y=20;z=20;5+x*2+y+z;');
    assert.equal(result, 65);
  });

  it('should evaluate the tree of the given expression of multiple assignments with brackets', function() {
    var result = parseData('x=10;y=20;z=30;x^2+y^2-z^2;');
    assert.equal(result, -400);
  });

  it('should evaluate the tree with expression assigns to variable ', function() {
    var result = parseData('x=10;y=x+20;y+5;');
    assert.equal(result, 35);
  });

  it('should return the value of given variable ', function() {
    var result = parseData('x=2;x=2^5;x;');
    assert.equal(result, 32);
  });

  it('should evaluate expressions containing parenthesis ', function() {
    var result = parseData('x=10;y=20;z=30;(x^2)+(y^2)-(z^2);');
    assert.equal(result, -400);
  });

});
