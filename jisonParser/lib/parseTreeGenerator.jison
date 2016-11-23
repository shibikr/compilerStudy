/* lexical grammar */
%{
  var Tree = require('/Users/shibi/stepOct-Nov/compilerStudy/jisonParser/lib/Tree.js');
  var NumberNode = require('/Users/shibi/stepOct-Nov/compilerStudy/jisonParser/lib/NumberNode.js');
  var OperatorNode = require('/Users/shibi/stepOct-Nov/compilerStudy/jisonParser/lib/OperatorNode.js');
%}

%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
'+'                   return '+'
'*'                   return '*'
'-'                   return '-'
'/'                   return '/'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */
%left '+','-'
%left '*','/'

%start expressions

%% /* language grammar */

expressions
    : e EOF
        { return $$; }
    ;

e
    : e '+' e
        {$$ = new Tree($1,new OperatorNode($2),$3)}
    | e '-' e
        {$$ = new Tree($1,new OperatorNode($2),$3)}
    | e '*' e
        {$$ = new Tree($1,new OperatorNode($2),$3)}
    | e '/' e
        {$$ = new Tree($1,new OperatorNode($2),$3)}
    | NUMBER
        {$$ = new NumberNode(yytext);}
    ;
