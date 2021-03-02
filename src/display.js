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
    <div class="hourly-weather">${data.hourly[i].weather}</div>
    <div class="hourly-temp">${data.hourly[i].temp}&deg</div>
  </div>
`;
  }
}
