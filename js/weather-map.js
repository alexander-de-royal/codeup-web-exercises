
//MAP BOX DISPLAY
    mapboxgl.accessToken = myMapBoxKey;
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [0, 0],
    zoom: 2
});

    const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([0, 0])
    .addTo(map);

    function onDragEnd() {
    const lngLat = marker.getLngLat();
    let latitude = `${lngLat.lat}`;
    let longitude = `${lngLat.lng}`;

    //FETCH API FROM OPEN WEATHER MAP AND DISPLAY JSON USING LATITUDE AND LONGITUDE
    let api = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherAPI}`;
    fetch(api).then(response =>{
    return response.json()
})
    .then(data => {
    console.log(data);

    // LOOP THROUGH TO GET DATA FOR ALL DAYS
    for( let i = 0; i<5; i++){
    document.querySelector(".cityName").innerHTML = data.city.name;
    document.querySelector(".sunrise").innerHTML = moment(data.city.sunrise,'X').format('HH:mm a');
    document.querySelector(".sunset").innerHTML = moment(data.city.sunset,'X').format('HH:mm a');
    document.querySelector(".date").innerHTML = " "  + moment(data.list[0].dt * 1000) + " ";
    document.querySelector(".cityInput").innerHTML = data.city.name;
    document.querySelector(".description").innerHTML = data.list[i].weather[0].description.toUpperCase() + " -- ";
    document.querySelector(".main").innerHTML = data.list[i].weather[0].main + "y";
    document.querySelector(".temp").innerHTML = Number(data.list[i].main.temp - 273.15).toFixed(2) + "°C";
    document.querySelector(".humidity").innerHTML = Number(data.list[i].main.humidity) + "%";
    document.querySelector(".wind").innerHTML = Number(data.list[i].wind.speed) + " km/h";
    document.getElementById("day" + (i+1) + "Min").innerHTML = "High:" + Number(data.list[i].main.temp_min - 273.15).toFixed(1);
    document.getElementById("day" + (i+1) + "Max").innerHTML = "Low:" + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°C";
    document.getElementById("img" + (i+1)).src = "https://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon + ".png";

        if(data.list[i].weather[0].main === "Clouds"){
            weatherIcon.src = "weather-img/broken-clouds.svg";
        } else if (data.list[i].weather[0].main === "Clear"){
            weatherIcon.src = "weather-img/clear-sky.svg";
        } else if (data.list[i].weather[0].main === "Rain"){
            weatherIcon.src = "weather-img/rain.svg";
        } else if (data.list[i].weather[0].main === "Drizzle"){
            weatherIcon.src = "weather-img/drizzle.svg";
        } else if (data.list[i].weather[0].main === "Mist"){
            weatherIcon.src = "weather-img/mist.svg";
        }

        if (data.list[i].main.temp > 30){
            temperatureIcon.src = "weather-img/high.png";
        } else if (data.list[i].main.temp > 20 && data.list[i].main.temp < 30){
            temperatureIcon.src = "weather-img/med.png";
        } else if (data.list[i].main.temp < 20){
            temperatureIcon.src = "weather-img/low.png";
        }
}})}

    marker.on('dragend', onDragEnd);

    // CREATES NAVIGATION BUTTON ON MAP
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav)


    // CREATES ICON ON WEB PAGE BASED ON WEATHER AND TEMPERATURE
    const weatherIcon = document.querySelector(".weather-icon");
    const temperatureIcon = document.querySelector(".temperature");

    //FUNCTION THAT FETCHES API USING CITY NAME AND DISPLAYS RESULT
    function GetInfo() {
    let newName = document.querySelector(".cityInput");
    let cityName = document.querySelector(".cityName");
    cityName.innerHTML = newName.value.toUpperCase();
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='
    + newName.value
    +'&appid=40cb7f55adbe6b3302d4780d0ead3739')
    .then(response => response.json())
    .then(data => {
    for( let i = 0; i<5; i++){
    // document.querySelector(".sunrise").innerHTML = data.city.sunrise;
    document.querySelector(".sunrise").innerHTML = moment(data.city.sunrise,'X').format('HH:mm a');
    document.querySelector(".sunset").innerHTML = moment(data.city.sunset,'X').format('HH:mm a');
    document.querySelector(".date").innerHTML = Date(data.list[0].dt * 1000);
    document.querySelector(".description").innerHTML = data.list[i].weather[0].description.toUpperCase() + " -- ";
    document.querySelector(".main").innerHTML = data.list[i].weather[0].main + "y";
    document.querySelector(".temp").innerHTML = Number(data.list[i].main.temp - 273.15).toFixed(2) + "°C";
    document.querySelector(".humidity").innerHTML = Number(data.list[i].main.humidity) + "%";
    document.querySelector(".wind").innerHTML = Number(data.list[i].wind.speed) + " km/h";
    document.getElementById("day" + (i+1) + "Min").innerHTML = "High:" + Number(data.list[i].main.temp_min - 273.15).toFixed(1);
    document.getElementById("day" + (i+1) + "Max").innerHTML = "Low:" + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°C";
    document.getElementById("img" + (i+1)).src = "https://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon + ".png";

        if(data.list[i].weather[0].main === "Clouds"){
            weatherIcon.src = "weather-img/broken-clouds.svg";
        } else if (data.list[i].weather[0].main === "Clear"){
            weatherIcon.src = "weather-img/clear-sky.svg";
        } else if (data.list[i].weather[0].main === "Rain"){
            weatherIcon.src = "weather-img/rain.svg";
        } else if (data.list[i].weather[0].main === "Drizzle"){
            weatherIcon.src = "weather-img/drizzle.svg";
        } else if (data.list[i].weather[0].main === "Mist"){
            weatherIcon.src = "weather-img/mist.svg";
        }

        if (data.list[i].main.temp > 30){
            temperatureIcon.src = "weather-img/high.png";
        } else if (data.list[i].main.temp > 20 && data.list[i].main.temp < 30){
            temperatureIcon.src = "weather-img/med.png";
        } else if (data.list[i].main.temp < 20){
            temperatureIcon.src = "weather-img/low.png";
        }

}})}
    //USES A SPECIFIC LOCATION AS DEFAULT WHEN PAGE LOADS
    function DefaultScreen(){
    document.querySelector(".cityInput").defaultValue = "Andorra";
    GetInfo();
}
    //Getting and displaying the text for the upcoming five days of the week
    let d = new Date();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
    //Function to get the correct integer for the index of the days array
    function CheckDay(day){
    if (day + d.getDay() > 6){
    return day + d.getDay() - 7;
} else {
    return day + d.getDay();
}
}
    for(let i = 0; i<5; i++){
    document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
}


