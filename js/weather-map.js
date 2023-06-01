    // window.addEventListener('load', () => {
    //     let lon;
    //     let lat;
    //     if(navigator.geolocation){
    //         navigator.geolocation.getCurrentPosition(position => {
    //             lon = position.coords.longitude;
    //             lat = position.coords.latitude;
    //         })
    //     }
    //     let api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPI}`;
    //     fetch(api).then(response =>{
    //         return response.json()
    //     })
    //         .then(data => {
    //             console.log(data);
    //         })
    // });
    // let latLong = [29.7604, -95.3698];
    // document.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLong[0]}&lon=${latLong[1]}&units=imperial&appid=${weatherAPI}`).done(function(data) {
    //     console.log(data);
    // })

    // MAPBOX
    // navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    //     enableHighAccuracy: true
    // });
    // function successLocation(position){
    //     console.log(position);
    //     setupMap([position.coords.longitude, position.coords.latitude])
    // }
    // function errorLocation(){}
    // function setupMap(center) {
    //     mapboxgl.accessToken = myMapBoxKey;
    //     const map = new mapboxgl.Map({
    //         container: 'map',
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: center,
    //         zoom: 14
    //     })
    // }

    // function setupMap(center){}
    mapboxgl.accessToken = myMapBoxKey;
    const coordinates = document.getElementById('coordinates');
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
    // coordinates.style.display = 'block';
    // coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    let latitude = `${lngLat.lat}`;
    let longitude = `${lngLat.lng}`;

    let api = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherAPI}`;
    fetch(api).then(response =>{
    return response.json()
})
    .then(data => {
    console.log(data.city.name);

    // let newName = document.querySelector(".cityInput");
    // let cityName = data.city.name;
    // cityName.innerHTML = newName.value.toUpperCase();

    for( let i = 0; i<5; i++){
    document.querySelector(".cityName").innerHTML = data.city.name;
    document.querySelector(".cityInput").innerHTML = data.city.name;
    document.querySelector(".sunrise").innerHTML = data.city.sunrise;
    document.querySelector(".sunset").innerHTML = data.city.sunset;
    document.querySelector(".description").innerHTML = data.list[i].weather[0].description.toUpperCase();
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

    if (data.list[i].main.humidity > 30){
    humidityIcon.src = "weather-img/high.png";
} else if (data.list[i].main.humidity < 30){
    humidityIcon.src = "weather-img/med.png";
} else if (data.list[i].main.humidity < 20){
    humidityIcon.src = "weather-img/low.png";
}
}
    // console.log(data)
})
    .catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}



    // let newCity = data.city.name;
    marker.on('dragend', onDragEnd);

    // NAVIGATION BUTTON ON MAP
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav)

    const weatherIcon = document.querySelector(".weather-icon");
    const temperatureIcon = document.querySelector(".temperature");
    const humidityIcon = document.querySelector(".humidity-image")

    function GetInfo() {
    let newName = document.querySelector(".cityInput");
    let cityName = document.querySelector(".cityName");
    // cityName.innerHTML = newName.value.toUpperCase();
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='
    + newName.value
    +'&appid=40cb7f55adbe6b3302d4780d0ead3739')
    .then(response => response.json())
    .then(data => {
    for( let i = 0; i<5; i++){
    document.querySelector(".sunrise").innerHTML = data.city.sunrise;
    document.querySelector(".sunset").innerHTML = data.city.sunset;
    document.querySelector(".description").innerHTML = data.list[i].weather[0].description.toUpperCase();
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

    if (data.list[i].main.humidity > 30){
    humidityIcon.src = "weather-img/high.png";
} else if (data.list[i].main.humidity < 30){
    humidityIcon.src = "weather-img/med.png";
} else if (data.list[i].main.humidity < 20){
    humidityIcon.src = "weather-img/low.png";
}
}
    // console.log(data)
})
    .catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}
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