// Selecting DOM elements
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".temp_location p");
const dateField = document.querySelector(".temp_location span");
const emojiField = document.querySelector(".weather_condition img");
const weatherField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let cityName = 'Pune'

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const cityName = searchField.value
    getWeatherInfo(cityName)
})

async function getWeatherInfo(cityName) {
    try {
        const response = await fetch(`http://api.weherapi.com/v1/current.json?key=3f6e34683c8441ac913160916232309&q=${cityName}&aqi=yes`);
        const weatherData = await response.json();
        console.log(weatherData);

        let temp = weatherData.current.temp_c
        let name = weatherData.location.name
        let condition = weatherData.current.condition.text
        let url = weatherData.current.condition.icon
        let date = weatherData.current.last_updated

        console.log(temp, name, condition, url, date)

        let splitTime = date.split(" ")
        console.log(splitTime)

        let exactDate = splitTime[0]
        let exactTime = splitTime[1]

        const d = new Date(exactDate);


        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = weekday[d.getDay()]

        console.log(day)

        temperatureField.innerText = temp;
        cityField.innerText = name
        dateField.innerText = `${exactDate} ${day} ${exactTime}`
        emojiField.src = url
        weatherField.innerText = condition

    } catch (error) {
        console.log('Im catching my error: ', error)
        console.log('some logic to handle error')
    }


}

getWeatherInfo(cityName)