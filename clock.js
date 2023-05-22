let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

  setInterval(()=>{

let day = new Date();
let hour = day.getHours() * 30;
let min = day.getMinutes() * 6;
let sec = day.getSeconds () * 6;
hr.style.transform = `rotateZ(${hour+(min/12)}deg)`;
mn.style.transform = `rotateZ(${min}deg)`;
sc.style.transform = `rotateZ(${sec}deg)`;





// Digital Clock

let hourS = document.getElementById('hours');
let minuteS = document.getElementById('minutes');
let secondS = document.getElementById('seconds');
let ampm = document.getElementById('ampm');
let h = new Date().getHours();
let m = new Date ().getMinutes();
let s = new Date (). getSeconds()



// convert 24hr clock to 12hr clock

if ( h > 12) {
    h = h - 12;
}


if( h > 12 ) {
    h = h - 12;
}

// Add Zero before Single digit number
 h = (h < 10) ? "0" + h : h;
 m = (m < 10) ? "0" + m : m;
 s = (s < 10) ? "0" + s : s;


let am = h >= 12 ? "AM" : "PM" 
hourS.innerHTML = h;
minuteS.innerHTML = m;
secondS.innerHTML = s;
ampm.innerHTML = am;


 
 });

// 

function clock (){
    
let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
 let AmPm = 'AM';

if (hours > 12) {
    AmPm = 'pm';
}



if( hours > 12 ) {
    hours = hours - 12;
}
// 12 = 0

if ( hours == 0) {
    hours = 12;
}


// Add Zero before Single digit number
hours = (hours < 10) ? "0" + hours : hours;
minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;

document.getElementById('clock').innerText = hours + ':' + minutes + ':' + seconds + 'pm';

}

setInterval(clock, 1000);






 
 





