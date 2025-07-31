function parent() {
  var a = 20;
  console.log(a);

  function child() {
    function child2() {
      console.log(a);
    }
    a = 30;
    child2();
 
  }
  child();
}

parent();
