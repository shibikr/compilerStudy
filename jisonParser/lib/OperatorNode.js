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
    return eval(leftChild.evaluate()+this.value+rightChild.evaluate());
  }
};

module.exports = OperatorNode;
