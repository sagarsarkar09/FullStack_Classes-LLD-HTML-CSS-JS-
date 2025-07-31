// Task
// Create a random user generator using the "https://randomuser.me/api/" API. 
// When a user clicks the "Get Random User" button, fetch user details and display them on the page, including:
//     Full Name
//     Email
//     Country
// Handle API errors and provide appropriate feedback if the fetch fails.

let fetchBtn = document.getElementById('fetchUserBtn')

fetchBtn.addEventListener('click' , fetchRandomUser )



async function fetchRandomUser() {
     try {

        const response = await fetch(`https://randomuser.me/api/`)
        const data = await response.json()
        let userData = data.results[0]

        document.getElementById('userName').innerText= `Name : ${userData.name.first}`
        document.getElementById('userEmail').innerText= `Email : ${userData.email}`
        document.getElementById('userCountry').innerText= `Country : ${userData.location.country}`

        document.getElementById('userCard').style.display='block'

     
        
     } catch (error) {
        
     }
}