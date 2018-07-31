var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b)
      } else {
        reject('Args must be nums');
      }
    }, 1500);
  });
};

asyncAdd(5, 7).then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}, (errorMessage) => {
  console.log(errorMessage);
}).then((res) => {
  console.log('Should be 45', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});


// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey! It worked!');
//     //reject('Aint happenin!')
//   }, 2500);
// });

// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });