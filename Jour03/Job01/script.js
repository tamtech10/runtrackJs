function create(p) {
     let articlep = document.createElement("p");
     articlep.textContent = p;
     document.body.appendChild(articlep);
}


document.getElementById("button").addEventListener("click" , function() {
     fetch("expression.txt")
        .then(response =>{
            if (!response.ok){
                throw new Error("error in fetch");
            }
            console.log(response);
            return response.text();
        })
        .then(data=>{
            console.log(data);
            create(data);
        })
        .catch(error => {
            console.error(error);   //console.info/warn
        })
});














