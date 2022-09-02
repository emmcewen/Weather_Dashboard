var btn= document.querySelector("#btn-search")
var containerToday =document.querySelector("#todayCity")
var containerForecast=document.querySelector("#forecastCity")
var containierSearchHistory=document.querySelector("#searchHistory")
var storedData =JSON.parse(localStorage.getItem ("cities")) || [];

var weatherCondition=[]
var urlIcon;
if(location.protcol === 'http:'){
    urlIcon = "http://openeweathermap.org/img/wn";
} else {
    urlIcon = "https://openweathermap.org/img/wn";

}

//functions for API and code

function start() {
    loadCity();
}
var loadCity = function(){

}

searchClearing(containerSearchHistory)
    
if (storedData){
    var ulEl = document.createElement("ul");
    ulEl.classList.add("list-unstyled");
    ulEl.classList.add("w-100");

    for (var i =0; i <storedData.length; i++){
        
        var listEl=document.createElement("li");
        listEl.innerHTML ="<button type='button' class='list-group-item list-group-item-action' attr=' "+storedData[i]+"'>"+storedData[i] + "</button";
        ulEl.appendChild(listEL);
    }
    containierSearchHistory.appendChild(ulEl);
};