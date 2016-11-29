var Tree = require('./Tree.js');

var AssignmentNode = function(operator){
  this.value = operator;
};

AssignmentNode.prototype = {
  evaluateExp : function(leftChild,rightChild){
    if(rightChild instanceof Tree)
      return leftChild.addValue(rightChild.evaluateExp());
    return leftChild.addValue(rightChild.evaluate());
  },
  convertToJs : function(leftChild,rightChild){
    var right = rightChild instanceof Tree ? rightChild.convertToJs():rightChild.value;
    return leftChild.value+'='+right+';';
  }
};

module.exports = AssignmentNode;
