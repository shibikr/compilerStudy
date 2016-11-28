/* lexical grammar */
%{
  var Tree = require('/Users/shibi/stepOct-Nov/compilerStudy/jisonParser/lib/Tree.js');
  var NumberNode = require('/Users/shibi/stepOct-Nov/compilerStudy/jisonParser/lib/NumberNode.js');
  var OperatorNode = require('/Users/shibi/stepOct-Nov/compilerStudy/jisonParser/lib/OperatorNode.js');
  var VariableNode = require('/Users/shibi/stepOct-Nov/compilerStudy/jisonParser/lib/VariableNode.js');
  var ParseTree = require('/Users/shibi/stepOct-Nov/compilerStudy/jisonParser/lib/ParseTree.js');
  var AssignmentNode = require('/Users/shibi/stepOct-Nov/compilerStudy/jisonParser/lib/AssignmentNode.js');
  var ExponentNode = require('/Users/shibi/stepOct-Nov/compilerStudy/jisonParser/lib/ExponentNode.js');
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
%right '^'
%right '!'

%start expressions

%% /* language grammar */

expressions
    : statements EOF
        {return new ParseTree($1)}
    ;

statements
    : statement ';'
        {$$ = [$1];}
    // | variable ';'
    //     {$$ = }
    | statements statement ';'
        {$$ = $1.concat($2);}
    ;

statement
    : operation
    | assignment
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
    | operand
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
