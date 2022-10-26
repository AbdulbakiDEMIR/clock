//target time
var time;
//countdown function situation
var situation = 1;
//stop time
var time2;
// Alert Sound
var snd = new Audio('clock.mp3');
function timeStart(){
    situation = 0;
    start = new Date();
    //now
    time = start.getTime();
    //input area's values
    hour = document.getElementById("input-hours").value;
    minute = document.getElementById("input-minutes").value;
    second = document.getElementById("input-seconds").value;  
    //now time to millisecond
    hour = hour*3600000;
    minute = minute*60000;
    millisecond = second*1000 + hour + minute;
    //target time
    time = time + millisecond;
    countdown();
}
function timeStop(){
    situation = 1;
    countdown();
}
function timeContinue(){
    if(situation==1){
        situation = 2;
        countdown();
    }

}
function timeReset(){
    situation = 3;
    countdown();
}
var time2;
function countdown(){
    //now
    now = new Date();
    //target time
    date = new Date(time); 
    //countdown time
    counterTime = date.getTime()-now.getTime() + 79200000;
    count = new Date(counterTime );
    if(situation == 1){
        //countdown stop
        time2 = now.getTime();
    }
    else if(situation == 2){
        //countdown continue
        time += now.getTime() - time2;
        situation = 0;
        countdown();
    }
    else if(situation == 3){  
        //countdown restart  
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
    else if(counterTime < 79200000){
        //countdown <= 0
        snd.play();
        element = document.getElementById("alert");
        element.classList.add("alert-active");
    }
    else{
        //when countdown work
        document.getElementById("hours").textContent = (count.getHours() < 10) ? "0" + count.getHours() : count.getHours();
        document.getElementById("minutes").textContent = (count.getMinutes() < 10) ? "0" + count.getMinutes() : count.getMinutes();
        document.getElementById("seconds").textContent = (count.getSeconds() < 10) ? "0" + count.getSeconds() : count.getSeconds();
        /*The countdown function runs every 1 second after the function is run*/
        setTimeout(countdown,1000);
    }
}

function soundClose(){
    //close sound
    snd.pause();
    element = document.getElementById("alert");
    element.classList.toggle("alert-active");
}

