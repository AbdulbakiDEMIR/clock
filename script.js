
function countdown(){
    var now = new Date(); 
    document.getElementById("hours").textContent = (now.getHours() < 10) ? "0" + now.getHours() : now.getHours();
    document.getElementById("minutes").textContent = (now.getMinutes() < 10) ? "0" + now.getMinutes() : now.getMinutes();
    document.getElementById("seconds").textContent = (now.getSeconds() < 10) ? "0" + now.getSeconds() : now.getSeconds();
    /*The countdown function runs every 1 second after the function is run*/
    setTimeout(countdown,1000);
}
/*The countdown function runs 1 millisecond after the page is opened */
setTimeout(countdown,1);
