const fileSystem = require("fs");

console.log("start");
// read files asynnchronously

fileSystem.readFile("f1.txt", function (err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File data 1 -> "+ data);
});

fileSystem.readFile("f2.txt", function (err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File data 2 -> "+ data);
});

fileSystem.readFile("f3.txt", function (err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File data 3 -> "+ data);
});

console.log("End");
