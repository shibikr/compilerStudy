var Tree = require('../lib/Tree.js');

var AssignmentNode = function(operator){
  this.value = operator;
};

AssignmentNode.prototype = {
  evaluateExp : function(leftChild,rightChild){
    // if(leftChild instanceof Tree)
    //   throw new UserException('Invalid left-hand side in assignment');
    if(rightChild instanceof Tree)
      return leftChild.addValue(rightChild.evaluateExp());
    return leftChild.addValue(rightChild.evaluate());
  }
};

module.exports = AssignmentNode;
