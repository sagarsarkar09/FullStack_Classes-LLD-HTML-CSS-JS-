function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order taken");
    } else {
      reject("cannot take the Order");
    }
  });
}

function processorder(orderPlaced) {
  return new Promise(function (resolve) {
    resolve(`${orderPlaced} and served`);
  });
}

//Chain Promises for the above
// placeOrder("coffee")
//   .then(function (orderStatus) {
//     console.log(orderStatus);
//     return orderStatus;
//   })
//   .then(function (prepareOrder) {
//     let orderReady = processorder(prepareOrder);
//     console.log(orderReady);
//     return orderReady;
//   })
//   .then(function (orderReady) {
//     console.log(orderReady);
//   })
//   .catch(function () {
//     console.log(err);
//   });

//Async Await

async function serveOrder() {
  try {
    let orderplaced = await placeOrder("coffee");
    console.log(orderplaced);
    let orderReady = await processorder(orderplaced);
    console.log(orderReady);
  } catch (error) {
    console.log(error);
  }
}
serveOrder();
