var apiKey = "43307f36c133c1b4d80feb3644b2ab3e";


var inputEl = document.querySelector('input');
var searchbtnEl = document.querySelector('.search-button');
var citySearchEl = document.querySelector('.city-search');

var cityName = localStorage.getItem('cityNameStore');

var URLWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`;

var URLForecast = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`;

//step2: make an addEventListener on Submit and create displayDashboard - it shows current weather and last five day
function recordCityData() {
    localStorage.setItem('cityNameStore', inputEl.value);
}

for (var i = 0; i < localStorage.length; i++) {
    $(".city-search").append("<p>" + localStorage.getItem(localStorage.key(i)) + "</p>");

}

$.ajax({
    url: URLWeather,
    method: "GET"
})
    .then(function (response) {

        $('.current-city').html("<h4>" + response.name + "</h4>");
        $('.current-weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png" >);
        $('.current-humidity').text("Humidity:" + response.main.humidity + "%");
        $('.current-wind').text("Wind Speed:" + response.wind.speed + "MPH");
        $('current-temperature').text("Temperature:" + response.main.temp + "F");

        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var queryURLv = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + apiKey;

        $.ajax({
            url: queryURLUv,
            method: "GET"
        })
            .then(function (response) {
                var uvValue = response.value

                $('.current-uv-index')("UV Index:" + response.value);
                $('.current-uv-index').css("background-color", uvColor(uvValue));
            });
    });

function uvColor(uvValue, colorbgd) {
    var colorbgd = "";
    if (uvValue <= 2) {
        colorbgd = "#ffbb00"
    }
    return colorbgd;

}

var currentDay = moment().format("dddd,MMM Do");

function functionDay() {
    $(".current-date").text(currentDay);
};

functionDay();

$.ajax({
    url: URLForecast,
    method: "GET"
})
    .then(function (response) {
        //Day 1 Forecast
        var day1 = moment(response.list[0].dt_txt.format("ddd,MMM D");
        $('.day-1-date').html("<h5>:" + day1 + "</h5>");
        $('.day-1-weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png" >);
        $('.day-1-temperature').text("Temp:" + response.list[0] main.temp + "F");
        $('.day-1-humidity').text("Humidity:" + response.list[0]main.humidity + "%");
        //Day 2 Forecast
        var day2 = moment(response.list[8].dt_txt.format("ddd,MMM D");
        $('.day-1-date').html("<h5>:" + day1 + "</h5>");
        $('.day-1-weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png" >);
        $('.day-1-temperature').text("Temp:" + response.list[8] main.temp + "F");
        $('.day-1-humidity').text("Humidity:" + response.list[8]main.humidity + "%");
        //Day 3 Forecast
        var day3 = moment(response.list[16].dt_txt.format("ddd,MMM D");
        $('.day-1-date').html("<h5>:" + day1 + "</h5>");
        $('.day-1-weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png" >);
        $('.day-1-temperature').text("Temp:" + response.list[16] main.temp + "F");
        $('.day-1-humidity').text("Humidity:" + response.list[16]main.humidity + "%");
        //Day 4 Forecast
        var day4 = moment(response.list[24].dt_txt.format("ddd,MMM D");
        $('.day-1-date').html("<h5>:" + day1 + "</h5>");
        $('.day-1-weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png" >);
        $('.day-1-temperature').text("Temp:" + response.list[24] main.temp + "F");
        $('.day-1-humidity').text("Humidity:" + response.list[24]main.humidity + "%");
        //Day 5 Forecast
        var day5 = moment(response.list[32].dt_txt.format("ddd,MMM D");
        $('.day-1-date').html("<h5>:" + day1 + "</h5>");
        $('.day-1-weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png" >);
        $('.day-1-temperature').text("Temp:" + response.list[32] main.temp + "F");
        $('.day-1-humidity').text("Humidity:" + response.list[32]main.humidity + "%");

    });

searchbtnEL.addEventListener("click", recordCityData);






