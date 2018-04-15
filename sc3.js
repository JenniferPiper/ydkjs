/*
function foo(a) {
  var b = 2;
  // some code

  function bar() {
    //more code
  }

  // and more code
  var c = 3;

console.log (c);
}
foo();
*/


/*
function doSomething(a) {
  b = a + doSomethingElse( a * 2 );

  console.log( b * 3 );
}

function doSomethingElse(a) {
  return a - 1;
}

var b;

doSomething( 2 ); //15

function foo() {
  function bar(a) {
   var i = 3;
    console.log( a + i )
  }
  for (var i=0; i<10; i++) {
    bar( i * 2 );
    }
}

foo();
*/

/*
var MyReallyCoolLibrary = {
  awesome: 'stuff',
  doSomething: function(){

  },
  doAnotherThing: function () {

  }
};
*/

/*
var a = 2;

(function foo() {

  var a = 3;
  console.log( a );
})();
console.log( a );
*/

/* Giving function expressions names instead of leaving them anonymous is good practice. It makes reading and debugging the code easier.

setTimeout( function timeoutHandler(){
  console.log('I waited 1 second.');
}, 1000);
*/

/*
var a = 2;

(function foo(){
  var a = 3;
  console.log( a );
})();

console.log( a );

*/
/*
var a = 2;

(function IIFE( global ){

  var a = 3;
  console.log( a );
  console.log( global.a );
})( window );

console.log( a );

*/

/*
undefined = true; //BAD. Don't do this.

(function IIFE( undefined ){

  var a;
  if(a === undefined) {
    console.log( 'Undefined is safe here.');
  }
})();
*/
/*
var a = 2;

(function IIFE( def ){
  def( window );
})(function def( global ){

  var a = 3;
  console.log( a );
  console.log(global.a);
});
*/

/*
for (var i = 0; i < 10; i++) {
  console.log( i );
}
*/

/*
var foo = true;

if (foo) {
  var bar = foo * 2;
  bar = something( bar );
  console.log( bar );
}
*/

/*
try {
  undefined(); // illegal operation to force an exception
}
catch (err) {
  console.log( err );
}

console.log( err ); //ReferenceError: err is not defined
*/

/*
var foo = true;

if (foo) {
  {
    let bar = foo * 4;
    // bar = something( bar );
    console.log( bar );
  }
}

{
console.log( bar );
let bar = 2;
}
*/

/*
function process(data) {

}

var someReallyBigData = { a: 1 };

process( someReallyBigData );

var btn = document.getElementById( 'my_button' );

btn.addEventListener( 'click', function click(evt){
  console.log( 'button clicked' );
}, false);


for (let i = 0; i < 10; i++ ) {
  console.log( i );
}
console.log( i ); //ReferenceError


var foo = true, baz = 10;

if (foo) {
  let bar = 3;

  if (baz > bar) {
    console.log( baz );
  }

}
*/

var foo = true;

if (foo) {
  var a = 2;
  const b = 3;

  a = 3;
  b = 4; // error!
}
console.log( a ); // 3
//console.log( b ); // ReferenceError
