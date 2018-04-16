// this and Object Prototypes Ch1: this Or That?

/*
function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = 'Hello, I\'m ' + identify.call( this );
  console.log( greeting );
}

var me = {
  name: 'Jennifer'
};

var you = {
  name: 'Reader'
};

var other = {
  name: 'Other'
};

identify.call( me );
identify.call( you );
identify.call( other);

speak.call( me );
speak.call( you );
speak.call( other );
*/
/*
function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  var greeting = 'Hello, I\'m ' + identify( context );
  console.log( greeting );
}

var me = {
  name: 'Jennifer'
};

var you = {
  name: 'Reader'
};

var other = {
  name: 'Other'
};

speak( me );
speak( you );
*/

function foo(num) {
  console.log( 'foo: ' + num );

  //keep track of how many time 'foo' is called
  this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo( i );
  }
}
        
console.log( foo.count );