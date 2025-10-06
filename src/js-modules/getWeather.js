
const queryBtn = document.querySelector("#query-button");
const cityName = document.querySelector("#city-name");
const cityTime = document.querySelector("#city-time");
const temp = document.querySelector("#temp");
const condition = document.querySelector("#condition");
const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const icon = document.querySelector("#icon");

const apiURL = `http://api.weatherapi.com/v1/current.json?key=5e0679862bda46a4933124054250510&q=`;

export default function getWeather(){
    try {

        queryBtn.addEventListener('click', async () => {

            const inputQuery = document.querySelector("#query-input") || "Manila";

            const request = await fetch(apiURL + inputQuery.value);
            const weather = await request.json();
            console.log(weather);

            const now = new Date();
            const options = {
                timeZone: weather.tz_id,
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            };
            const time = new Intl.DateTimeFormat("en-US", options).format(now);

            cityName.textContent = weather.location.name;
            cityTime.textContent = time;
            temp.textContent = weather.current.temp_c;
            condition.textContent = weather.current.condition.text;
            feelsLike.textContent = "Feels Like: " + weather.current.feelslike_c + "°C";
            humidity.textContent = "Humidity: " + weather.current.humidity + "%";
            wind.textContent = "Wind: " + weather.current.wind_kph + " km/h";
            icon.src = weather.current.condition.icon;
        });
    }
    catch {

    };
};

