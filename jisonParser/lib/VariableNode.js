var parseTree = require('../lib/ParseTree.js');
var UserException = require('../lib/UserException.js');

var VariableNode = function(variable){
  this.value = variable;
};

VariableNode.prototype = {
  assignments : {},
  addValue : function(content){
    return this.assignments[this.value] = content;
  },
  evaluate : function(){
    var result = this.assignments[this.value];
    if(result == undefined){
      message = this.value+' is not defined';
      throw new UserException(message);
    }
    return result;
  },
  evaluateExp : function(){
    return this.evaluate();
  }
};

module.exports = VariableNode;
