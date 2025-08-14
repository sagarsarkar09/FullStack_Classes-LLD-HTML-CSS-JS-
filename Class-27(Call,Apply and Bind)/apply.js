let person1 ={
    name: "Sagar",
    age: "30",

    printName : function(location, hobby) {
        console.log(`My name is ${this.name} I am from ${location} my age is ${this.age} and I like ${hobby}`);
    },

    printAge: function(){
        console.log(`I am ${this.age}`);
    },
};

let person2 ={
    name: "Sandeep",
    age:"26",

};
// Call method

// person1.printName('Jorhat', 'Badminton');
// console.log(person1.printName)
// person1.printName.call(person2 ,'Indore', 'cricket');
// person1.printAge.call(person2);

//Appy method

person1.printName('Jorhat','Badminton');
person1.printName.apply(person2, ['Indore','Cricket'])


const numbers =[1,2,3,4,5]
let result ="";
for(let i=numbers.length -1 ; i>=0 ; i--){
    result += numbers[i] +" ";
}
console.log(result.trim()); //emoves the extra space at the end of the string before printing 
let greatest = Math.max.apply(null, numbers);
console.log(greatest);


