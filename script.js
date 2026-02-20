// const options = {
//   method: "GET",
//   headers: {
//     // "X-RapidAPI-Key": "0ddaeb87b8msheccd80bd0038969p195994jsnd6b1b4e2fcf9",
//     "X-RapidAPI-Key": "d6cc65f12112edcf4321e182003112db",
//     "X-RapidAPI-Host": "http://api.openweathermap.org/geo/1.0/direct",
//   },
// };

// const getWeather = (city) => {
//   cityName.innerHTML = city
//   fetch(
//     'http://api.openweathermap.org/data/2.5/weatherappid=d6cc65f12112edcf4321e182003112db&q=' + city,
//     options
//   )
//     .then(response => response.json())
//     .then((response) => {
//       console.log(response)

//       // cloud_pct.innerHTML = response.cloud_pct
//       temp.innerHTML = response.temp
//       temp1.innerHTML = response.temp
//       feels_like.innerHTML = response.feels_like
//       humidity.innerHTML = response.humidity
//       humidity1.innerHTML = response.humidity
//       min_temp.innerHTML = response.min_temp
//       max_temp.innerHTML = response.max_temp
//       // max_temp2.innerHTML = response.max_temp2
//       wind_speed.innerHTML = response.wind_speed
//       wind_speed1.innerHTML = response.wind_speed
//       wind_degrees.innerHTML = response.wind_degrees
//       sunset.innerHTML = response.sunset
//     })
//     .catch((err) => console.error(err));
  
//   // };
//   //   const getWeather1 = (city) => {


//   //for mumbai weather
  
//     cityName1.innerHTML = city
//   fetch(
//     'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai',
//     options
//   )
//     .then(response => response.json())
//     .then((response) => {
//       console.log(response)

//       temp2.innerHTML = response.temp
//       feels_like2.innerHTML = response.feels_like
//       humidity2.innerHTML = response.humidity
//       min_temp2.innerHTML = response.min_temp
//       max_temp3.innerHTML = response.max_temp
//       wind_speed2.innerHTML = response.wind_speed
//       wind_degrees2.innerHTML = response.wind_degrees
//       sunset2.innerHTML = response.sunset
//     })
//     .catch((err) => console.error(err));
    

//     //for delhi weather

//     cityName2.innerHTML = city
//   fetch(
//     'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New delhi',
//     options
//   )
//     .then(response => response.json())
//     .then((response) => {
//       console.log(response)

//       temp3.innerHTML = response.temp
//       feels_like3.innerHTML = response.feels_like
//       humidity3.innerHTML = response.humidity
//       min_temp3.innerHTML = response.min_temp
//       max_temp4.innerHTML = response.max_temp
//       wind_speed3.innerHTML = response.wind_speed
//       wind_degrees3.innerHTML = response.wind_degrees
//       sunset3.innerHTML = response.sunset
//     })
//     .catch((err) => console.error(err));
    


//   //for kolkata weather 

//     cityName3.innerHTML = city
//     fetch(
//       'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata',
//       options
//     )
//       .then(response => response.json())
//       .then((response) => {
//         console.log(response)
  
//         temp4.innerHTML = response.temp
//         feels_like4.innerHTML = response.feels_like
//         humidity4.innerHTML = response.humidity
//         min_temp4.innerHTML = response.min_temp
//         max_temp5.innerHTML = response.max_temp
//         wind_speed4.innerHTML = response.wind_speed
//         wind_degrees4.innerHTML = response.wind_degrees
//         sunset4.innerHTML = response.sunset
//       })
//       .catch((err) => console.error(err));


//       //for mysore weather 

//       cityName4.innerHTML = city
//   fetch(
//     'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mysore',
//     options
//   )
//     .then(response => response.json())
//     .then((response) => {
//       console.log(response)

//       temp5.innerHTML = response.temp
//       feels_like5.innerHTML = response.feels_like
//       humidity5.innerHTML = response.humidity
//       min_temp5.innerHTML = response.min_temp
//       max_temp6.innerHTML = response.max_temp
//       wind_speed5.innerHTML = response.wind_speed
//       wind_degrees5.innerHTML = response.wind_degrees
//       sunset5.innerHTML = response.sunset
//     })
//     .catch((err) => console.error(err));

//     //for pune weather


//     cityName5.innerHTML = city
//   fetch(
//     'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune',
//     options
//   )
//     .then(response => response.json())
//     .then((response) => {
//       console.log(response)

//       temp6.innerHTML = response.temp
//       feels_like6.innerHTML = response.feels_like
//       humidity6.innerHTML = response.humidity
//       min_temp6.innerHTML = response.min_temp
//       max_temp7.innerHTML = response.max_temp
//       wind_speed6.innerHTML = response.wind_speed
//       wind_degrees6.innerHTML = response.wind_degrees
//       sunset6.innerHTML = response.sunset
//     })
//     .catch((err) => console.error(err));

//     //for bangalore weather 

//     cityName6.innerHTML = city
//   fetch(
//     'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore',
//     options
//   )
//     .then(response => response.json())
//     .then((response) => {
//       console.log(response)

//       temp7.innerHTML = response.temp
//       feels_like7.innerHTML = response.feels_like
//       humidity7.innerHTML = response.humidity
//       min_temp7.innerHTML = response.min_temp
//       max_temp8.innerHTML = response.max_temp
//       wind_speed7.innerHTML = response.wind_speed
//       wind_degrees7.innerHTML = response.wind_degrees
//       sunset7.innerHTML = response.sunset
//     })
//     .catch((err) => console.error(err));




//   };

//   submit.addEventListener("click", (e) => {
//     e.preventDefault()
//     getWeather(city.value)
//   }); 
  
//    getWeather("Shimoga");

//   // {

//   // const getWeather1 = (city) => {
//   // cityName3.innerHTML = city
//   // fetch(
//   //   'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai',
//   //   options
//   // )
//   //   .then(response => response.json())
//   //   .then((response) => {
//   //     console.log(response)

//   //     temp2.innerHTML = response.temp
//   //     feels_like2.innerHTML = response.feels_like
//   //     humidity2.innerHTML = response.humidity
//   //     min_temp2.innerHTML = response.min_temp
//   //     max_temp3.innerHTML = response.max_temp
//   //     wind_speed2.innerHTML = response.wind_speed
//   //     wind_degrees2.innerHTML = response.wind_degrees
//   //     sunset2.innerHTML = response.sunset
//   //   })
//   //   .catch((err) => console.error(err));



//   // };
//   // }

const options = {
  method: "GET",
};

const API_KEY = "68c8998b8fa0f2a3b5af243607a8a3b3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = (city) => {
  cityName.innerHTML = city;

  // Dynamic city (search input)
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
  cityName1.innerHTML = "Mumbai";
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
  cityName2.innerHTML = "New Delhi";
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
  cityName3.innerHTML = "Kolkata";
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
  cityName4.innerHTML = "Mysore";
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
  cityName5.innerHTML = "Pune";
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
  cityName6.innerHTML = "Bangalore";
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

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Shimoga");
































