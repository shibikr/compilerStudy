var parser = require('../lib/jisonParser');
const readline = require('readline');

var parseData = function(content){
  var parsedData = parser.parse(content);
  return parsedData.evaluateExp();
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt:'> '
});

rl.prompt();

rl.on('line', (input) => {
  console.log(parseData(input));
  rl.prompt();
});


rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit(y/n)?', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});
