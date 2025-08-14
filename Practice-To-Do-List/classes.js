class Pizza {
  constructor(toppingsPara, sizePara, crustType) {
    this.toppings = toppingsPara;
    this.size = sizePara;
    this.crust = crustType;
  }
  describe (){
        console.log(
            `A ${this.size} pizza with ${this.toppings.join(',')} on a ${this.crust}`
        )
    }
}

let order1 = new Pizza(["Tomatoes", "Pepparoni"], "medium", "thick");
let order2 = new Pizza(["Cheese", "Jalepeno"],"Small","PanCrust")
console.log(order1)
console.log(order2)
order1.describe()
order2.describe()


class Cars{
    constructor(Cartype, Color, Price){
        this.type = Cartype
        this.Color = Color
        this.Price = Price
    }
    
}
let car1 = new Cars('SUV','Black','10Lakhs')
console.log(car1)