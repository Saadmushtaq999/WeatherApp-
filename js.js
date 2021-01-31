const api={
    key :"8c7876a37e6fefc8c783513eaf4a309b",
    base:"https://home.openweathermap.org/api_keys"
}
const searchbox = document.querySelector('#searching');
searchbox.addEventListener('keypress',setQuery);
function setQuery(evt){
    if (evt.keyCode==13)
    {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}
function getResults(query){
    fetch('${api.base}weather?q=${query}&units=metric&APPID=${api.key}')
    .then(weather=>{return weather.json();})
    .then(displayResults);
}
function displayResults(weather){
    console.log(weather);
    let city=document.querySelector('.city');
    city.innerText='${weather.name},${weather.sys.country}';
    let now =new Date();
    let date =document.querySelector('.date');
    date.innerText=dateBuilder(now);
    let temp =document.querySelector('.temp1');
    temp.innerHTML='${Math.round(weather.main.temp)}';
    let weather_el=document.querySelector('.win');
    weather_el.innerText=weather.weather[0].main;
}
function dateBuilder(d){
    let months=["Janurary","Feburary", "March","April","May","June","July","August","September","Octuber","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonths()];
    let year=d.getFullYear();
    return '${day}${date}${month}${year}';
}