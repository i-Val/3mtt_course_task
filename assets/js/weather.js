const form = document.getElementById("weatherForm");
const cardsDiv = document.getElementById('cards');
const locationDiv = document.getElementById('location');

const API_KEY = '77fd9a44423cac4ea6a5227f568050b5';

function getTempIcon(temp) {
    if(temp <=10) return 'fa-snowflake';//cold
    if(temp <=25) return 'fa-cloud-sun';//mild weather
    return 'fa-fire';//hot
}

function getWeatherIcon(main) {
    const map = {
        Clear: 'fa-sun',
        Clouds: 'fa-cloud',
        Rain: 'fa-cloud-showers-heavy',
        Drizzle: 'fa-cloud-rain',
        Thunderstorm: 'fa-bolt',
        Snow: 'fa-snowflake',
        Mist: 'fa-smog'
    };
    return map[main] || 'fa-cloud'
}

function getHumidityIcon(humidity) {
    if(humidity < 40) return 'fa-droplet-slash';
    if(humidity <= 70) return 'fa-droplet';
    return 'fa-water';
}

function getWindIcon(speed) {
    if(speed < 3) return 'fa-wind';
    if(speed < 8) return 'fa-wind';
    return 'fa-tornado';

}

function createCard(title, value, icon){
    return `
    <div class ="card">
    <i class="fa-solid ${icon} icon"></i>
    <h3>${title}</h3>
    <p>${value}</p>
    </div>
    `;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = document.getElementById('cityInput').value;

    cardsDiv.innerHTML = "Loading...";

    locationDiv.innerHTML = "";

    try{
        //code goes...
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`  
        );

        if(!response.ok) throw new Error("City not found");

        const data = await response.json()


        locationDiv.innerHTML = `<h2>${data.name}, ${data.sys.country}</h2>`;

        const temp = data.main.temp;
        const weather = data.weather[0].main;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;

        cardsDiv.innerHTML = `
        ${createCard("Temperature", temp + "C", getTempIcon(temp))}
        ${createCard("Weather", weather, getWeatherIcon(weather))}
        ${createCard("Humidity", humidity + "%", getHumidityIcon(humidity))}
        ${createCard("Wind", wind + "m/s", getWindIcon(wind))}`;


    }catch(error) {
        cardsDiv.innerHTML = `<p class="error"> ${error.message}</p>`
    }

});