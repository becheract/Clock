function updateTime(){
//clock 
let clock = document.querySelector("clock");

//get current time 
let currentTime = new Date();

//hours 
let currentHours = currentTime.getHours();
//minutes 
let currentMinutes = currentTime.getMinutes(); 
//seconds
let currentSeconds = currentTime.getSeconds();

//format it 
currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
//if its am or pm 
let timeOfDay = ( currentHours < 12) ? "AM" : "PM";

currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
currentHours = ( currentHours == 0) ? 12 : currentHours;

//format 
let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
console.log(currentTimeString);
document.getElementById("Horloge").innerHTML = currentTimeString;
}

//function will animate background
function animate() {
const canvas = document.getElementById('circle');

if(canvas.getContext){
    let ctx = canvas.getContext('2d');
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let r = 45; 

    ctx.beginPath();
}
}

