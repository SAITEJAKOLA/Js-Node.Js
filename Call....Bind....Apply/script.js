let name = {
  firstName: "Sai Teja",
  lastName: "Kola",
};

const printFullName = function (hometown) {
  console.log(`${this.firstName} ${this.lastName} from ${hometown}`);
};

printFullName.call(name, "Vijayawada");
let name2 = {
  firstName: "Keerthi",
  lastName: "surapaneni",
};
//call is nothing but a function borowing concept
printFullName.call(name2, "Vijayawada");

//call(thisobject, param1, parm2....)for the functions

//Apply method
//apply(thisobject,[param1, param2....] )
// only difference between the apply and call is the way we pass the arguments.

printFullName.apply(name2, ["Vijayawada"]);

//Bind
//Bind will create a copy of the function and binds with the thisobject and returns a function to use it later.

let printfullnamefun = printFullName.bind(name, "Vijayawada");
console.log(printfullnamefun);
printfullnamefun();
