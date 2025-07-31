console.log("Start");

function test() {
  console.log("i am the test function");
}
function sayHello() {
  console.log("Hello");
} // 7-8

function sayBye() {
  console.log("Bye");
}

test();
// sayHello() synschronously
setTimeout(sayHello, 2000); // asynchronously
setTimeout(sayBye, 3000);

sayBye();

console.log("End");
