
const container = document.querySelector("#main-container");
import night from '../../weather-icons/backgrounds/night.jpg';
import day from '../../weather-icons/backgrounds/day.jpg';
import afternoon from '../../weather-icons/backgrounds/afternoon.jpeg';

export default function containerBg() {

    const dayState = new Date().getHours();

    if (dayState > 6 && dayState < 14) {
        container.removeAttribute("style");
        container.style.backgroundImage = `url(${day})`;
        container.style.backgroundSize = 'cover';
    }
    else if (dayState > 14 && dayState < 18) {
        container.removeAttribute("style");
        container.style.backgroundImage = `url(${afternoon})`;
        container.style.backgroundSize = 'cover';
    }
    else if (dayState > 18) {
        container.removeAttribute("style");
        container.style.backgroundImage = `url(${night})`;
        container.style.backgroundSize = 'cover';
    };
};