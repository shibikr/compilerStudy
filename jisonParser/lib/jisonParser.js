var fs = require('fs');
var jison = require('jison');

var bnf = fs.readFileSync('../lib/parseTreeGenerator.jison','utf8');
var parser = new jison.Parser(bnf);

var analyzeSyntax = function(content){

};

var createParseTree = function(content){
  analyzeSyntax(content);
  return parser.parse(content);
};

module.exports = createParseTree;
