//initial value
var start;
//stopwatch function situation
var situation = 1;
//start time
var time;
//stop time
var time2;
//start function
function timeStart(){
    start = new Date();
    time = start.getTime();
    situation = 0;
    stopwatch();
}
//stop function
function timeStop(){
    if(situation==0){
        situation = 1;
        stopwatch();
    }
}
//continue function
function timeContinue(){
    if(situation==1){
        situation = 2;
        stopwatch();
    }
}
//reset function
function timeReset(){
    situation = 3;
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("milliseconds").textContent = "00";
    stopwatch();
}

//stopwatch function
function stopwatch(){
    now = new Date();
    if(situation == 0){
        console.log(now);
        millisecond = now.getTime() - start.getTime() + 79200000;
        value =new Date(millisecond);
        document.getElementById("hours").textContent = (value.getHours() < 10) ? "0" + value.getHours() : value.getHours();
        document.getElementById("minutes").textContent = (value.getMinutes() < 10) ? "0" + value.getMinutes() : value.getMinutes();
        document.getElementById("seconds").textContent = (value.getSeconds() < 10) ? "0" + value.getSeconds() : value.getSeconds();
        document.getElementById("milliseconds").textContent = (Math.floor(value.getMilliseconds()/10) < 10) ? "0" + Math.floor(value.getMilliseconds()/10) : Math.floor(value.getMilliseconds()/10);
        setTimeout(stopwatch,10);
    }
    else if(situation == 1){
        time2 = now.getTime();
    }
    else if(situation == 2){
        time += now.getTime() - time2;   
        start.setTime(time);
        situation = 0;
        stopwatch();
    }
    else{

    }
}

