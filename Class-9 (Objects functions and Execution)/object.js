// Object are just key value pair of a speific Enitity

// car
// person
// city

// car - color , company , name , topSpeed
// person - name , gender , age
// city - name , state , country , pincode

// create a simple object of a car

// let car = {
//     color : 'Red',
//     name : 'Bugatti',
//     topSpeed : '250km/hr',
//     isGeared : false,
//     doors : 2
// }



// console.log(car)

// Create an Object for Captain America

let cap = {
  name: "Steve Rogers",
  age: 105,

  friends: ["Bucky", "Bruce Banner", "Tony Stark"],

  address: {
    country: "USA",
    city: {
      name: "Brooklyn",
      pincode: 123456,
    },
  },

  isAvenger: true,
}

// How to access object properties and how to maipulate them

// access properties - dot notation , bracket notation

// dot notation

console.log(cap.age)
console.log(cap.friends)

console.log(cap.address.city.name)

// bracket notation
console.log(cap['address']['country'])




// manipulate values

// add captain america movies
cap.movies = ['civil war' , 'infinity war', 'winter soldier']

cap.movies.pop()

cap.isAvenger = false



// delete props from object

delete cap.age

console.log(cap)












