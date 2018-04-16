//Scope and Closures Ch. 2
/* Lex-time
//global scope

function foo(a) { //foo scope
  var b = a * 2;
  function bar(c) { //bar scope
    console.log( a, b, c );
  }
  bar(b * 3);
}

foo ( 2 ); //console logs '2 4 12'

*/

/*  Cheating Lexical
function foo(str, a) {
  eval( str ); //this is cheating lexical scope.
  console.log( a, b );
}

var b = 2;

foo( 'var b = 3;', 1); // 1 3

*/

//with

var obj = {
  a: 1,
  b: 2,
  c: 3
};

obj.a = 2;
obj.b = 3;
obj.c = 4;

// 'easier' short-hand

with(obj) {
  a = 3;
  b = 4;
  c = 5;
}
//console.log(obj); //{a: 3, b: 4, c: 5}

function foo(obj) {
  with (obj) {
    a = 2;
  }
}

var o1 = {
  a:3
};

var o2 = {
  b:3
};

foo( o1 );
console.log( o1.a ); // 2

foo( o2 );
console.log( o2.a ); //undefined
console.log( a ); // 2 -- 'with'  does not confine the scope of variable a.

// Cheating scope using 'eval' or 'with' prevents the engine from running performance optimizations. Just don't use them.


