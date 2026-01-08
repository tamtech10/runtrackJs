let article = document.getElementById("citation");

let button = document.getElementById("button");



function citation() {
    console.log(article.textContent);
}

button.addEventListener("click", citation);
