// starting at 11:05
// What is an Array?

let data = [1 ,'scaler' ,true ,null ,undefined] // indexed

console.log(data)


// length of the array

console.log(data.length)

// methods and properties of an array

// 1. How to access array elements

 console.log(data[3])

 // methods to do operations an array 

 let cars = ['BMW' , 'Toyota' , 'Urus']


 // push method
 cars.push('Audi')
 console.log(cars)
//  push method allows you to add a value at the end of an array


// pop method
cars.pop()
cars.pop()
//  pop method allows you to delete a value at the end of an array


// shift and unshift

cars.unshift('Mercedes')
console.log(cars)

// shift method

cars.shift()
console.log(cars)


// split and join - this we can use to add or deleet something from between


// splice

let arr1 = [20 , 30 , 40 , 50 , 60 , 70]
arr1.push(400)
console.log(arr1)


let arr2 = arr1.splice(0 ,3)

console.log(arr1) // [20 , 70]
console.log(arr2) // [30 , 40 , 50 , 60]







