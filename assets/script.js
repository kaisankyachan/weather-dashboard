let searchedCity = document.getElementById("city")
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

//HISTORY
let cityHistory = []
let historyHtml = document.getElementById("history")

function addHistory(){
  cityHistory.unshift(city.value);
  console.log(cityHistory)
  
  city.value=''
  historyHtml.innerHTML = ""
  
  for(let i = 0; i < cityHistory.length;i++){
    historyHtml.innerHTML += "<li>" + cityHistory[i] + "</li>"
  }

}
//HISTORY

//API CALL
function apiCall(){

  //Getting the city entered
  var myCity = document.getElementById('city').value
  console.log(myCity)
  //Getting the city entered

  //Fetching data and pushing data to HTML
  fetch(`https://api.openweathermap.org/data/2.5/onecall?q=${myCity}&appid=406e0928d4f7e01f9fc7227e0801a8e4`)
  .then(response=> {
    return response.json();
  }).then(data =>{
    return document.getElementById('searched-city').innerHTML = myCity, 
    document.getElementById('todays-date').innerHTML = date, 
    document.getElementById('todays-temp').innerHTML = data.current.temp, 
    document.getElementById('todays-wind').innerHTML = data.current.wind_speed, 
    document.getElementById('todays-humidity').innerHTML = data.current.humidity,
    document.getElementById('uvindex').innerHTML = data.current.uvi,
    document.getElementById('1-date').innerHTML = date, 
    document.getElementById('1-temp').innerHTML = data.current.temp, 
    document.getElementById('1-wind').innerHTML = data.current.wind_speed, 
    document.getElementById('1-humidity').innerHTML = data.current.humidity,
    document.getElementById('1-icon').innerHTML = data.main.icon;
  })
  //Fetching data and pushing data to HTML
  
  addHistory()
}
//API CALL
