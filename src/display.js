export function display(data) {
  console.log(data);
  document.querySelector(".current-container").innerHTML = `
    <div class="current-city">${data.current.name}</div>
    <div class="current-temp">${data.current.temp}</div>
    <div class="current-weather">${data.current.weather}</div>
    <div class="high-low-container">
      <div class="current-high">High: ${data.current.high}</div>
      <div class="current-low">Low: ${data.current.low}</div>
    </div>

  `;
}
