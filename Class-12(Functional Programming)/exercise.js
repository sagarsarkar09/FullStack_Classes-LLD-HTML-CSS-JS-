let myRadiusArray = [2, 3, 4, 5, 8];

// write functions that will calculate area ,
// circumference and diameter of these circles
// you have to return a new array

// 3 functions

// you have 7-8 mins to do this

function calculateCircum(radiusArr) {
  let result = [];

  for (let i = 0; i < radiusArr.length; i++) {
    result.push(2 * 3.14 * radiusArr[i]);
  }

  return result;
}

function calculateArea(radiusArr) {
  let result = [];

  for (let i = 0; i < radiusArr.length; i++) {
    result.push(3.14 * radiusArr[i] * radiusArr[i]);
  }

  return result;
}

function calculateDiameter(radiusArr) {
  let result = [];

  for (let i = 0; i < radiusArr.length; i++) {
    result.push(2 * radiusArr[i]);
  }

  return result;
}



let circumferences = calculateCircum(myRadiusArray);
console.log("Circumferences -> ", circumferences);

let areas = calculateArea(myRadiusArray);
console.log("areas -> ", areas);

let diameters = calculateDiameter(myRadiusArray);
console.log("Diameters -> ", diameters);
