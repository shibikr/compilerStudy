var assert = require('assert');
var parseData = require('../source/parseTree.js');

describe('parseTree',function(){
  it('should accept a number',function(){
    var actual = parseData('5');
    var expected = { parseTree: [ { value: '5' } ] };
    assert.deepEqual(actual,expected);
  });

  it('should accept a variable',function(){
    var actual = parseData('a');
    var expected = { parseTree: [ { value: 'a' } ] };
    assert.deepEqual(actual,expected);
  });

  it('should accept an expression',function(){
    var actual = parseData('1+2;');
    var expected = { parseTree: [ {"leftChild": {
                                    "value": "1"
                                  },
                                  "rightChild": {
                                    "value": "2"
                                  },
                                  "root": {
                                    "value": "+"
                                  }
                                }
                    ] };
    assert.deepEqual(actual,expected);
  });

  it('should accept an expression without semicolon',function(){
    var actual = parseData('1+2');
    var expected = {"parseTree": [
                      {
                        "leftChild": {
                          "value": "1"
                        },
                        "rightChild": {
                          "value": "2"
                        },
                        "root": {
                          "value": "+"
                        }
                      }
                    ]};
    assert.deepEqual(actual,expected);
  });

  it('should accept multiple expressions without semicolon',function(){
    var actual = parseData('x=10 x+10');
    var expected = {"parseTree": [
                      {
                        "leftChild": {
                          "value": "x"
                        },
                        "rightChild": {
                          "value": "10"
                        },
                        "root": {
                          "value": "="
                        }
                      },
                      {
                        "leftChild": {
                          "value": "x"
                        },
                        "rightChild": {
                          "value": "10"
                        },
                        "root": {
                          "value": "+"
                        }
                      }
                    ]};
    assert.deepEqual(actual,expected);
  });
});
