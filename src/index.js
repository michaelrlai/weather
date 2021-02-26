function convertUnixTime(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  let hour = a.getHours();
  if (hour > 12) {
    hour = `${hour - 12}pm`;
  } else if (hour === 0) {
    hour = "12am";
  } else {
    hour = `${hour}am`;
  }
  const time = hour;
  return time;
}

function convertUnixDay(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = a.getDay();
  var time = days[a.getDay()];
  return time;
}

async function getWeather(city) {
  if (city === undefined) {
    city = "san francisco";
  }

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=48235cd532d405ca30e2ace10447ff29&units=imperial`
  );
  const currentWeather = await response.json();

  console.log(currentWeather);

  document.querySelector(".current-container").innerHTML = "";
  document.querySelector(".current-container").innerHTML += `
    <div class="current-data location">${currentWeather.name}</div>
      <div class="current-data temp">${Math.round(currentWeather.main.temp)}
      </div>
      <div class="current-data weather">${currentWeather.weather[0].description}
      </div>
      <div class="current-data high-low">
      H: ${currentWeather.main.temp_max} L: ${currentWeather.main.temp_min}
      </div>
    </div>
    `;

  const secondResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}&appid=48235cd532d405ca30e2ace10447ff29&units=imperial`
  );
  const oneCall = await secondResponse.json();
  console.log(oneCall);

  document.querySelector(".hourly-container").innerHTML = "";
  for (let i = 1; i <= 12; i++) {
    document.querySelector(".hourly-container").innerHTML += `
    <div class="hourly">
      <div class="hourly-data time">${convertUnixTime(oneCall.hourly[i].dt)}
      </div>
      <div class="hourly-data weather">${oneCall.hourly[i].weather[0].main}
      </div>
      <div class="hourly-data temp">${Math.round(oneCall.hourly[i].temp)}
      </div>
    </div>
    `;
  }

  document.querySelector(".daily-container").innerHTML = "";
  for (let j = 1; j <= 7; j++) {
    document.querySelector(".daily-container").innerHTML += `
    <div class="daily">
      <div class="daily-data day">${convertUnixDay(oneCall.daily[j].dt)}</div>
      <div class="daily-data weather">${oneCall.daily[j].weather[0].main}</div>
      <div class="daily-data high">H: ${Math.round(oneCall.daily[j].temp.max)}
        </div>
      <div class="daily-data low">L: ${Math.round(oneCall.daily[j].temp.min)}
      </div>
    </div>
    `;
  }
}

function searchLocation() {
  let searchTerm = document.querySelector(".input").value;
  if (searchTerm !== "") {
    getWeather(searchTerm);
    searchTerm = "";
  }
}

document.querySelector("button").addEventListener("click", (e) => {
  if (e.target.matches(".search")) {
    searchLocation();
  }
});

document.querySelector("input").addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    searchLocation();
  }
});

document.querySelector(".input").focus();
getWeather();
