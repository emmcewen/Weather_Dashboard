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

$(document).on ("click", "list-group-item", function (event){
    event.preventDefault();

});
var citySearch= $(this).attr ("attr");
callApiFetch(city);


var searchClearing = function (element){
    element.innerHTML="";
};
var findUV = function(uv){
    var uvIndex=parseFloat (uv);
    var bgColor;

  if (uvIndex <3){
      bgColor= "bg-success";
  }
    else if (uvIndex < 6){
    bgColor= "bg-warning";
}
    else if (uvIndex < 6){
    bgColor= "bg-warning";
}
    else if (uvIndex < 8){
    bgColor= "bg-danger";
    
    return bgColor;
}
}
var weatherHTML =function (citySearch, uv){
    var container1El=document.createElement("div");
    container1El.classList.add("col-6");
    var container2El=document.createElement("div");
    container2El.classList.add("col-6");
    
    var cityEl =document.createElement("h2");
    var iconCurrentEl=document.createElement("img");

    cityEl.textContent =city + "("+weatherCondition [0].dateT +")";
    iconCurrentEl.setAttribute("src",weatherCondition[0].icon);
    iconCurrentEl.classList.add ("bg-info");
    container1El.appendChild (cityEl);
    container2El.appendChild (iconCurrentEl);

    var container3El=document.createElement("div");
    container3El.classList.add("col-12");
    container3El.innerHTML= "<p>Temp:" +weatherCondition[0].temp+"</p"+
    "<p> Humidity:"+weatherCondition[0].humidity + "% </p>"+
    "<p>UV index: <span class = 'text-white " + findUV(uv) + uv + "</span></p>" ;



    

}