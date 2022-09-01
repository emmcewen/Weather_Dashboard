
/*dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);*/


var cityEl = document.querySelector("#current-city")
var searchFormEl = document.querySelector("#city-form")
var cityHeaderEl = document.querySelector("#city-header")
var currentWindEl=document.querySelector("#wind")
var TempEl = document.querySelector("#temp")
var uviEl = document.querySelector("#uvi")
var cityHeaderCard1El = document.querySelector("#city-header-card-1")
var forecast1EL = document.querySelector("#card-title_1")
var forecast2EL = document.querySelector("#card-title_2")
var forecast3EL = document.querySelector("#card-title_3")
var forecast4EL = document.querySelector("#card-title_4")
var forecast5EL = document.querySelector("#card-title_5")
var card1EL = document.querySelector("#card_1")
var card2EL = document.querySelector("#card_2")
var card3EL = document.querySelector("#card_3")
var card4EL = document.querySelector("#card_4")
var card5EL = document.querySelector("#card_5")

var api = "43307f36c133c1b4d80feb3644b2ab3e"
//step2: make an addEventListener on Submit and create displayDashboard - it shows current weather and last five day


function displayWeather(event) {
    event.preventDefault()
    var cityName = cityEl.value
    var urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=imperial`


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






