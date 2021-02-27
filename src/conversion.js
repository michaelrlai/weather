export function convertUnixTime(UNIX_timestamp) {
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

export function convertUnixDay(UNIX_timestamp) {
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
