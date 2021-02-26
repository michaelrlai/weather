async function getWeather(city) {
  if (city === undefined) {
    city = "pleasanton";
  }
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=48235cd532d405ca30e2ace10447ff29`
  );
  const jsonWeather = await response.json();
  console.log(jsonWeather);
  console.log(jsonWeather.name);
  console.log(jsonWeather.weather[0].main);
}

getWeather("new york");
