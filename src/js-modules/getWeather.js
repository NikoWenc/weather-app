import bgBasedOnWeather from "./bgBasedOnWeather";
import containerBg from "./containerBg";

const queryBtn = document.querySelector("#query-button");
const cityName = document.querySelector("#city-name");
const cityTime = document.querySelector("#city-time");

const temp = document.querySelector("#temp");
const condition = document.querySelector("#condition");

const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const icon = document.querySelector("#icon");

const today = document.querySelector("#today");
const todayIcon = document.querySelector("#today-icon");
const todayTemp = document.querySelector("#today-temp");
const todayCondition = document.querySelector("#today-condition");

const nextDay = document.querySelector("#next-day");
const nextDayIcon = document.querySelector("#next-day-icon");
const nextDayTemp = document.querySelector("#next-day-temp");
const nextDayCondition = document.querySelector("#next-day-condition");

const nextNextDay = document.querySelector("#next-next-day");
const nextNextDayIcon = document.querySelector("#next-next-day-icon");
const nextNextDayTemp = document.querySelector("#next-next-day-temp");
const nextNextDayCondition = document.querySelector("#next-next-day-condition");

const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=5e0679862bda46a4933124054250510&q=`;

export default async function getWeather(){
    try {

        const inputQuery = document.querySelector("#query-input").value || "Manila";
        const request = await fetch(apiURL + inputQuery + "&days=3");
        const weather = await request.json();
        // console.log(weather);

        const now = new Date();
        const options = {
            timeZone: weather.location.tz_id,
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        };
        const optionsForecast = {
            timeZone: weather.location.tz_id,
            weekday: "long",
        };
        const time = new Intl.DateTimeFormat("en-US", options).format(now);
        const timeForecastDay1 = new Intl.DateTimeFormat("en-US", optionsForecast).format(now);
        const timeForecastDay2 = new Intl.DateTimeFormat("en-US", optionsForecast).format(now.setDate(now.getDate() + 1));
        const timeForecastDay3 = new Intl.DateTimeFormat("en-US", optionsForecast).format(now.setDate(now.getDate() + 1));

        // for header
        cityName.textContent = weather.location.name;
        cityTime.textContent = time;
        // for middle-left
        temp.textContent = weather.current.temp_c;
        condition.textContent = weather.current.condition.text;
        // for middle-right
        feelsLike.textContent = "Feels Like: " + weather.current.feelslike_c + "°C";
        humidity.textContent = "Humidity: " + weather.current.humidity + "%";
        wind.textContent = "Wind: " + weather.current.wind_kph + " km/h";
        icon.src = weather.current.condition.icon;
        
        // for foot
        // today
        today.textContent = timeForecastDay1;
        todayIcon.src = weather.current.condition.icon;
        todayTemp.textContent = weather.forecast.forecastday[0].day.mintemp_c + 
                                "°C" + 
                                " - " + 
                                weather.forecast.forecastday[0].day.maxtemp_c + "°C";
        todayCondition.textContent = weather.current.condition.text;
        // next-day
        nextDay.textContent = timeForecastDay2;
        nextDayIcon.src = weather.forecast.forecastday[1].day.condition.icon;
        nextDayTemp.textContent = weather.forecast.forecastday[1].day.mintemp_c + 
                                    "°C" + 
                                    " - " + 
                                    weather.forecast.forecastday[1].day.maxtemp_c + "°C";
        nextDayCondition.textContent = weather.forecast.forecastday[1].day.condition.text;
        // next-next-day
        nextNextDay.textContent = timeForecastDay3;
        nextNextDayIcon.src = weather.forecast.forecastday[2].day.condition.icon;
        nextNextDayTemp.textContent = weather.forecast.forecastday[2].day.mintemp_c + 
                                    "°C" + 
                                    " - " + 
                                    weather.forecast.forecastday[2].day.maxtemp_c + "°C";
        nextNextDayCondition.textContent = weather.forecast.forecastday[2].day.condition.text;

        containerBg();
        bgBasedOnWeather(weather.current.condition.text);
        queryBtn.addEventListener('click', getWeather);

    }
    catch(e) {
        console.log(e);
    };
};

