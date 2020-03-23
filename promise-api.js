const p1 = new Promise( (resolve, reject) => {
  setTimeout( () => {
    console.log('Async operation 1... ');
    // reject(new Error('Async was rejected...'));
    resolve(1);
  }, 2000);
});

const p2 = new Promise( (resolve) => {
  setTimeout( () => {
    console.log('Async operation 2...');
    resolve(2);
  }, 2000)
});

// // promise of all runs all at once
// Promise.all([p1, p2])
//   .then( result => console.log(result))
//   .catch(err => console.log('Error', err.message))

// promise of race full fills the first value of the array
Promise.race([p1, p2])
  .then( result => console.log(result))
  .catch(err => console.log('Error', err.message))