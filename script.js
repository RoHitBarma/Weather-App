const apiKey = "6a9163f1d105feb1e3ded795e49255cd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const mainWeatherIcon = document.querySelector("#mainWeatherIcon")
const errorMsg = document.querySelector(".error")

async function getWeatherData(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await responce.json();

    if(responce.status == 404){
        errorMsg.style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        errorMsg.style.display = "none";

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            mainWeatherIcon.src = "images/clouds.png"
        }
        if(data.weather[0].main == "Rain"){
            mainWeatherIcon.src = "images/rain.png"
        }
        if(data.weather[0].main == "Drizzle"){
            mainWeatherIcon.src = "images/drizzle.png"
        }
        if(data.weather[0].main == "Mist"){
            mainWeatherIcon.src = "images/drizzle.png"
        }
        if(data.weather[0].main == "Snow"){
            mainWeatherIcon.src = "images/snow.png"
        }
        if(data.weather[0].main == "Clear"){
            mainWeatherIcon.src = "images/clearWeather.png"
        }

        document.querySelector(".weather").style.display = "block";
    }

    console.log(data)

    
}

searchBtn.addEventListener("click", ()=> {
    getWeatherData(searchInput.value)
})