let toys = {
  toy1 : {name :'Teddy bear' , color :'brown', isAvailable : false, quantity:0},
  toy2 : {name :'Race Car' , color :'red', isAvailable : true , quantity:2},
  toy3 : {name :'Doll' , color :'Pink', isAvailable : true , quantity:4},
}

console.log(toys)


let jsonToys = JSON.stringify(toys)
console.log(jsonToys)

// JSON parse

let toysObj = JSON.parse(jsonToys)
console.log(toysObj)