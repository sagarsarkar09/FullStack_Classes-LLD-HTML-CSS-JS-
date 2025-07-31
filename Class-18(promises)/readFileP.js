const fileSystem = require("fs");

console.log("start")

// fileSystem.readFile("f1.txt", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("this is file data " + data);
//   }
// });

// file operations with Promises

let readFilePromise1 = fileSystem.promises.readFile("f1.txt");
let readFilePromise2 = fileSystem.promises.readFile("f2.txt");
let readFilePromise3 = fileSystem.promises.readFile("f3.txt");

// then and catch

readFilePromise1
  .then(function (data) {
    console.log("This is file Data 1 -> " + data);
  })
  .catch(function (err) {
    console.error(err);
  });

readFilePromise2
  .then(function (data) {
    console.log("This is file Data 2 -> " + data);
  })
  .catch(function (err) {
    console.error(err);
  });

readFilePromise3
  .then(function (data) {
    console.log("This is file Data 3 -> " + data);
  })
  .catch(function (err) {
    console.error(err);
  });

console.log('End')
