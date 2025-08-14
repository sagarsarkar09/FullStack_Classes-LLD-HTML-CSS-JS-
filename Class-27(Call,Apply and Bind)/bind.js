//Bind method 

function greet(){
    console.log( `${this.name}`)
}


let person1 ={
    name: 'Mark',
    age:26
}
let boundgreet = greet.bind(person1)
// console.log(boundgreet)
// boundgreet('Hello')

let btn =document.querySelector('#print')
btn.addEventListener("click", boundgreet)
