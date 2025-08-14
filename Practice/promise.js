let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        const isHead = Math.random() >= 0.5 // true or false

        if(isHead){
            resolve("We got heasds and we win!!")
        } else {
            reject("We got tails and we loose")
        }
    }, 2000 )
});

// console.log(promise1)
//promise handling 
promise1.then(function(output){
    console.log(output)
})  // works with resolve method

promise1.catch(function(failedOutput){
    console.log(failedOutput)
})

promise1.finally(function(){
    console.log('Promise Settled')
})