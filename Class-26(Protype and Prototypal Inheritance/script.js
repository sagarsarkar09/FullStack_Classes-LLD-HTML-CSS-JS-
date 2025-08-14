'use strict'

function add(y){
    return this.x +y;
}

const obj ={x:  5};
const boundAdd =add.bind(obj);
console.log(boundAdd(10));