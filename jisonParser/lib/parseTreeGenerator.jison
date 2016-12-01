/* lexical grammar */
%{
  var path = require('path');
  var Tree = require(path.resolve('./lib/Tree.js'));
  var NumberNode = require(path.resolve('./lib/NumberNode.js'));
  var OperatorNode = require(path.resolve('./lib/OperatorNode.js'));
  var VariableNode = require(path.resolve('./lib/VariableNode.js'));
  var ParseTree = require(path.resolve('./lib/ParseTree.js'));
  var AssignmentNode = require(path.resolve('./lib/AssignmentNode.js'));
  var ExponentNode = require(path.resolve('./lib/ExponentNode.js'));
%}

%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
[A-Za-z]+             return 'VARIABLE'
'+'                   return '+'
'*'                   return '*'
'-'                   return '-'
'/'                   return '/'
'^'                   return '^'
';'                   return ';'
'='                   return '='
'('                   return '('
')'                   return ')'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

%left '='
%left '+' '-'
%left '*' '/'
%left '^'
%left '!'

%start expressions

%% /* language grammar */

expressions
    : statements EOF
        {return new ParseTree($1)}
    ;

statements
    : statement
        {$$ = [$1];}
    | statements statement
        {$$ = $1.concat($2);}
    ;

statement
    : operation
    | assignment
    | statement-with-semicolon
    ;

statement-with-semicolon
    : operation ';'
    | assignment ';'
    ;

operation
    : operation '+' operation
        {$$ = new Tree($1,new OperatorNode($2),$3)}
    | operation '-' operation
        {$$ = new Tree($1,new OperatorNode($2),$3)}
    | operation '*' operation
        {$$ = new Tree($1,new OperatorNode($2),$3)}
    | operation '/' operation
        {$$ = new Tree($1,new OperatorNode($2),$3)}
    | operation '^' operation
        {$$ = new Tree($1,new ExponentNode($2),$3)}
    | operation '!' operation
        {$$ = new Tree($1,new OperatorNode($2),$3)}
    | operation-with-parenthesis
    | variable
    | number
    ;

operation-with-parenthesis
    : '(' operation ')'
      {$$ = $2;}
    ;

assignment
    : variable '=' operation
        {$$ = new Tree($1,new AssignmentNode($2),$3)}
    ;

operand
    : variable
    | number
    ;

variable
    : VARIABLE
        {$$ = new VariableNode(yytext)}
    ;

number
    : NUMBER
        {$$ = new NumberNode(yytext)}
    ;
