
/*
1. setTimeout ან setInterval - ის გამოყენებით გააკეთეთ საათი რომელიც 
იმუშავებს როგორც ნამდვილი სააათი. გამოიყენეთ ქვემოთ მობმული სურათი (საათი.png)
*/
setInterval(displayClock);

function displayClock() {

    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    document.querySelector("#clock").innerText = hrs + " : " + min + " : " + sec;
}