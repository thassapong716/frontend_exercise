async function getWeather(){
    try {
        let city = document.getElementById('zipcode').value;
        let key =  'd72729578543cfc435344f99b226b1c9';
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
        await fetch(url)
        .then((weather)=> {return weather.json()})
        .then(displayData);
    } catch {
        console.log('something went wrong');
    }
}   
function displayData(weather){
    mydiv = document.getElementById('mydiv');
    console.log(weather);
    let temp = "Current Temp is "+(((weather.main.temp)*1.8)+32)+" F";
    let maxtemp = "Max Temp is "+weather.main.temp_max +" C";
    let mintemp = "Min Temp is "+weather.main.temp_min +" C";
    let visib = "Visibility is "+weather.visibility;
    let city = "City "+weather.name;
    mydiv.innerHTML = `<h3>${temp} <br>${maxtemp}<br>${mintemp}<br>${visib}<br>${city}</h3>`
}