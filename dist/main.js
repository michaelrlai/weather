(()=>{"use strict";function e(e){let t=new Date(1e3*e).getHours();return t=t>12?t-12+"pm":0===t?"12am":`${t}am`,t}async function t(t){try{!function(e){console.log(e),document.querySelector(".current-container").innerHTML=`\n    <div class="current-city">${e.current.name}</div>\n    <div class="current-temp">${e.current.temp}</div>\n    <div class="current-weather">${e.current.weather}</div>\n    <div class="high-low-container">\n      <div class="current-high">High: ${e.current.high}</div>\n      <div class="current-low">Low: ${e.current.low}</div>\n    </div>\n\n  `}(function(t){let a={current:{name:t.currentWeather.name,temp:Math.round(t.currentWeather.main.temp),weather:t.currentWeather.weather[0].description,high:Math.round(t.currentWeather.main.temp_max),low:Math.round(t.currentWeather.main.temp_min)},hourly:[],daily:[]};for(let r=0;r<12;r++){const n={time:e(t.hourlyDailyWeather.hourly[r+1].dt),weather:t.hourlyDailyWeather.hourly[r+1].weather[0].main,temp:Math.round(t.hourlyDailyWeather.hourly[r+1].temp)};a.hourly.push(n)}for(let e=0;e<7;e++){const i={day:(r=t.hourlyDailyWeather.daily[e+1].dt,n=void 0,n=new Date(1e3*r),n.getDay(),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()]),weather:t.hourlyDailyWeather.daily[e+1].weather[0].main,high:Math.round(t.hourlyDailyWeather.daily[e+1].temp.max),low:Math.round(t.hourlyDailyWeather.daily[e+1].temp.min)};a.daily.push(i)}var r,n;return a}(await async function(e){void 0===e&&(e="san francisco");const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&appid=48235cd532d405ca30e2ace10447ff29&units=imperial`),a=await t.json(),r=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${a.coord.lat}&lon=${a.coord.lon}&appid=48235cd532d405ca30e2ace10447ff29&units=imperial`);return{currentWeather:a,hourlyDailyWeather:await r.json()}}(t))),document.querySelector("input").value=""}catch(e){a()}}function a(){console.log("Please enter a valid city")}function r(e){"null"===e||""===e?a():t(e)}t("san jose"),document.querySelector("button").addEventListener("click",(function(){r(document.querySelector("input").value)})),document.querySelector("input").addEventListener("keydown",(function(e){let t=document.querySelector("input").value;13===e.keyCode&&r(t)}))})();