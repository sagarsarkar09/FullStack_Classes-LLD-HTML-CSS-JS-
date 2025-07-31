let myRadiusArray = [2, 3, 4, 5, 8];

function calculate(radiusArr, cb) {
  let result = [];

  for (let i = 0; i < radiusArr.length; i++) {
    result.push(cb(radiusArr[i]));
  }

  return result;
}

function calculateCircum(radius) {
  return 2 * 3.14 * radius;
}

function calculateArea(radius) {
  return 3.14 * radius * radius;
}

function calculateDiameter(radius) {
  return 2 * radius;
}

const circumferences = calculate(myRadiusArray, calculateCircum);
console.log("circumferences ->", circumferences);

const areas = calculate(myRadiusArray, calculateArea);
console.log("areas ->", areas);

const diameters = calculate(myRadiusArray, calculateDiameter);
console.log("diameters ->", diameters);
