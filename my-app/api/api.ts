import api from "../consts/consts"

async function apiRequest(city: string) {
    const ip = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.api}`);
    const res = await ip.json();
    console.log(res);
    return res.main.temp;
}

export default apiRequest;