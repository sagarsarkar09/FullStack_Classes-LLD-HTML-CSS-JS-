function Pizza(toppingsPara, sizePara, crustType){
    this.toppings =toppingsPara
    this.size = sizePara
    this.crust =crustType

    this.describe =function(){
        console.log(
            `A ${this.size} pizza with ${this.toppings.join(',')} on a ${this.crust}`
        )
    }
}

let order1 = new Pizza(['Tomatoes','Pepparoni'], 'medium','thick')
let order2 = new Pizza(['jalepeno', 'paneer'],'small','Pancrust')
console.log(order1)
console.log(order2)

order1.describe()