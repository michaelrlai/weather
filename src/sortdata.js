import { convertUnixTime, convertUnixDay } from "./conversion";

export function sortData(data) {
  let dataSorted = {
    current: {
      name: data.currentWeather.name,
      temp: Math.round(data.currentWeather.main.temp),
      weather: data.currentWeather.weather[0].description,
      high: Math.round(data.currentWeather.main.temp_max),
      low: Math.round(data.currentWeather.main.temp_min),
    },
    hourly: [],
    daily: [],
  };

  for (let i = 0; i < 12; i++) {
    const hour = {
      time: convertUnixTime(data.hourlyDailyWeather.hourly[i + 1].dt),
      weather: data.hourlyDailyWeather.hourly[i + 1].weather[0].main,
      temp: Math.round(data.hourlyDailyWeather.hourly[i + 1].temp),
      icon: data.hourlyDailyWeather.hourly[i + 1].weather[0].icon,
    };
    dataSorted.hourly.push(hour);
  }

  for (let j = 0; j < 7; j++) {
    const day = {
      day: convertUnixDay(data.hourlyDailyWeather.daily[j + 1].dt),
      weather: data.hourlyDailyWeather.daily[j + 1].weather[0].main,
      high: Math.round(data.hourlyDailyWeather.daily[j + 1].temp.max),
      low: Math.round(data.hourlyDailyWeather.daily[j + 1].temp.min),
      icon: data.hourlyDailyWeather.daily[j + 1].weather[0].icon,
    };
    dataSorted.daily.push(day);
  }

  return dataSorted;
}
