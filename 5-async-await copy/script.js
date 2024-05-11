/*
Aync - Await
 */

const P1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved values!!");
  }, 10000);
});
const P2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved values!!");
  }, 20000);
});

// // older way of handling promises.
// function getData() {
//   //js engine will not wait for anyone or to get promise to be resolved.
//   p.then((res) => console.log(res));
//   console.log("Namste Js");
// }

//using async await
async function handlePromisegetData() {
  const res1 = await P1;
  console.log(res1);
  console.log("Namste Js 1");
  /*
We assume that the js engine will stop and wait for the promise to be resolved at the await line.
But in reality the js engine will not hold the execution, it suspends 
the function execution until the promise is resolved.

Once the promise is resolved and will move to the next lines and as soon as a new await is seen
it will check if the promise is resolved or not, if it is not resolved, engine will suspend the execution again.

Time tide and Js will wait for none, if needs to wait engine will suspend the execution and will come back later to execute the remaining code.
*/
  const res2 = await P2;
  console.log(res2);
  console.log("Namste Js 2");
}

handlePromisegetData();

// const api_Url = "https://api.github.com/users/saitejakola";
// async function handlefetch() {
//   try {
//     const data = await fetch(api_Url); //Response
//     //fetch() => response object (readablestream)
//     //fetch()=> Response.json()=> jsonValue
//     const jsonValue = await data.json();
//     console.log(jsonValue);
//   } catch (err) {
//     console.log(err);
//   }
// }
// handlefetch();
