/*
Promise API's
1) Promise.all([P1, P2, P3])
 If all the promises are successful it gives the response all at a time.
 if atleast one promise is rejected all it will throw an error, it will not wiat for other promises.
2.) Promise.allSettled([P1, P2, P3])
  If  all the promises are sucessful t bhaves like an promise.all
  if one promise is rejected, it will wait for all the other promises to settle.
3.) Promise.race([P1, P2, P3])
which ever is sucessful first will be returned.
In failure case, if any promise is rejected, error will be trown.
Return result of first settled promise.
4.) Promise.any([P1,P2,P3])
It will wait for the first promise to get resolved.
*/

const P1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 resolved");
  }, 3000);
});

const P2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 resolved");
  }, 1000);
});
const P3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 resolved");
  }, 2000);
});

Promise.all([P1, P2, P3]).then((res) => {
  console.log(res);
});
//only provides an output if all the promises are fulfilled

Promise.allSettled([P1, P2, P3]).then((res) => {
  console.log(res);
});
//waits for all the promises to be fulfilled if not it gives response accordingly
Promise.race([P1, P2, P3]).then((res) => {
  console.log(res);
});
//which ever fulfills/reject happens first ot will return that

Promise.any([P1, P2, P3]).then((res) => {
  console.log(res);
});
//it waits for te first promsie to get fullfilled
