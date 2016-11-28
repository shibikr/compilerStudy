var ExponentNode = function(operator){
  this.value = operator
};

ExponentNode.prototype = {
  evaluateExp : function(leftChild,rightChild){
    return Math.pow(leftChild.evaluate(),rightChild.evaluate());
  }
};

module.exports = ExponentNode;
