// fetch('http://api.weatherapi.com/v1/current.json?key=ba20aa7ba11a40d982780301261704&q=London&aqi=no')
// .then(response => response.json())
// .then(data => {
//     console.log(data.current)
// })
// .catch(error => {
//     console.log(error)
// })



      const form = document.getElementById("weatherForm");
      const resultDiv = document.getElementById("result");

      const API_KEY = "77fd9a44423cac4ea6a5227f568050b5";

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const city = document.getElementById("cityInput").value;

        resultDiv.innerHTML = "Loading...";

        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
          );

          if (!response.ok) {
            throw new Error("City not found");
          }

          const data = await response.json();

          resultDiv.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
        `;
        } catch (error) {
          resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
        }
      });