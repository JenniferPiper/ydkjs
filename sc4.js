//Scope and Closures Ch. 4: Hoisting

// a = 2;

// var a;

//console.log( a );

//var a = 2;

/*
foo();

function foo() {

  a = 3;
  console.log( a );

  var a;
}
*/
/*
//foo();
bar();

var foo = function bar() {
  console.log( 'inside bar function');
}
*/
/* 
foo(); // 1, because functions are hoisted first, then variables.

var foo;

function foo() {
  console.log( 1 );
}

foo = function() {
  console.log( 2 );
}
foo(); // 2
*/


/*
foo(); // 3

function foo(){
  console.log( 1 );
}

var foo = function() {
  console.log( 2 );
};

function foo() {
  console.log( 3 );
}

*/
/*
foo(); 
var a = true;
if (a) {
  function foo() { console.log( 'a' ); }
}
//else {
//  function foo() { console.log( 'b' ); }
//}
*/
