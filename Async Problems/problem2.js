// Task:
// Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
// Use promise chaining to handle the fetch request. Log any errors that occur.
// async function fetchCatFact() {
//   //Write code Here
//   fetch("https://catfact.ninja/fact").then(function (res) {
//     res.json().then((data) => {
//       console.log(data.fact);
//     });
//   });
// }

// // // Example usage:
// // fetchCatFact();


async function fetchCatFact() {
    try {
      const response = await fetch('https://catfact.ninja/fac');
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        return null; // Just return null instead of throwing
      }
  
      const data = await response.json();
      console.log(data.fact);
      return data.fact;
    } catch (error) {
      console.error("Failed to fetch cat fact:", error);
      return null;
    }
  } 
  
  // Example usage:
  fetchCatFact();
 

// async function fetchCatFact(){

// }