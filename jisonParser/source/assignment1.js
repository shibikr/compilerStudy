var parser = require('../lib/jisonParser');

var parseData = function(content){
  var parsedData = parser.parse(content);
  return parsedData.evaluate();
};

module.exports = parseData;
