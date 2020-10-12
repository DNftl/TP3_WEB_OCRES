// API : https://openweathermap.org/api

// Clé api
//const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
const API_KEY = "6a899154a031cb42971d850ed003d5a9";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


//test
/*
var request1 = new XMLHttpRequest();
  request.open("GET", "http://url-service-web.com/api/users");
  request.send();

  var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response.current_condition.condition);
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
request.send();*/


// fin test

class API_WEATHER{
  constructor(city){
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city === undefined){
      city = "paris";
    }
    /*if(city === Marseille){
      city = "marseille";
    }
    if(city === Mocano){
      city = "monaco";
    }
    if(city === Lille){
      city = "lille";
    }
    if(city === Lyon){
      city = "lyon";
    }*/

    this.city = city;
  }

  // Faire la requete à l'API openweathermap
  // Retourne une promise
  fetchTodayForecast(){
    return axios
    .get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`, {
      crossdomain: true
    })
  }


  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }
}