let hours = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let pm = document.querySelector("#ampm");

let d = new Date();

hours.innerText = d.getHours() ; 

minutes.innerText = d.getMinutes() ; 
seconds.innerText=d.getSeconds();
console.log(hours.value);
if(hours.value >12 ) { 
    pm.innerText = "PM";
}

