let footer = document.getElementById("footer");



let positionActuelle = 0;

function footerColor() {

    if(positionActuelle < 1500) {
        footer.style.backgroundColor = "rgb(235, 162, 79)";
    } else if (positionActuelle <2500) {
        footer.style.backgroundColor = "rgb(222, 108, 37)";
    } else {
        footer.style.backgroundColor = "rgb(255, 0, 0)";
    }

}

window.addEventListener("scroll", function() {

    positionActuelle = window.scrollY;
    footerColor();
});