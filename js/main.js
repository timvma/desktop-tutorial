const cityContainer = document.getElementById('city')
const temperatureContainer = document.getElementById('temp')
const sunMoon = document.getElementById('sun-moon')


const d = new Date();
let time = d.getHours();

console.log( time )


if(time == 0)  sunMoon.style.transform = 'rotate(270deg)'
if(time == 1)  sunMoon.style.transform = 'rotate(285deg)'
if(time == 2)  sunMoon.style.transform = 'rotate(300deg)'
if(time == 3)  sunMoon.style.transform = 'rotate(315deg)'
if(time == 4)  sunMoon.style.transform = 'rotate(330deg)'
if(time == 5)  sunMoon.style.transform = 'rotate(345deg)'
if(time == 6)  sunMoon.style.transform = 'rotate(0deg)'
if(time == 7)  sunMoon.style.transform = 'rotate(15deg)'
if(time == 8)  sunMoon.style.transform = 'rotate(30deg)'
if(time == 9)  sunMoon.style.transform = 'rotate(45deg)'
if(time == 10)  sunMoon.style.transform = 'rotate(60deg)'
if(time == 11)  sunMoon.style.transform = 'rotate(75deg)'
if(time == 12)  sunMoon.style.transform = 'rotate(90deg)'
if(time == 13)  sunMoon.style.transform = 'rotate(105deg)'
if(time == 14)  sunMoon.style.transform = 'rotate(120deg)'
if(time == 15)  sunMoon.style.transform = 'rotate(135deg)'
if(time == 16)  sunMoon.style.transform = 'rotate(150deg)'
if(time == 17)  sunMoon.style.transform = 'rotate(165deg)'
if(time == 18)  sunMoon.style.transform = 'rotate(180deg)'
if(time == 19)  sunMoon.style.transform = 'rotate(195deg)'
if(time == 20)  sunMoon.style.transform = 'rotate(210deg)'
if(time == 21)  sunMoon.style.transform = 'rotate(225deg)'
if(time == 22)  sunMoon.style.transform = 'rotate(240deg)'
if(time == 23)  sunMoon.style.transform = 'rotate(255deg)'






async function getIpAddress() {
  const response = await fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=3c47805d8d4344cba0a5a44669eb33ac");
  const data = await response.json();
  return data;
}


async function getWeather(lat,lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=1feaed6664354e68716f8f6fbb03ff5a`);
  const data = await response.json();
  return data;
}


getIpAddress()
  .then(data => {
      console.log(data);
      cityContainer.textContent = data.city

      getWeather(data.latitude,data.longitude)
      .then(data => {
          console.log(data);
          console.log(data.main.temp);
          temperatureContainer.textContent = Math.round(data.main.temp)
      })
      .catch(err => {
          console.log(err);
      })
  })
  .catch(err => {
      console.log(err);
})


