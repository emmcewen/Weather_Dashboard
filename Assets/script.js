var apiKey = "43307f36c133c1b4d80feb3644b2ab3e";


var inputEl=document.querySelector('input');
var searchbtnEl= document.querySelector('.search-button');
var citySearchEl=document.querySelector('.city-search');

var cityName= localStorage.getItem('cityNameStore');

var URLWeather=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`;

var URLForecast=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`;

//step2: make an addEventListener on Submit and create displayDashboard - it shows current weather and last five day
function recordCityData() {
    localStorage.setItem ('cityNameStore',inputEl.value);
}

for (var i = 0; i < localStorage.length; i++) {
    $(".city-search").append ("<p>" + localStorage.getItem(localStorage.key(i))+ "</p>");
    
}

$.ajax ({
    url: URLWeather,
    method:"GET"
})
.then(function(response){

    $('.current-city').html ("<h4>"+ response.name+ "</h4>");
    $('.current-weather-icon').html ("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >);
    
})

function displayWeather(event) {
    event.preventDefault()
    var cityName = cityEl.value
    var urlCurrent = 

    fetch(urlCurrent)
        .then(function (response) {
            return response.json()
        })
        .then(function (currentData) {

            var fiveDayUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentData.coord.lat}&lon=${currentData.coord.lon}&appid=${api}&units=imperial
            `
            fetch(fiveDayUrl)
                .then(function (response) {
                    return response.json()
                })
                .then(function (fiveData) {
                    console.log(fiveData)
                    var currentDate = moment.unix(currentData.dt).format("MM/DD/YYYY")
                    var iconImage = document.createElement("img")
                    iconImage.setAttribute("src", `http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`)
                    cityHeaderEl.innerHTML = currentData.name + " " + currentDate
                    cityHeaderEl.appendChild(iconImage)
                    
                    
                    TempEl.textContent = currentData.main.temp
                    renderForecast(currentData.daily, currentData.timezone);
                    console.log(renderForecast)
                    

                })
        })

    /*function renderForecast(dailyForecast, timezone) {
        // Create unix timestamps for start and end of 5 day forecast
        var startDt = dayjs().tz(timezone).add(1, 'day').startOf('day').unix();
        var endDt = dayjs().tz(timezone).add(6, 'day').startOf('day').unix();
        forecastContainer.innerHTML = '';
        forecastContainer.append(headingCol);
        for (var i = 0; i < dailyForecast.length; i++) {
            // The api returns forecast data which may include 12pm on the same day and
            // always includes the next 7 days. The api documentation does not provide
            // information on the behavior for including the same day. Results may have
            // 7 or 8 items.
            if (dailyForecast[i].dt >= startDt && dailyForecast[i].dt < endDt) {
                renderForecastCard(dailyForecast[i], timezone);
            }
        }
    }
    function renderItems(city, data) {
        renderCurrentWeather(city, data.current, data.timezone);
       
    }*/
          



}




cityFormEl.addEventListener("submit", displayWeather)






