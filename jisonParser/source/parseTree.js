var createParseTree = require('../lib/jisonParser');

var parseData = function(content){
  return createParseTree(content);
};

module.exports = parseData;
