import { convertUnixTime, convertUnixDay } from "./conversion";

export async function getData(city) {
  if (city === undefined) {
    city = "san francisco";
  }

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=48235cd532d405ca30e2ace10447ff29&units=imperial`
  );
  const currentWeather = await response.json();

  const secondResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}&appid=48235cd532d405ca30e2ace10447ff29&units=imperial`
  );
  const hourlyDailyWeather = await secondResponse.json();

  const data = {
    currentWeather: currentWeather,
    hourlyDailyWeather: hourlyDailyWeather,
  };

  return data;
}