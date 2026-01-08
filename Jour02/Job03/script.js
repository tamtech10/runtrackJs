let button = document.getElementById("button");
let compteur = document.getElementById("compteur");

//let valeur = 0;
function addOne () {
       let valeur;
       valeur = Number(compteur.textContent); // transform string to number
       valeur = valeur + 1;
       compteur.textContent = valeur;
//moze ovako a moze i prve dva reda da obrises pa deklarises vaan funkcije let valeur = 0 pa broji od nule
}


button.addEventListener("click", addOne);