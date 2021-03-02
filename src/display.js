export function display(data) {
  document.querySelector(".current-container").innerHTML = `
    <div class="current-city">${data.current.name}</div>
    <div class="current-weather">${data.current.weather}</div>
    <div class="current-temp">${data.current.temp}&deg</div>
    <div class="high-low-container">
      <div class="current-high">H: ${data.current.high}&deg</div>
      <div class="current-low">L: ${data.current.low}&deg</div>
    </div>
  `;

  document.querySelector(".hourly-container").innerHTML = "";
  for (let i = 0; i < data.hourly.length; i++) {
    document.querySelector(".hourly-container").innerHTML += `
      <div class="hourly">
        <div class="hourly-time">${data.hourly[i].time}</div>
        <img class="hourly-icon" src="http://openweathermap.org/img/wn/${data.hourly[i].icon}@4x.png">

        <div class="hourly-temp">${data.hourly[i].temp}&deg</div>
      </div>
      `;
  }

  document.querySelector(".daily-container").innerHTML = "";
  for (let j = 0; j < data.daily.length; j++) {
    document.querySelector(".daily-container").innerHTML += `
      <div class="daily">
        <div class="daily-day">${data.daily[j].day}</div>
        <img class="daily-icon" src="http://openweathermap.org/img/wn/${data.daily[j].icon}@4x.png">
        <div class="daily-high-low-container">
          <div class="daily-high">${data.daily[j].high}&deg</div>
          <div class="daily-low">${data.daily[j].low}&deg</div>
        </div>
      </div>  
    `;
  }
}
