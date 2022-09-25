var apiKey = "43307f36c133c1b4d80feb3644b2ab3e";

var inputEl = document.querySelector('input');
var searchBtnEl = document.querySelector('.search-button');
var citySearchEl = document.querySelector('.history');

var cityName = localStorage.getItem('cityNameStore');
cityName="Cleveland";
var URLWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

var URLForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`;

function recordCityData() {
    localStorage.setItem('cityNameStore', inputEl.value);
}

for (var i = 0; i < localStorage.length; i++) {
    $(".search-history").append("<p>" + localStorage.getItem(localStorage.key(i)) + "</p>");

}

$.ajax({
    url: URLWeather,
    method: "GET"
})
    .done(function (response) {
//current weather
        $('.city').html("<h4>" + response.name + "</h4>");
        $('.weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
        $('.humidity').text("Humidity:" + response.main.humidity + "%");
        $('.wind').text("Wind Speed:" + response.wind.speed + "MPH");
        $('.temperature').text("Temperature:" + response.main.temp + "F");

        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var queryURLUv = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + apiKey;

        $.ajax({
            url: queryURLUv,
            method: "GET"
        })
            .done(function (response) {
                var uvValue = response.value

                $('.uv').text("UV Index:" + response.value);
                $('.uv').css("background-color", uvColor(uvValue));
            });
    });

function uvColor(uvValue, colorbgd) {
    var colorbgd = "";
    if (uvValue <= 2) {
        colorbgd = "#66ff00"
    }
    else if (uvValue <= 5 && uvValue >2){
        colorbgd="#ffbb00";
    }
    else if (uvValue <= 6 && uvValue >5){
        colorbgd="#FF0000"
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
    .done(function (response) {
        console.log(response);
        //Day 1 Forecast
        var day1 = moment(response.list[0].dt_txt).format("ddd,MMM D");
        $('.day-1-date').html("<h5>" + day1 + "</h5>");
        $('.day-1-weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png'>");
        $('.day-1-temperature').text("Temp:" + response.list[0].main.temp + "F");
        $('.day-1-humidity').text("Humidity:" + response.list[0].main.humidity + "%");
        //Day 2 Forecast
        var day2 = moment(response.list[8].dt_txt).format("ddd,MMM D");
        $('.day-2-date').html("<h5>" + day2 + "</h5>");
        $('.day-2-weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png'>");
        $('.day-2-temperature').text("Temp:" + response.list[8].main.temp + "F");
        $('.day-2-humidity').text("Humidity:" + response.list[8].main.humidity + "%");
        //Day 3 Forecast
        var day3 = moment(response.list[16].dt_txt).format("ddd,MMM D");
        $('.day-3-date').html("<h5>" + day3 + "</h5>");
        $('.day-3-weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png'>");
        $('.day-3-temperature').text("Temp:" + response.list[16].main.temp + "F");
        $('.day-3-humidity').text("Humidity:" + response.list[16].main.humidity + "%");
        //Day 4 Forecast
        var day4 = moment(response.list[24].dt_txt).format("ddd,MMM D");
        $('.day-4-date').html("<h5>" + day4 + "</h5>");
        $('.day-4-weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png'>");
        $('.day-4-temperature').text("Temp:" + response.list[24].main.temp + "F");
        $('.day-4-humidity').text("Humidity:" + response.list[24].main.humidity + "%");
        //Day 5 Forecast
        var day5 = moment(response.list[32].dt_txt).format("ddd,MMM D");
        $('.day-5-date').html("<h5>" + day5 + "</h5>");
        $('.day-5-weather-icon').html("<img src='https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png'>");
        $('.day-5-temperature').text("Temp:" + response.list[32].main.temp + "F");
        $('.day-5-humidity').text("Humidity:" + response.list[32].main.humidity + "%");

    });

searchBtnEl.addEventListener('click', recordCityData);






