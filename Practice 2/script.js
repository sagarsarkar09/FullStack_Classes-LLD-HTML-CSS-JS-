// const p = new Promise(function(resolve, reject){
//     resolve("This is the 2nd data")
// })

// async function getData(){
//     return p
// }

// let dataPromise = getData()

// dataPromise.then((data)=>{
//     console.log(data)
// })

const p1 = new Promise(function (resolve,reject){
    setTimeout(function(){
         resolve("This is the 3rd data")
    }, 4000)   
});

const p2 = new Promise(function (resolve,reject){
    setTimeout(function(){
         resolve("Call stack gets empty")
    }, 2000)   
});

 function resolvePromise(){
    p1.then((res)=>{
        console.log(res);
    });
    console.log("Scaler")
 }

 async function handlePromise(){
    console.log("Await for 4sec")
    let data = await p1
    console.log("Scaler")
    console.log(data)
    console.log("Academy")
   
 }

async function sayBye(){
    let data2 = await p2
    console.log(data2)
 }

// resolvePromise();
handlePromise();
sayBye();




