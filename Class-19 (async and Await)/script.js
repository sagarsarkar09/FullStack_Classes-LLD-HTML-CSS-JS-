const p = new Promise(function(resolve , reject){
    resolve('This is resolved data')
})

async function getData(){
  return p
}

let dataPromise = getData() // promise

dataPromise.then((data)=>{
   console.log(data)
})


