var parser = require('../lib/jisonParser');

var parseData = function(content){
  var parsedData = parser.parse(content);
  return parsedData.convertToJs();
};

module.exports = parseData;
