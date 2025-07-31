// Task:
// Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
// Use promise chaining to handle the fetch request. Log any errors that occur.
async function fetchCatFact() {
    try {
      const response = await fetch('https://catfact.ninja/fac');
  
      if (!response.ok) {
        // Handle HTTP errors (e.g., 404, 500)
        const errorText = await response.text(); // Get more specific error info
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
  
      const data = await response.json();
      console.log(data.fact);
      return data.fact; // Optionally return the fact for further use
    } catch (error) {
      // Handle network errors or issues during JSON parsing
      console.error("Failed to fetch cat fact:", error);
  
      // You could also update the UI to show an error message
      // e.g., document.getElementById('catFactDisplay').innerText = 'Failed to load cat fact. Please try again later.';
      return null; // Indicate failure
    }
  }
  
  // Example usage:
  fetchCatFact();
