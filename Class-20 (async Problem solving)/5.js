// Since APIs can sometimes be slow or unreliable, 
// you’ll use Promise.any() to fetch data from 
// three different sources at once 
// and display the first successful response.

// User Flow:

// The user clicks the "Get Space Fact" button.
// The app sends three simultaneous 
//API requests to fetch space facts.
// The first successful API response 
//is displayed on the screen.
// If all APIs fail, an error message is shown instead.
// 1️⃣ If the first API returns a fact,
// display the "explanation" key as "🌌 NASA Fact: [fact]".
// 2️⃣ If the second API returns a fact, display the "summary"
// key as "🚀 SpaceX: [fact]".
// 3️⃣ If the third API returns a fact, 
//display the number of astronauts in space as "👨‍🚀 
//There are currently [number] astronauts in space!".

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
//https://api.spacexdata.com/v4/company
//http://api.open-notify.org/astros.json