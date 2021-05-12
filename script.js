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
//create a circle 
if(canvas.getContext){
    //2d 
    let ctx = canvas.getContext('2d');
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let r = 45; 

    ctx.beginPath();
    ctx.arc(x,y,r,0,2 *Math.PI, false);
    ctx.linewidth = 3;
    ctx.fillStyle = 'red';
    ctx.fill();

    //will create 20 circles randomly in the canvas
    for (let x = 0; x < 20; x++) {
        //get random x and y coordinates 
        let ex = Math.floor(Math.random() * 10);
        let why = Math.floor(Math.random() * 10);

        console.log(`${ex}   ${why}`);
        
        ctx.beginPath();
        ctx.arc(ex,why,r,0,2 *Math.PI, false);
        ctx.linewidth = 3;
        //random colour picker
        let randomColour = "#"+Math.floor(Math.random()*16777215).toString(16);
        ctx.fillStyle = randomColour;
        ctx.fill();
    }
}
}
