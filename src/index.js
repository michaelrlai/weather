import { getData } from "./getdata";
import { sortData } from "./sortdata";
import { display } from "./display";

async function app(place) {
  try {
    const data = await getData(place);
    const dataSorted = sortData(data);
    console.log(data);
    console.log(dataSorted);
    display(dataSorted);
    document.querySelector("input").blur();
  } catch (err) {
    errorHandling();
  }
}

function errorHandling() {
  console.log("Please enter a valid city");
}

function inputValidation(inputtedCity) {
  if (inputtedCity === "null" || inputtedCity === "") {
    errorHandling();
  } else {
    app(inputtedCity);
  }
}

document.querySelector("button").addEventListener("click", function () {
  let inputtedCity = document.querySelector("input").value;
  inputValidation(inputtedCity);
});

document.querySelector("input").addEventListener("keydown", function (e) {
  let inputtedCity = document.querySelector("input").value;
  if (e.keyCode === 13) {
    inputValidation(inputtedCity);
  }
});

app("san jose");
