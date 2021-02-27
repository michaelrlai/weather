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
  const oneCall = await secondResponse.json();

  console.log(currentWeather);
  console.log(oneCall);

  let data = {
    current: {
      name: currentWeather.name,
      temp: Math.round(currentWeather.main.temp),
      weather: currentWeather.weather[0].description,
      high: Math.round(currentWeather.main.temp_max),
      low: Math.round(currentWeather.main.temp_min),
    },
    hourly: [],
    daily: [],
  };

  for (let i = 0; i < 12; i++) {
    const hour = {
      time: convertUnixTime(oneCall.hourly[i + 1].dt),
      weather: oneCall.hourly[i + 1].weather[0].main,
      temp: Math.round(oneCall.hourly[i + 1].temp),
    };
    data.hourly.push(hour);
  }

  for (let j = 0; j < 7; j++) {
    const day = {
      day: convertUnixDay(oneCall.daily[j + 1].dt),
      weather: oneCall.daily[j + 1].weather[0].main,
      high: Math.round(oneCall.daily[j + 1].temp.max),
      low: Math.round(oneCall.daily[j + 1].temp.min),
    };
    data.daily.push(day);
  }

  return data;
}
