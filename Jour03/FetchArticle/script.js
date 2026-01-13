function createArticle (article) {
    let articleDiv = document.createElement("div");
    articleDiv.textContent = article.titre + " " + article.auteur + " " + article.contenu + " ";
    document.body.appendChild(articleDiv);
}



document.getElementById("button").addEventListener("click", function() { // 1 methode fetch
fetch ("http://localhost:2525/all")
.then(response => {
    if (!response.ok ) {
        throw new Error("Error in fetch");  
    }
    return response.json();
})
.then(data => {
    console.log(data);
    for (let article of data) {
        createArticle(article);
    }
})
.catch(error => {
    console.error(error);
})
})

// async function fetchArticles() {    // 2 methode 
//     try {
//         let response = await fetch("http://localhost:2525/all");
//         if (!response.ok) {
//             throw new Error("STOP");
//         }

//         let data = await response.json();
//         for (let article of data) {
//             createArticle(article);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// document.getElementById("button").addEventListener("click", fetchArticles);