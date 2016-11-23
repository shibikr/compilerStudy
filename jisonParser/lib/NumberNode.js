var converter = require('number-to-words');

var NumberNode = function(number) {
  this.value = number;
};

NumberNode.prototype = {
  evaluate:function(){
    return Number(this.value);
  },
  representInWords : function(){
    return converter.toWords(this.value);
  }
};

module.exports = NumberNode;
