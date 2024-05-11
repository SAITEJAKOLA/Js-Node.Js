/*
Promise Object is an placeholder for a future value.
Or Container for a future value.
or A promise is an Object represnting the eventual completion or failure of
an asynchronous operation.

Promise has 3 parts
Promise type : type Promise object
Promise state : Pending, Successful, Rejected
Promise result: output of the async operation
 */
/*

//How to consume a promise.
const gitHub_API = "https://api.github.com/users/saitejakola";
const user = fetch(gitHub_API);
console.log(user);
user.then((res) => res.json()).then((data) => console.log(data));

const cart = ["Pants", "Shirts", "Kurta", "T-shirts"];

//using call backs
createOrder(cart, (orderid) => {
  proceedtoPayment(orderid, (paymentid) => {
    showOrderSummary(paymentid, (paymentdeatils) => {
      updateWallet(paymentdeatils);
    });
  });
});

//using promises

createOrder(cart)
  .then((orderid) => proceedtoPayment(orderid))
  .then((paymentid) => showOrderSummary(paymentid))
  .then((paymentdeatils) => updateWallet(paymentdeatils)); */
//How to create a promise

// createOrder(cart); //orderid
// proceedtoPayment(orderid); //paymentid
const cart = ["Pants", "Shirts", "Kurta", "T-shirts"];
createOrder(cart)
  .then((orderid) => {
    console.log(orderid);
    return orderid;
  })
  .then((orderid) => {
    return proceedtoPayment(orderid);
  })
  .then((paymentid) => {
    console.log(paymentid);
  })
  .catch((err) => {
    console.log(err.message);
  });

function createOrder(cart) {
  const promise = new Promise((resolve, reject) => {
    //createOrder
    //validatecart
    //orderid
    if (!validateCart(cart)) {
      const err = new Error("Please add the proper items in cart");
      reject(err);
    }
    const orderid = "5338";
    if (orderid) {
      setTimeout(() => {
        resolve(orderid);
      }, 5000);
    }
  });
  return promise;
}
function validateCart(cart) {
  if (cart) return true;
}
function proceedtoPayment(orderid) {
  const promise = new Promise((resolve, reject) => {
    if (orderid) {
      const paymentid = "PID6268";
      resolve(`Payement Scuccessful with paymentid: ${paymentid}`);
    } else {
      const err = new Error("Payment Failed!!");
      reject(err);
    }
  });
  return promise;
}
