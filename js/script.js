
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
/* technique 1
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

      // Modifier le DOM //test sans boucles
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

*/
/*Technique 2

  for (i=1; i<4; i++)
    {
      const main=data.list[i].weather[0].main;
      const description=data.list[i].weather[0].description;
      const temp=data.list[i].main.temp;
      const icon=apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

    if(i==1)
    {
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
    }
    if(i==2)
    {
      document.getElementById('second-forecast-main').innerHTML = main;
      document.getElementById('second-forecast-more-info').innerHTML = description;
      document.getElementById('second-weather-container').innerHTML = icon;
      document.getElementById('second-forecast-temp').innerHTML = `${temp}°C`;
    }
    if(i==3)
    {
      document.getElementById('third-forecast-main').innerHTML = main;
      document.getElementById('third-forecast-more-info').innerHTML = description;
      document.getElementById('third-weather-container').innerHTML = icon;
      document.getElementById('third-forecast-temp').innerHTML = `${temp}°C`;
    }

    }*/

//technique 3

      const main1 = data.list[1].weather[0].main;
      const description1 = data.list[1].weather[0].description;
      const temp1 = data.list[1].temp.day;
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main1;
      document.getElementById('today-forecast-more-info').innerHTML = description1;
      document.getElementById('today-weather-container').innerHTML = icon1;
      document.getElementById('today-forecast-temp').innerHTML = `${temp1}°C`;

      const main2 = data.list[2].weather[0].main;
      const description2 = data.list[2].weather[0].description;
      const temp2 = data.list[2].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // Modifier le DOM
      document.getElementById('second-forecast-main').innerHTML = main2;
      document.getElementById('second-forecast-more-info').innerHTML = description2;
      document.getElementById('second-weather-container').innerHTML = icon2;
      document.getElementById('second-forecast-temp').innerHTML = `${temp2}°C`;

      const main3 = data.list[3].weather[0].main;
      const description3 = data.list[3].weather[0].description;
      const temp3 = data.list[3].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);

      // Modifier le DOM
      document.getElementById('third-forecast-main').innerHTML = main3;
      document.getElementById('third-forecast-more-info').innerHTML = description3;
      document.getElementById('third-weather-container').innerHTML = icon3;
      document.getElementById('third-forecast-temp').innerHTML = `${temp3}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
