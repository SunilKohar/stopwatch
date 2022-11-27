let hours= 00;
let minutes =00;
let sec =00;
let milisec =00;
function startIntervals(){
    intervals = setInterval( ()=>{
    milisec += 10;
    if(milisec == 1000){
        milisec = 0;
        sec ++;
        if(sec == 60){
            sec =0;
            minutes++;
            if(minutes==60){
                minutes =0;
                hours++;
            }
        }
    }
    document.getElementsByClassName('display')[0].innerHTML = `${hours}:${minutes}:${sec}:${milisec}`;  

}, 10);
}

function pauseIntervals(){
    clearInterval(intervals);
}

function resetInterval(){
    clearInterval(intervals);
    hours= 00;
    minutes =00;
    sec =00;
    milisec =00;
    document.getElementsByClassName('display')[0].innerHTML = `${hours}:${minutes}:${sec}:${milisec}`;  
}