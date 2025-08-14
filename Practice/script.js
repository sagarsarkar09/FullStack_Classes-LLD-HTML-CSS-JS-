 const fs = require("fs");

//  console.log("before");
//  let data =fs.readFileSync("f1.txt","utf-8");
//  console.log("This is File 1 data ->" +data);
//  console.log("After");
//This is an example of synchronous eecution, it blocks the execution thread until the file is read completely.


// // Async file reading example.
// console.log("before")
// fs.readFile("f1.txt", (err,data) => {
//     if(err){
//         console.error("An error occured", err);
//         return;
//     }
//     console.log("this is file 1 ->" + data);
// });
// fs.readFile("f2.txt", (err,data) => {
//     if(err){
//         console.error("An error occured", err);
//         return;
//     }
//     console.log("this is file 1 ->" + data);
// });
// fs.readFile("f3.txt", (err,data) => {
//     if(err){
//         console.error("An error occured", err);
//         return;c
//     }
//     console.log("this is file 1 ->" + data);
// });

// console.log("After");

// Reading 3 files asynchronously in serial execution

console.log("Before");

function cb1(err, data) {
        if(err){
            console.log("An error occured", err);
            return;
        }
        console.log("This is File 1 data ->" + data);
        fs.readFile("f2.txt",cb2);
    }

function cb2(err, data) {
        if(err){
            console.log("An error occured", err);
            return;
        }
        console.log("This is File 2 data ->" + data);
        fs.readFile("f3.txt",cb3);
    }

function cb3(err, data) {
        if(err){
            console.log("An error occured", err);
            return;
        }
        console.log("This is File 3 data ->" + data);

    }
fs.readFile("f1.txt", cb1);