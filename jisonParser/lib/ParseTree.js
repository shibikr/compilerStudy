var Tree = require('./AssignmentNode.js');

var ParseTree = function(parseTree){
  this.parseTree = parseTree;
};

ParseTree.prototype = {
  addTree : function(tree){
    this.parseTree.push(tree)
    return this.parseTree;
  },
  evaluateExp : function(){
    return this.parseTree.map(function(tree){
      return tree.evaluateExp();
    }).pop();
  },
  addParenthesis : function(){
    return this.parseTree.map(function(tree){
      return tree.evaluate();
    }).pop();
  },
  representInWords : function(){
    return this.parseTree.map(function(tree){
      return tree.representInWords();
    }).pop();
  },
  convertToJs : function(){
    return this.parseTree.map(function(tree){
      if(tree.root instanceof Tree)
        return 'var '+tree.convertToJs();
      return 'console.log('+tree.convertToJs()+');';
    }).join('\n');
  }
};

module.exports = ParseTree;
