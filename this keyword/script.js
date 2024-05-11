"use strict";
//this in global scope
console.log(this); // globalObject- window, global

//this inside a function
function x() {
  //this value depends on strict/ non strict mode
  //The value of this keyword in a function is undefined
  console.log(this);
}
x();
//this in non strict mode - (this substitution)
/*
If the value of this keyword is undefined or null at anypoint of time in our code
this key word will be replaced with the global object
Note : ONLY in NON - Strict mode
 */

// The value of this keyword will aslo depend on how it is called.
x();
window.x();

// this inside an object
//Difference between a function and method??
//If you make a function as a part of object , then it is called as method.
// Now x is a method of object obj.
const student = {
  name: "sai teja",
  printName: function xx() {
    console.log(this.name);
  },
  b: 100,
};

// student.printName();

const student2 = {
  name: "Keerthi",
};

//call apply bind methods (sharing variables)
// student.printName.call(student2);

//this inside arrow function
//arow function dont provide their own this binding
//it retains the this value of the enclsoing lexical context ( here in this case global)
//just one level higher thats it
const obj2 = {
  name: "sai teja",
  printName: function () {
    //enclosing lexical context
    const y = () => {
      console.log(this.name);
    };
    y();
  },
  b: 100,
};
obj2.printName();

//this inside class, constructor 
