let promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const isHeads = Math.random() >= 0.5; // true or false

    if (isHeads) {
      resolve("We got heads and we Winn!!");
    } else {
      reject("We got tails and we Lose");
    }
  }, 2000);
});

// console.log(promise1) // Pending

// promise handling

promise1.then(function (output) {
  console.log(output);
}); // works with resolve method

promise1.catch(function (failedOutput) {
  console.log(failedOutput);
}); // works with reject method

promise1.finally(function () {
  console.log("Promise Settled");
});
