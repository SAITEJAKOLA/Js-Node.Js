/*Execution Context
When you run any JavaScript, as special environment is crated to handle the 
transformation & execution of code. This is called the execution conetxt.
It contains the currently running code and everything that aids in its execution

There is a global execution context as well as a function execcution context for
every function invoked.
*/

/*
Clousers = A function returned from another function along with its 
lexical scope is called clouser.

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.
Uses of CLousers
Modules Design Pattern
currying 
functions like once
memoize
maintaining state in async world
settimeouts
iterators.....
*/

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }

// const topFunction = z();
// console.log(topFunction);
// topFunction();

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => console.log(i), i * 1000);
//   }
//   console.log("Namasthe JavaScript");
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(() => console.log(i), i * 1000);
//     }
//     close(i);
//   }
// }
// x();
