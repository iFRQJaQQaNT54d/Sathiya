const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";  // Replace with your API key

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("weather-info").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            document.getElementById("weather-info").innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weather-info").innerHTML = `<p>Failed to fetch weather data.</p>`;
    }
}
