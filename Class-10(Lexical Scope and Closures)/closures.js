function parent() {
    var a = 400;
   
  

  function child() {
    var a = 200
    var b = 40;
    
    console.log(a);

    function child2() {
      console.log(b);
    }

    return child2;
  }

  return child;
}

let val = parent();
console.log(val);// child fn
let val2 = val(); // child2

val2()


