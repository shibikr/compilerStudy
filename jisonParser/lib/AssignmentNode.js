var AssignmentNode = function(){

};

AssignmentNode.prototype = {
  evaluateExp : function(leftChild,rightChild){
    return leftChild.addValue(rightChild);
  }
};

module.exports = AssignmentNode;
