// Task
// Create a random user generator using the "https://randomuser.me/api/" API.
// When a user clicks the "Get Random User" button, fetch user details and display them on the page, including:
//     Full Name
//     Email
//     Country
// Handle API errors and provide appropriate feedback if the fetch fails.

let selectedBtn = document.querySelector("#fetchUserBtn");
selectedBtn.addEventListener("click", fetchRandomUser);
// let data = fetch('https://randomuser.me/api/')
// console.log(data) // promise

async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data.results[0]);
    let userData = data.results[0];
    console.log(userData.name.first);
    console.log(userData.location.country);
    console.log(userData.email);

    document.getElementById(
      "userName"
    ).innerText = `Name: ${userData.name.first}`;
    document.getElementById(
      "userEmail"
    ).innerText = `Email: ${userData.location.country}`;
    document.getElementById(
      "userCountry"
    ).innerText = `Country: ${userData.email}`;

    document.getElementById("userCard").style.display = "block";
  } catch (error) {

  }
}
