async function getWeather(city) {
  if (city === undefined) {
    city = "san francisco";
  }
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=48235cd532d405ca30e2ace10447ff29&units=imperial`
  );
  const jsonWeather = await response.json();
  console.log(jsonWeather);
  console.log(jsonWeather.name);
  console.log(jsonWeather.main.temp);
  console.log("High: " + jsonWeather.main.temp_max);
  console.log("Low: " + jsonWeather.main.temp_min);
  console.log("Feels like: " + jsonWeather.main.feels_like);
  console.log(jsonWeather.weather[0].description);

  const responseTwo = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=37.3394&lon=-121.895&appid=48235cd532d405ca30e2ace10447ff29&units=imperial`
  );
  const jsonWeatherTwo = await responseTwo.json();
  console.log(jsonWeatherTwo);
}

getWeather("san jose");
