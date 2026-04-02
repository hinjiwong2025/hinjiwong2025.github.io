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
    if (housePicture.src.includes('house.jpg')) {
        housePicture.src = 'royalcrescent.jpg';
    } else {
        housePicture.src = 'house.jpg';
    }
}