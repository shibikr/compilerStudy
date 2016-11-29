var Tree = require('../lib/Tree.js');

var ExponentNode = function(operator){
  this.value = operator;
};

ExponentNode.prototype = {
  evaluateExp : function(leftChild,rightChild){
    var left = (leftChild instanceof Tree) ? leftChild.evaluateExp() : leftChild.evaluate();
    var right = (rightChild instanceof Tree) ? rightChild.evaluateExp() : rightChild.evaluate();
    return Math.pow(left,right);
  },
  convertToJs : function(leftChild,rightChild){
    var left = (leftChild instanceof Tree) ? leftChild.convertToJs() : leftChild.value;
    var right = (rightChild instanceof Tree) ? rightChild.convertToJs() : rightChild.value;
    return left+this.value+right;
  }
};

module.exports = ExponentNode;
