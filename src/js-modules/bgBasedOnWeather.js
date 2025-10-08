
const body = document.querySelector("body");

export default function bgBasedOnWeather(weather) {

    const cloudy = "cloudy";
    const rainy = "rainy";
    const rain = "rain";
    const snowy = "snowy";
    const sunny = "sunny";
    const thundery = "thundery";
    const condition = weather.toLowerCase();
     
    if (condition.includes(cloudy)){
        body.className = "";
        body.classList.add("bg-[url(/weather-icons/backgrounds/cloudy.jpg)]", "bg-cover")
        body.classList.add("bg-black");
    }
    else if (condition.includes(rainy)){
        body.className = "";
        body.classList.add("bg-[url(/weather-icons/backgrounds/rainy.jpg)]", "bg-cover")
        body.classList.add("bg-black");
    }
    else if (condition.includes(rain)){
        body.className = "";
        body.classList.add("bg-[url(/weather-icons/backgrounds/rainy.jpg)]", "bg-cover")
        body.classList.add("bg-black");
    }
    else if (condition.includes(snowy)){
        body.className = "";
        body.classList.add("bg-[url(/weather-icons/backgrounds/snowy.jpg)]", "bg-cover")
        body.classList.add("bg-black");
    }
    else if (condition.includes(sunny)){
        body.className = "";
        body.classList.add("bg-[url(/weather-icons/backgrounds/sunny.jpg)]", "bg-cover")
        body.classList.add("bg-black");
    }
    else if (condition.includes(thundery)){
        body.className = "";
        body.classList.add("bg-[url(/weather-icons/backgrounds/thundery.jpg)]", "bg-cover")
        body.classList.add("bg-black");
    };
};