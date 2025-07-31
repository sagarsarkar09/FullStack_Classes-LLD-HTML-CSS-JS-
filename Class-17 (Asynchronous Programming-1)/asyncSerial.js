const fileSystem = require("fs");

console.log("start");
// read files asynchronously

fileSystem.readFile("f1.txt", function (err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File data 1 -> " + data);
  fileSystem.readFile("f2.txt", cb2);
});

function cb2(err, data) {
  if (err) {
    console.log(err);
  }
  console.log("data from file 2-> " + data);
  fileSystem.readFile("f3.txt", cb3);
}

function cb3(err, data) {
  if (err) {
    console.log(err);
  }
  console.log("data from file 3->" + data);
}

console.log("End");
