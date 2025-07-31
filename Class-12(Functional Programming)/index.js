// callback functions

function printName(firstName, cb, cb2) {
  console.log(firstName); // Rishav
  cb(24); // 24

  cb2("Ghosh");
}

function printLastName(lastName) {
  console.log(lastName);
}

function printAge(age) {
  console.log(age);
}

printName("Rishav", printAge, printLastName);
