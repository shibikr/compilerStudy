var createParseTree = require('../lib/jisonParser');

var parseData = function(content){
  var parsedData = createParseTree(content);
  return parsedData.addParenthesis();
};

module.exports = parseData;
