// For Adding All of Images from js later
// const imgsContainer = document.querySelector(".imgs-container");
const imgsWrappers = document.querySelectorAll(".imgs-container .img-wrapper");
const dotsSelectors = document.querySelectorAll(".dots-wrapper li");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const autoBtn = document.getElementById("auto-btn");
const SIZE = imgsWrappers.length;
let currentIndex = 0;
let automatic = false;
let handler = null;

prev.addEventListener("click", () => {
    currentIndex--;
    showImage();
})
next.addEventListener("click", () => {
    currentIndex++;
    showImage();
})
dotsSelectors.forEach(dot => {
    dot.addEventListener("click", () => {
        currentIndex = dot.dataset.index;
        showImage();
    })
});
autoBtn.addEventListener("click", automate);
autoBtn.addEventListener("click", () => autoBtn.classList.toggle("active"));
function showImage() {
    if(currentIndex < 0) 
        currentIndex = SIZE - 1;

    if(currentIndex > SIZE - 1) 
        currentIndex = 0;
    document.querySelector(".imgs-container .img-wrapper.active").classList.remove("active");
    document.querySelector(".dots-wrapper li.active").classList.remove("active");
    imgsWrappers[currentIndex].classList.add("active");
    dotsSelectors[currentIndex].classList.add("active");
    // Reseting Auto If enabled
    if(automatic) {
        stopAuto();
        startAuto();
    }
}
function stopAuto() {
    clearInterval(handler);
    handler = null;
}
function startAuto() {
    handler = setInterval(() => {
        currentIndex++;
        showImage();
    }, 1000);
}
function automate() {
    automatic = !automatic;
    if(!automatic) {
        // console.log("Not Auto");
        stopAuto();
    } else {
        // console.log("auto");
        startAuto();
    }
}