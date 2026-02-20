const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0ddaeb87b8msheccd80bd0038969p195994jsnd6b1b4e2fcf9",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city
  fetch(
    'http://api.openweathermap.org/data/2.5/weatherappid=d6cc65f12112edcf4321e182003112db&q=' + city,
    options
  )
    .then(response => response.json())
    .then((response) => {
      console.log(response)

      // cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp
      temp1.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
      humidity1.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      // max_temp2.innerHTML = response.max_temp2
      wind_speed.innerHTML = response.wind_speed
      wind_speed1.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      sunset.innerHTML = response.sunset
    })
    .catch((err) => console.error(err));
  
  // };
  //   const getWeather1 = (city) => {


  //for mumbai weather
  
    cityName1.innerHTML = city
  fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai',
    options
  )
    .then(response => response.json())
    .then((response) => {
      console.log(response)

      temp2.innerHTML = response.temp
      feels_like2.innerHTML = response.feels_like
      humidity2.innerHTML = response.humidity
      min_temp2.innerHTML = response.min_temp
      max_temp3.innerHTML = response.max_temp
      wind_speed2.innerHTML = response.wind_speed
      wind_degrees2.innerHTML = response.wind_degrees
      sunset2.innerHTML = response.sunset
    })
    .catch((err) => console.error(err));
    

    //for delhi weather

    cityName2.innerHTML = city
  fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New delhi',
    options
  )
    .then(response => response.json())
    .then((response) => {
      console.log(response)

      temp3.innerHTML = response.temp
      feels_like3.innerHTML = response.feels_like
      humidity3.innerHTML = response.humidity
      min_temp3.innerHTML = response.min_temp
      max_temp4.innerHTML = response.max_temp
      wind_speed3.innerHTML = response.wind_speed
      wind_degrees3.innerHTML = response.wind_degrees
      sunset3.innerHTML = response.sunset
    })
    .catch((err) => console.error(err));
    


  //for kolkata weather 

    cityName3.innerHTML = city
    fetch(
      'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata',
      options
    )
      .then(response => response.json())
      .then((response) => {
        console.log(response)
  
        temp4.innerHTML = response.temp
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        min_temp4.innerHTML = response.min_temp
        max_temp5.innerHTML = response.max_temp
        wind_speed4.innerHTML = response.wind_speed
        wind_degrees4.innerHTML = response.wind_degrees
        sunset4.innerHTML = response.sunset
      })
      .catch((err) => console.error(err));


      //for mysore weather 

      cityName4.innerHTML = city
  fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mysore',
    options
  )
    .then(response => response.json())
    .then((response) => {
      console.log(response)

      temp5.innerHTML = response.temp
      feels_like5.innerHTML = response.feels_like
      humidity5.innerHTML = response.humidity
      min_temp5.innerHTML = response.min_temp
      max_temp6.innerHTML = response.max_temp
      wind_speed5.innerHTML = response.wind_speed
      wind_degrees5.innerHTML = response.wind_degrees
      sunset5.innerHTML = response.sunset
    })
    .catch((err) => console.error(err));

    //for pune weather


    cityName5.innerHTML = city
  fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune',
    options
  )
    .then(response => response.json())
    .then((response) => {
      console.log(response)

      temp6.innerHTML = response.temp
      feels_like6.innerHTML = response.feels_like
      humidity6.innerHTML = response.humidity
      min_temp6.innerHTML = response.min_temp
      max_temp7.innerHTML = response.max_temp
      wind_speed6.innerHTML = response.wind_speed
      wind_degrees6.innerHTML = response.wind_degrees
      sunset6.innerHTML = response.sunset
    })
    .catch((err) => console.error(err));

    //for bangalore weather 

    cityName6.innerHTML = city
  fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore',
    options
  )
    .then(response => response.json())
    .then((response) => {
      console.log(response)

      temp7.innerHTML = response.temp
      feels_like7.innerHTML = response.feels_like
      humidity7.innerHTML = response.humidity
      min_temp7.innerHTML = response.min_temp
      max_temp8.innerHTML = response.max_temp
      wind_speed7.innerHTML = response.wind_speed
      wind_degrees7.innerHTML = response.wind_degrees
      sunset7.innerHTML = response.sunset
    })
    .catch((err) => console.error(err));




  };

  submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
  }); 
  
   getWeather("Shimoga");

  // {

  // const getWeather1 = (city) => {
  // cityName3.innerHTML = city
  // fetch(
  //   'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai',
  //   options
  // )
  //   .then(response => response.json())
  //   .then((response) => {
  //     console.log(response)

  //     temp2.innerHTML = response.temp
  //     feels_like2.innerHTML = response.feels_like
  //     humidity2.innerHTML = response.humidity
  //     min_temp2.innerHTML = response.min_temp
  //     max_temp3.innerHTML = response.max_temp
  //     wind_speed2.innerHTML = response.wind_speed
  //     wind_degrees2.innerHTML = response.wind_degrees
  //     sunset2.innerHTML = response.sunset
  //   })
  //   .catch((err) => console.error(err));



  // };
  // }


































