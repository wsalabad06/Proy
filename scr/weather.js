//Weather:
// Llamar a la función para obtener la geolocalización al cargar la página
$(document).ready(() => {
  getGeolocation();
});

// Variables públicas para latitud y longitud
let latitude, longitude;

// Función para obtener la geolocalización
function getGeolocation() {
    try {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                getWeatherData(latitude, longitude);
            }, error => {
                console.error("Error getting geolocation: ", error);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    } catch (error) {
        alert("Error: " + error);
    }
}


// Función para consumir la API de OpenWeatherMap
function getWeatherData(lat, lon) {
    try {
        const apiKey = '863fc34a9e0dac20de192e0f00839124';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;


        $.getJSON(url, data => {
            // Asignar los datos a los elementos HTML
            $('#lug').text(data.name);
            $('#tem').text(data.main.temp + " °C");
            $('#hum').text(data.main.humidity + " %");
            $('#vie').text(data.wind.speed + " m/s");
            $('#tiempoIcon').attr('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        }).fail(err => {
            console.error("Error fetching weather data: ", err);
        });
    } catch (error) {
        alert("Error: " + error);
    }
}

// Llamar a la función para obtener la geolocalización al cargar la página
$(document).ready(() => {
    getGeolocation();
});
