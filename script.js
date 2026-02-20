const API_KEY = "68c8998b8fa0f2a3b5af243607a8a3b3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// ── Fetch and display the searched city (top 3 cards) ──
const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then((response) => {
      console.log(response);

      if (response.cod !== 200) {
        cityName.innerHTML = "City not found";
        return;
      }

      temp.innerHTML     = response.main.temp;
      temp1.innerHTML    = response.main.temp;
      feels_like.innerHTML = response.main.feels_like;
      humidity.innerHTML   = response.main.humidity;
      humidity1.innerHTML  = response.main.humidity;
      min_temp.innerHTML   = response.main.temp_min;
      max_temp.innerHTML   = response.main.temp_max;
      wind_speed.innerHTML  = response.wind.speed;
      wind_speed1.innerHTML = response.wind.speed;
      wind_degrees.innerHTML = response.wind.deg;
      sunset.innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
    })
    .catch((err) => console.error(err));
};

// ── Fetch a fixed city and populate a table row ──
const getCityWeather = (city, ids) => {
  fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then((response) => {
      console.log(city, response);

      if (response.cod !== 200) return;

      document.getElementById(ids.temp).innerHTML        = response.main.temp;
      document.getElementById(ids.feels_like).innerHTML  = response.main.feels_like;
      document.getElementById(ids.humidity).innerHTML    = response.main.humidity;
      document.getElementById(ids.max_temp).innerHTML    = response.main.temp_max;
      document.getElementById(ids.min_temp).innerHTML    = response.main.temp_min;
      document.getElementById(ids.wind_speed).innerHTML  = response.wind.speed;
      document.getElementById(ids.wind_degrees).innerHTML = response.wind.deg;
      document.getElementById(ids.sunset).innerHTML =
        new Date(response.sys.sunset * 1000).toLocaleTimeString();
    })
    .catch((err) => console.error(err));
};

// ── Search button click ──
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const cityVal = document.getElementById("city").value.trim();
  if (cityVal) getWeather(cityVal);
});

// ── Enter key press in search input ──
document.getElementById("city").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const cityVal = document.getElementById("city").value.trim();
    if (cityVal) getWeather(cityVal);
  }
});

// ── Load all table cities on page load ──
getCityWeather("Mumbai", {
  temp: "temp2", feels_like: "feels_like2", humidity: "humidity2",
  max_temp: "max_temp3", min_temp: "min_temp2",
  wind_speed: "wind_speed2", wind_degrees: "wind_degrees2", sunset: "sunset2"
});

getCityWeather("New Delhi", {
  temp: "temp3", feels_like: "feels_like3", humidity: "humidity3",
  max_temp: "max_temp4", min_temp: "min_temp3",
  wind_speed: "wind_speed3", wind_degrees: "wind_degrees3", sunset: "sunset3"
});

getCityWeather("Kolkata", {
  temp: "temp4", feels_like: "feels_like4", humidity: "humidity4",
  max_temp: "max_temp5", min_temp: "min_temp4",
  wind_speed: "wind_speed4", wind_degrees: "wind_degrees4", sunset: "sunset4"
});

getCityWeather("Mysore", {
  temp: "temp5", feels_like: "feels_like5", humidity: "humidity5",
  max_temp: "max_temp6", min_temp: "min_temp5",
  wind_speed: "wind_speed5", wind_degrees: "wind_degrees5", sunset: "sunset5"
});

getCityWeather("Pune", {
  temp: "temp6", feels_like: "feels_like6", humidity: "humidity6",
  max_temp: "max_temp7", min_temp: "min_temp6",
  wind_speed: "wind_speed6", wind_degrees: "wind_degrees6", sunset: "sunset6"
});

getCityWeather("Bangalore", {
  temp: "temp7", feels_like: "feels_like7", humidity: "humidity7",
  max_temp: "max_temp8", min_temp: "min_temp7",
  wind_speed: "wind_speed7", wind_degrees: "wind_degrees7", sunset: "sunset7"
});

// ── Default city on page load ──
getWeather("Shimoga");
