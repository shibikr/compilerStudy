var parser = require('../lib/jisonParser');
const readline = require('readline');

var parseData = function(content){
  var parsedData = parser.parse(content);
  return parsedData.evaluateExp();
};

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:'> '
});

interface.prompt();

interface.on('line', (input) => {
  console.log(parseData(input));
  interface.prompt();
});


interface.on('SIGINT', () => {
  interface.question('Are you sure you want to exit(y/n)?', (answer) => {
    if (answer.match(/^y(es)?$/i)) interface.pause();
  });
});
