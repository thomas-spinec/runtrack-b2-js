const html = document.querySelector("html");

// changer la couleur de fond en fonction de la taille de l'écran
function myChangeBackgroundColor(){
    if (window.innerWidth <= 504) {
        html.style.backgroundColor = "#003049";
    } else if (window.innerWidth < 1336 && window.innerWidth > 504) {
        html.style.backgroundColor = "#d90429";
    } else {
        html.style.backgroundColor = "ffb703";
    }
}

// changer la couleur de fond en fonction de la taille de l'écran
myChangeBackgroundColor();

// changer la couleur de fond en fonction de la taille de l'écran quand on redimensionne la fenêtre
window.addEventListener("resize", myChangeBackgroundColor);
