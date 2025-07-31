function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order taken");
    } else {
      reject("Cannot take the Order");
    }
  });
}

function processOrder(orderPlaced) {
  return new Promise(function (resolve) {
    resolve(`${orderPlaced} and Served.`);
  });
}

function generateBill() {
  return new Promise(function (resolve) {
    resolve(`Bill Generated`);
  });
}

// Chain Promises for the above
// placeOrder("coffee")
//   .then(function (orderStatus) {
//     console.log(orderStatus);
//     return orderStatus;
//   })
//   .then(function (prepareOrder) {
//     let orderReady = processOrder(prepareOrder);
//     return orderReady;
//   }).then(function(){
//     let bill = generateBill()
//     return bill
//   })
//   .then(function (orderReady) {
//     console.log(orderReady);
//   }).catch(function(err){
//     console.log(err)
//   })

// async await

async function serveOrder() {
  try {
    let orderPlaced = await placeOrder("coffee");
    console.log(orderPlaced);
    let orderReady = await processOrder(orderPlaced);
    console.log(orderReady);
    let billGenerated = await generateBill();
    console.log(billGenerated);
  } catch (error) {
    console.log(error);
  }
}

serveOrder();
