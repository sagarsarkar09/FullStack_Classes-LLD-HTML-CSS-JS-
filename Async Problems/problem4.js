// Build a simple dog image gallery
// that fetches three random dog images
// from "https://dog.ceo/api/breeds/image/random"
// in parallel using a Promise method.
// Clicking the "Get Dogs" button should display
// three new random images in the UI.
// Clear previous images before displaying new ones.
// Handle errors if fetching fails.

let getImages = document.getElementById("fetchDogsBtn");
getImages.addEventListener("click", fetchDogs);

async function fetchDogs() {
  try {
    const urls = [
      "https://dog.ceo/api/breeds/image/random",
      "https://dog.ceo/api/breeds/image/random",
      "https://dog.ceo/api/breeds/image/random",
    ];

    const response = await Promise.all(urls.map(urls => fetch(urls)))
    console.log(response)
    const data = await Promise.all(response.map(res =>res.json()))
    console.log(data);

    const container = document.getElementById('dogContainer')
    container.innerHTML ='';

    data.forEach(dog =>{
        let image = document.createElement('img')
        image.src =dog.message;
        container.appendChild(image)
    });
  } catch (error) {
    console.log("Failed to fetch")
  }
}
