
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  //const city = "barcelone";
  

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);



      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;


      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}


function start2() {
  // Création de l'objet apiWeather
 
  // Appel de la fonction fetchTodayForecast

  //const city = "barcelone";
  const city = document.getElementById('city-input').value;


  const apiWeather = new API_WEATHER(city);

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);



      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;


      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}


function start3() {

  const city = document.getElementById('city-input').value;
  const apiWeather = new API_WEATHER(city);

  apiWeather
    .getThreeDaysForecast()
    .then(function(response) {


    const data = response.data;

    const main=[];
    const description=[];
    const temp=[];
    const icon=[];

    for (i=1; i<4; i++)
    {
      // On récupère l'information principal
       main[i] = data.list[i].weather[0].main;
       description[i] = data.list[i].weather[0].description;
       temp[i] = data.list[i].main.temp;
       icon[i] = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);
    }


      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main[1];
      document.getElementById('today-forecast-more-info').innerHTML = description[1];
      document.getElementById('icon-weather-container').innerHTML = icon[1];
      document.getElementById('today-forecast-temp').innerHTML = `${temp[1]}°C`;

      document.getElementById('second-forecast-main').innerHTML = main[2];
      document.getElementById('second-forecast-more-info').innerHTML = description[2];
      document.getElementById('second-weather-container').innerHTML = icon[2];
      document.getElementById('second-forecast-temp').innerHTML = `${temp[2]}°C`;

      document.getElementById('third-forecast-main').innerHTML = main[3];
      document.getElementById('third-forecast-more-info').innerHTML = description[3];
      document.getElementById('third-weather-container').innerHTML = icon[3];
      document.getElementById('third-forecast-temp').innerHTML = `${temp[3]}°C`;



      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
