//File system with promises

const fileSystem = require("fs")

let readFilePromise1 = fileSystem.promises.readFile("f1.txt")
let readFilePromise2 = fileSystem.promises.readFile("f2.txt")
let readFilePromise3 = fileSystem.promises.readFile("f3.txt")

//then and catch

readFilePromise1
    .then(function(data){
    console.log("This is file Data ->" +data)
    
})
    .catch(function(err){
    console.error(err)
});

readFilePromise2
    .then(function(data){
    console.log("This is file Data ->" +data)
})
    .catch(function(err){
    console.error(err)
});

readFilePromise3
    .then(function(data){
    console.log("This is file Data ->" +data)
})
    .catch(function(err){
    console.error(err)
});