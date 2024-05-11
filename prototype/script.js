let arr = ["saiteja", "keerthi"];

let obj = {
  name: "sai teja",
  city: "Vijayawada",
  getintro: function () {
    console.log(this.name + " from " + this.city);
  },
};

let obj2 = {
  name: "keerthi",
};
obj2.__proto__ = obj;
console.log(obj2.getintro());
/*
when ever you create anything in Js (variables, functions, objects, arr...) 
all these thing will have access to some hidden properties
These hidden properies come from prototypes.
when we create these primitive data type, js will put all the hidden properties 
in to an object and attches it to the original object/variable/arr/function.
*/

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

const rect = new Rectangle("Rect", 10, 10);

//  Rectangle.prototype inherits from Object.prototype. That's why we can use toString(), etc
console.log(rect.toString());

// To get the prototype of an object
console.log(Object.getPrototypeOf(rect));
console.log(rect);

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

const rect1 = new Rectangle("HelloRect", 10, 20);
console.log(rect1.area());
console.log(rect.perimeter());
console.log(rect.isSquare());
