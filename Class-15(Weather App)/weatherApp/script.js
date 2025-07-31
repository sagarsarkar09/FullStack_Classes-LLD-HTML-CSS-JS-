const form = document.querySelector("form");
const searchField = document.querySelector(".searchField");
const tempratureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather-icon img");
const weatherField = document.querySelector(".weather_condition span");
let target = "London";

form.addEventListener("submit", search);

function search(e) {
  e.preventDefault();
  target = searchField.value;
  console.log(target);
  fetchData(target);
}

async function fetchData(target) {
  try {
    let endPoint = `http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=no`;
    let response = await fetch(endPoint);
    let data = await response.json();

    console.log(response);
    console.log(data);

    let currTemp = data.current.temp_c;
    let cityName = data.location.name;
    let localTime = data.location.localtime;
    let condition = data.current.condition.text;
    let conditionIcon = data.current.condition.icon;

    updateWeather(currTemp, cityName, localTime, condition, conditionIcon);
  } catch (error) {
    console.log(error);
  }
}

function updateWeather(
  currTemp,
  cityName,
  localTime,
  condition,
  conditionIcon
) {
  tempratureField.innerText = currTemp + "°";
  cityField.innerText = cityName;
  dateField.innerText = localTime;
  weatherField.innerText = condition;
  emojiField.src = conditionIcon;

  searchField.value = " ";
}

fetchData(target);
