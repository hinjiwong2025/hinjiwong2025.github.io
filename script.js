let trymeText = document.getElementById("tryme");
const ogText = trymeText.textContent;
var firstClick = true;
var firstLoad = true;

function changeColor(){
    if (firstClick) {
        if (firstLoad){
            trymeText.style = 'color: rgba(255, 0, 0, 1)';
            firstLoad = false
        } else {
            trymeText.style = `color: rgba(${Math.floor(Math.random()*255)+1}, ${Math.floor(Math.random()*255)+1}, ${Math.floor(Math.random()*255)+1}, ${Math.floor(Math.random()*255)+1})`;
        }
        trymeText.textContent = "Tat Fwat";
        firstClick = false;
    } else {
        trymeText.style = 'color: rgba(0, 0, 0, 1)';
        trymeText.textContent = ogText;
        firstClick = true;
    }
}

let housePicture = document.getElementById('house')

function house() {
    if (housePicture.src.includes('img/house.jpg')) {
        housePicture.src = 'img/royalcrescent.jpg';
    } else {
        housePicture.src = 'img/house.jpg';
    }
}

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});