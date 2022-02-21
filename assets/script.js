let searchedCity = document.getElementById("city")
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

function apiCall(){
  var myCity = document.getElementById('city').value
  console.log(myCity)
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&APPID=406e0928d4f7e01f9fc7227e0801a8e4`)
  .then(response=> {
    return response.json();
  }).then(data =>{
    return document.getElementById('searched-city').innerHTML = myCity, 
    document.getElementById('todays-date').innerHTML = date, 
    document.getElementById('todays-temp').innerHTML = data.main.temp, 
    document.getElementById('todays-wind').innerHTML = data.wind.speed, 
    document.getElementById('todays-humidity').innerHTML = data.main.humidity;
  })
}
