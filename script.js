// //////////////////////////////////////////// Image Slider Section 2

const arrowLeftSectionTwo = document.querySelector(".arrowImg_left");
const arrowRightSectionTwo = document.querySelector(".arrowImg_right");
const imgSectionTwo = document.querySelectorAll(".section_2_container_img > img");

let i = 0;
let directionAutoSlide = "";

arrowLeftSectionTwo.addEventListener('click', () => {
    clearInterval(interval);
    arrowLeft();
    startInterval();
    directionAutoSlide = "left";
});

arrowRightSectionTwo.addEventListener('click', () => {
    clearInterval(interval); 
    arrowRight();
    startInterval();
    directionAutoSlide = "right";
});

function arrowLeft () {
    imgSectionTwo[i].style.transformOrigin = "right";
    imgSectionTwo[i].style.transform = "scaleX(0)";
    i--;
    if (i < 0) {
        i = imgSectionTwo.length - 1;
    }
    imgSectionTwo[i].style.transformOrigin = "left";
    imgSectionTwo[i].style.transform = "scaleX(1)";
}
function arrowRight () {
    imgSectionTwo[i].style.transformOrigin = "left";
    imgSectionTwo[i].style.transform = "scaleX(0)";
    i++;
    if (i > 3) {
        i = 0;
    }
    imgSectionTwo[i].style.transformOrigin = "right";
    imgSectionTwo[i].style.transform = "scaleX(1)";
}

// Image Slider Section 2 - Auto Slide ////////////////////////////////////////////

function startInterval() {
    interval = setInterval(autoSlide, 5000);
}

startInterval(); 

function autoSlide() {
    if(directionAutoSlide === "right") {
        arrowRight();
    } else if (directionAutoSlide === "left") {
        arrowLeft();
    } else {
        arrowRight();
    }
}