
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

/*
2. ლექციაზე შექმნილ სლაიდერს დავამატოთ: 
   1. როდესაც ავტომატურად ხდება სლაიდების შეცვლა თუ მაუსს მ
   ივიტან სურათთან, ავტომატური სლაიდი გაჩერდეს.
   2. თუ მაუსი მიტანილი მაქვს სურათზე და შემდეგ გამოვწევ 
   სურათიდან, ავტომატური სლაიდი გაგრძელდეს. (მოუსემინეთ  mouseenter, mouseleave)  ივენთებს 
*/

const slides = document.querySelectorAll('.slide-item');
const slidesLength = slides.length;
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const stopBtn = document.querySelector('#stop-sliding');
const startBtn = document.querySelector('#start-sliding');
let activeIndex = 0;

function renderSlider() {
    slides.forEach((element, index) => {
        element.style.transform = `translateX(${100 * (index - activeIndex % slidesLength)}%)`;
    })
}

renderSlider();

function nextSlide() {
    if (activeIndex === (slidesLength - 1)) {
        activeIndex = 0;
    } else {
        activeIndex = activeIndex + 1;
    }
    renderSlider();
    grayDot();
}

function prevSlide() {
    if (activeIndex === 0) {
        activeIndex = slidesLength - 1;
    } else {
        activeIndex = activeIndex - 1;
    }
    renderSlider();
    grayDot()
}

nextButton.addEventListener('click', (e) => {
    nextSlide();
});
prevButton.addEventListener('click', prevSlide);

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowRight') {
        nextSlide();
    }
    if (e.code === 'ArrowLeft') {
        prevSlide();
    }
});

let intervalId = null;
let startClicked = false;
function startAutoSliding() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            nextSlide();
        }, 3000);
    }
}

function stopAutoSliding() {
    clearInterval(intervalId);
    intervalId = null;
}
stopBtn.addEventListener('click', stopAutoSliding);
startBtn.addEventListener('click', startAutoSliding);


