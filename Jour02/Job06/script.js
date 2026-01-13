let keys = []; 
let x = 0;  

let konami = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];

function styleKonami() {
    document.body.style.backgroundColor = "#0000FF";
    document.body.textContent = "La Plateforme";
    document.body.style.color = "#ffffff";
}

function codeKonami() {

    let tap = true;

    for (let i = 0; i < 10; i++) {   //If the key is different from the Konami code, the code is incorrect
        if (keys[i] != konami[i]) {
            tap = false;
        }
    }

    if (tap) {
        styleKonami();
    }
}


window.addEventListener("keydown", function(event) {

    if (x < 10) {                                  //Count pressed keys
        keys[x] = event.key;
        x++;
    }

    codeKonami();

});



// const codesKonami = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
// let codesUtilisateur = [];

// document.addEventListener("keydown" , event => {
//     codesUtilisateur.push(event.key)
//     console.log(codesUtilisateur)
//     for (i = 0; i<codesUtilisateur.length; i++) {
//     if (codesKonami[i]!=codesUtilisateur[i]) {
//         console.log("Failed");
//         codesUtilisateur = [];
//     } else if (codesUtilisateur.length == codesKonami.length) {
//         console.log("Password OK")
//         codesUtilisateur = [];
//     }
// }});



