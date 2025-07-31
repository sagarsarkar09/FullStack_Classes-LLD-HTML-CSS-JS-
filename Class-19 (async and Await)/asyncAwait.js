const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("This is resolved data");
  }, 30000);
});

const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("This is resolved data bye bye");
    }, 50000);
  });

// function resolvePromise() {
//   p1.then((res) => {
//     console.log(res);
//   });

//   console.log("Scaler");
// }
//Scaler
// This is your resolved Data

 async function handlePromise(){
  console.log('Hellllo')

   let data = await p1 
   console.log('Scaler')
   console.log(data)
}

async function printBye(){
   console.log('I am Byee')
   let data2= await p2
   console.log(data2)
}

//   resolvePromise(); // Promise with then
  handlePromise() // async await
  printBye()
  
  
