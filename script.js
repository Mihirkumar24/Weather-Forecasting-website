const options = {
  method: "GET",
};

const API_KEY = "68c8998b8fa0f2a3b5af243607a8a3b3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = (city) => {
  cityName.innerHTML = city;

  // Dynamic city (search input) - top 3 cards
  fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then((response) => {
      console.log(response);

      temp.innerHTML = response.main.temp + " °C";
      temp1.innerHTML = response.main.temp + " °C";
      feels_like.innerHTML = response.main.feels_like + " °C";
      humidity.innerHTML = response.main.humidity + " %";
      humidity1.innerHTML = response.main.humidity + " %";
      min_temp.innerHTML = response.main.temp_min + " °C";
      max_temp.innerHTML = response.main.temp_max + " °C";
      wind_speed.innerHTML = response.wind.speed + " m/s";
      wind_speed1.innerHTML = response.wind.speed + " m/s";
      wind_degrees.innerHTML = response.wind.deg + "°";
      sunset.innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    })
    .catch((err) => console.error(err));


  // Mumbai weather
  // REMOVED: cityName1.innerHTML (element no longer exists in HTML)
  fetch(`${BASE_URL}?q=Mumbai&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then((response) => {
      console.log(response);

      temp2.innerHTML = response.main.temp + " °C";
      feels_like2.innerHTML = response.main.feels_like + " °C";
      humidity2.innerHTML = response.main.humidity + " %";
      min_temp2.innerHTML = response.main.temp_min + " °C";
      max_temp3.innerHTML = response.main.temp_max + " °C";
      wind_speed2.innerHTML = response.wind.speed + " m/s";
      wind_degrees2.innerHTML = response.wind.deg + "°";
      sunset2.innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    })
    .catch((err) => console.error(err));


  // Delhi weather
  fetch(`${BASE_URL}?q=New Delhi&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then((response) => {
      console.log(response);

      temp3.innerHTML = response.main.temp + " °C";
      feels_like3.innerHTML = response.main.feels_like + " °C";
      humidity3.innerHTML = response.main.humidity + " %";
      min_temp3.innerHTML = response.main.temp_min + " °C";
      max_temp4.innerHTML = response.main.temp_max + " °C";
      wind_speed3.innerHTML = response.wind.speed + " m/s";
      wind_degrees3.innerHTML = response.wind.deg + "°";
      sunset3.innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    })
    .catch((err) => console.error(err));


  // Kolkata weather
  fetch(`${BASE_URL}?q=Kolkata&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then((response) => {
      console.log(response);

      temp4.innerHTML = response.main.temp + " °C";
      feels_like4.innerHTML = response.main.feels_like + " °C";
      humidity4.innerHTML = response.main.humidity + " %";
      min_temp4.innerHTML = response.main.temp_min + " °C";
      max_temp5.innerHTML = response.main.temp_max + " °C";
      wind_speed4.innerHTML = response.wind.speed + " m/s";
      wind_degrees4.innerHTML = response.wind.deg + "°";
      sunset4.innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    })
    .catch((err) => console.error(err));


  // Mysore weather
  fetch(`${BASE_URL}?q=Mysore&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then((response) => {
      console.log(response);

      temp5.innerHTML = response.main.temp + " °C";
      feels_like5.innerHTML = response.main.feels_like + " °C";
      humidity5.innerHTML = response.main.humidity + " %";
      min_temp5.innerHTML = response.main.temp_min + " °C";
      max_temp6.innerHTML = response.main.temp_max + " °C";
      wind_speed5.innerHTML = response.wind.speed + " m/s";
      wind_degrees5.innerHTML = response.wind.deg + "°";
      sunset5.innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    })
    .catch((err) => console.error(err));


  // Pune weather
  fetch(`${BASE_URL}?q=Pune&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then((response) => {
      console.log(response);

      temp6.innerHTML = response.main.temp + " °C";
      feels_like6.innerHTML = response.main.feels_like + " °C";
      humidity6.innerHTML = response.main.humidity + " %";
      min_temp6.innerHTML = response.main.temp_min + " °C";
      max_temp7.innerHTML = response.main.temp_max + " °C";
      wind_speed6.innerHTML = response.wind.speed + " m/s";
      wind_degrees6.innerHTML = response.wind.deg + "°";
      sunset6.innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    })
    .catch((err) => console.error(err));


  // Bangalore weather
  fetch(`${BASE_URL}?q=Bangalore&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then((response) => {
      console.log(response);

      temp7.innerHTML = response.main.temp + " °C";
      feels_like7.innerHTML = response.main.feels_like + " °C";
      humidity7.innerHTML = response.main.humidity + " %";
      min_temp7.innerHTML = response.main.temp_min + " °C";
      max_temp8.innerHTML = response.main.temp_max + " °C";
      wind_speed7.innerHTML = response.wind.speed + " m/s";
      wind_degrees7.innerHTML = response.wind.deg + "°";
      sunset7.innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    })
    .catch((err) => console.error(err));

};

// Search button click
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

// Enter key support
document.getElementById("city").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    getWeather(city.value);
  }
});

// Load default city on page load
getWeather("Shimoga");
