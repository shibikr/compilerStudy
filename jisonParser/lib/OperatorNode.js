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
  }
};

module.exports = OperatorNode;
