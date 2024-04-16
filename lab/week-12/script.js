var apiUrl = "https://api.weather.gov/points/40.730610,-73.935242";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    var apiUrl = data;
  });