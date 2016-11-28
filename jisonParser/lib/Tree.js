var Tree = function(leftChild,root,rightChild) {
  this.root = root;
  this.leftChild = leftChild;
  this.rightChild = rightChild;
};

Tree.prototype = {
  evaluate : function(){
    return ['('+this.leftChild.evaluate()+this.root.value+this.rightChild.evaluate()+')'].join('');
  },
  representInWords : function(){
    return ['('+this.leftChild.representInWords()+' '+this.root.representInWords()+' '+this.rightChild.representInWords()+')'].join('');
  },
  evaluateExp : function(){
    return this.root.evaluateExp(this.leftChild,this.rightChild);
  }
};

module.exports = Tree;
