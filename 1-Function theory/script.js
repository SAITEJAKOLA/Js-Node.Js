//FUnction Statement aka fucntion declaration
function a() {
  console.log("Namaste Java Script");
}

//Function Expresion
//Assigning an function to a varaible is called Function Expression
let fun = function () {
  console.log("Hello World!!");
};

/*
Difference between Function expression and function Statement is Hoisting.
a() can be acessed before it is decalred
b(); cannot be accessed before it is declared because let fun is treated a normal vraible and 
and will be assigned an undefined value to it in memory creation phase.

*/
//Function declaration is nothing but defineing a function
function a() {
  console.log("Namaste Java Script");
}

/* Anononums function is a function which has no name
Anonmus function does not have its own identity.
These kind of functions are used where functions are used an value.
Ex: In Function expressions
let fun = function () {
  console.log("Hello World!!");
};

function () {
  console.log("Hello World!!");
}; is an ananomus function
*/
// (function () {
//   console.log('Hi Hello World!!');
// })();

/*
Name Function Expressions
A function expression with a named function is called named function expression

function xyz() can not be accessed out side of the funtion scope (No created in global scope.)

*/
let namedFunction = function xyz() {
  console.log("Hello World!!");
  console.log(xyz);
};
console.log(namedFunction());

//Parameter vs Arguments
//Values which are passed to a function are aruguments
//variables/Identifiers/labels/params that are passed to a function are parameters
function x(a, b) {
  console.log(a, b);
}
/*
First Class functions
-fucntions can be treated as values 
-functions can be passed as an arrugumets to another functions.
-We can also return a function from a function
-The ability use functions as values and pass them as aruguments to the functions
and returned from a functions and this ability is called first class functions
Hence they are called as first class functions.
First class citizens/first class functions both are same.
*/
var b = function (parm1) {
  console.log(parm1());
  return function () {
    console.log("Returned from the function");
  };
};

let returnedFunction = b(function () {
  console.log("Hello World!!");
});
returnedFunction();

/*
Higher order functions
A function which takes function as an input and can return a function as output are called higher order functions.
The functions which are passed as an aruguments to another function are called as callback functions.
*/

const radius = [3, 5, 7, 2, 4];
const area = (radius) => {
  return Math.PI * radius * radius;
};

const calculate = function (array, logic) {
  const output = [];
  array.forEach((element) => {
    output.push(logic(element));
  });
  return output;
};

Array.prototype.calculate = function (logic) {
  const output = [];
  this.forEach((element) => {
    output.push(logic(element));
  });
  return output;
};
console.log(calculate(radius, area));
console.log(radius.calculate(area));
console.log(radius.map(area));
console.log(radius.filter((x) => x > 2));
// reduce functions
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const maxValue = arr.reduce((acc, curr) => {
  if (curr > acc) acc = curr;
  return acc;
}, 0);
console.log(maxValue);

const users = [
  { firstName: "Sai teja", lastName: " kola", age: 24 },
  { firstName: "Keerthi", lastName: " surapaneni", age: 24 },
  { firstName: "Noor", lastName: " Gazi", age: 28 },
  { firstName: "Kutty", lastName: " Vasireddy", age: 30 },
];

const output = users.map((x) => x.firstName + x.lastName);
console.log(output);

const agefilter = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(agefilter);

const nameFilter = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(nameFilter);

const firstNamefilter = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(firstNamefilter);
