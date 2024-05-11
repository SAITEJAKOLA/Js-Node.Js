/*
What is a call back function in JS
Callback function is a function that is passed as an argument to another function
and exeuted in later in some point of time. These kind of fucntions are called as
Callback functions.
Best Example would be setTimeout function
It takes 2 aruguments one callback fucntion and one timer
*/

setTimeout(() => {
  console.log("Timer completed!!");
}, 3000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

//Clouser demo with event listeners
//using global variables// var count = 0;
// document.getElementById("clickMe").addEventListener("click", function () {
//   console.log("Button clicked", ++count);
// });

//using clousers
function clickMeEvent() {
  var count = 0;
  document.getElementById("clickMe").addEventListener("click", () => {
    console.log("Button clicked", ++count);
  });
}
clickMeEvent();
//why do we remove event listners...because they are heavy due to clousers.
/*
Issues with the callBacks
Callback Hell
*/

const cart = ["Shoes", "Pants", "kurta"];
api.createOrder(cart, function () {
  api.proceesToPayment(function () {
    api.showOrderSummary(function () {
      //Paramid of Doom
      api.UpdateWallet();
    });
  });
});

/*
Inversion of the control.
We loose the control of our code when we use the callbacks in our code.
*/
api.createOrder(cart, function () {
  api.proceesToPayment();
});
