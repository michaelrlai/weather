import { getData } from "./weather";

async function app(place) {
  try {
    let data = await getData(place);
    console.log(data);
    console.log("did this run?");
  } catch (err) {
    console.log("this ran");
    console.log(err);
  }
}

app("san jose");
