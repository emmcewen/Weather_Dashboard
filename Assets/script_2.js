var btn= document.querySelector("#btn-search")
var containerToday =document.querySelector("#todayCity")
var containerForecast=document.querySelector("#forecastCity")
var dataStore =JSON.parse(localStorage.getItem ("cities"))||[];
var weather
var urlIcon;
if(location.protcol === 'http:'){
    urlIcon = "http://openeweathermap.org/img/wn";
} else {
    urlIcon = "https://openweathermap.org/img/wn";

}
