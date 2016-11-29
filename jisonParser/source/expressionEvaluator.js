var parser = require('../lib/jisonParser');

var parseData = function(content){
  var parsedData = parser.parse(content);
  return parsedData.evaluateExp();
};

module.exports = parseData;
