//File system with promises

const fileSystem = require("fs")

let readFilePromise1 = fileSystem.promises.readFile("f1.txt");

//then and catch

readFilePromise1
    .then(function(data){
    console.log("This is file Data ->" +data)
    return fileSystem.promises.readFile("f2.txt"); 
    })
    .then(function(data2){
        console.log("This is file data2 ->", data2.toString());
        return fileSystem.promises.readFile("f3.txt");
    })
    .then(function(data3){
        console.log("This is file data3 ->", data3.toString())
    })
    .catch(function(err){
    console.error(err)
});

