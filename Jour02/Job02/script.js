let button = document.getElementById("button");

function showHide() {

    let article = document.getElementById("monArticle");

      if(article) {
        article.remove();

      } else {
        article = document.createElement("article");
        article.setAttribute("id", "monArticle")
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage"
        document.body.appendChild(article);

      }
      }

button.addEventListener("click", showHide);