const fileSystem = require('fs')

console.log("start")
// read files
let data1 = fileSystem.readFileSync('f1.txt')

console.log("data from file 1 ->  " + data1)

let data2 = fileSystem.readFileSync('f2.txt')

console.log("data from file 2 ->  " + data2)

let data3 = fileSystem.readFileSync('f3.txt')

console.log("data from file 3 ->  " + data3)


console.log('End')