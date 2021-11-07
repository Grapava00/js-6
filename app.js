
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

    document.querySelector("#clock").innerText = hrs + " : " + min + " : " + sec;
}