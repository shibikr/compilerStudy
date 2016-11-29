var Tree = require('../lib/Tree.js');

var operatorInWords = {
  '+' : 'plus',
  '-' : 'minus',
  '*' : 'times',
  '/' : 'by'
};

var OperatorNode = function(operator){
  this.value = operator;
};

OperatorNode.prototype = {
  representInWords : function(){
    return operatorInWords[this.value];
  },
  evaluateExp : function(leftChild,rightChild){
    var left = (leftChild instanceof Tree)? leftChild.evaluateExp() : leftChild.evaluate();
    var right = (rightChild instanceof Tree)? rightChild.evaluateExp() : rightChild.evaluate();
    return eval(left+this.value+right);
  },
  convertToJs : function(leftChild,rightChild){
    var left = (leftChild instanceof Tree)? leftChild.convertToJs() : leftChild.value;
    var right = (rightChild instanceof Tree)? rightChild.convertToJs() : rightChild.value;
    return left+this.value+right;
  }
};

module.exports = OperatorNode;
