var ParseTree = function(parseTree){
  this.parseTree = parseTree;
};

ParseTree.prototype = {
  assignments : {},
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
  }
};

module.exports = ParseTree;
