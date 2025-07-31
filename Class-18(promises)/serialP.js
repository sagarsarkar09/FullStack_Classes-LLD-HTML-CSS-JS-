const fileSystem = require("fs");

console.log("start");

// fileSystem.readFile("f1.txt", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("this is file data " + data);
//   }
// });

// file operations with Promises

let readFilePromise1 = fileSystem.promises.readFile("f1.txt");

// then and catch

readFilePromise1
  .then(function (data) {
    console.log("This is file Data 1 -> " + data);
    return fileSystem.promises.readFile("f2.txt");
  })
  .then(function (data2) {
    console.log("this is file data2 -> " + data2);
    return fileSystem.promises.readFile("f3.txt");
  })
  .then(function (data3) {
    console.log("this is file data3 -> " + data3);
  })
  .catch(function (err) {
    console.error(err);
  });

console.log("End");
