//Scope and Closures Ch.5: Scope Closure

// "Closures happen as a result of writing code that rlies on lexical scope. They just happen."

/*
function foo() {
  var a = 2;

  function bar() {
    console.log( a );
  }

  bar();

}
foo();
*/

/*
function foo() {
  var a = 2;

  function bar() {
    console.log( a );
  }
  return bar;
}

var baz = foo();

baz(); // 2 because closure
*/

/*
var fn;
function foo() {
  var a = 2;

  function baz() {
    console.log( a );
  }

  fn = baz;
}

function bar() {
  fn();
}

foo();

bar(); // 2
*/
/*
function wait( message ) {

  setTimeout( function timer() {
    console.log( message );
  }, 1000 );
}

wait( 'Hello closure.');
*/
/*
var a = 3;

(function IIFE(){
  console.log( a );
})();
*/
/*
for ( var i = 1; i <= 5; i++ ) {
  (function(){
    var j = i;
    setTimeout( function timer() {
      console.log( j );
    }, j * 1000 );
  })();
}
*/
/*
for ( let i = 1; i <= 5; i++ ) {
  let j = i;
  setTimeout( function timer(){
    console.log( i );
  }, i * 1000 );
}
*/
/*
function CoolModule( id ) {
  var something = id;
  var another = [1, 2, 3];

  function doSomething () {
    console.log( something );
  }

  function doAnother() {
    console.log( another.join( ' ! ') );
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother
  };

}

var foo = CoolModule( 'foo' );

foo.doSomething();
foo.doAnother();

var bar = CoolModule( 'bar');

bar.doSomething();
*/
/*
var foo = (function CoolModule(id) {
  function change() {
    publicAPI.identify = identify2;
  }

  function identify1() {
    console.log( id );
  }

  function identify2() {
    console.log( id.toUpperCase() );
  }

  var publicAPI = {
    change: change,
    identify: identify1
  };

  return publicAPI;
})( 'foo module' );

foo.identify();
foo.change();
foo.identify();
*/
/*
var MyModules = (function Manager() {
  var modules = {};

  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply( impl, deps);
  }

  function get( name ) {
    return modules[name];
  }

  return {
    define: define,
    get: get
  };
})();

MyModules.define( 'bar', [], function(){
  function hello(who) {
    return 'Let me introduce: ' + who;
  }

  return {
    hello: hello
  };
} );

MyModules.define( 'foo', ['bar'], function(bar){
  var hungry = 'hippo';

  function awesome() {
    console.log( bar.hello( hungry ).toUpperCase() );
  }
  return {
    awesome: awesome
  };
});

var bar = MyModules.get( 'bar' );
var foo = MyModules.get( 'foo' );

console.log(
  bar.hello( 'hippo' )
);

foo.awesome();

*/
