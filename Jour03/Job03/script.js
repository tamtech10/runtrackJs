function showPokemon(pokemon) {
    let div = document.createElement("div");
    div.textContent =
        pokemon.id + " " +
        pokemon.name + " " +
        pokemon.type(", ");
    document.body.appendChild(div);
}


document.getElementById("filterButton").addEventListener("click", function () {

    


});