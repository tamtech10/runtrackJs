const json = `{
"name" : "la plateforme",
"address" : "8 rue d'hosier",
"city" : "Marseille",
"nb_staff" : 11,
"creation" : 2019
}`;
// console.log(JSON.parse(json));

//La fonction jsonValueKey() analyse la chaîne JSON à l’aide de
// JSON.parse() et retourne la valeur associée à la clé passée en paramètre.



function jsonValueKey(json, key) { 
        let formatedJson = JSON.parse(json);  //Pretvara string u JavaScript objekat
    return formatedJson[key]; //ako stavimo formatedJson.key funkcionisace jer odmah prikazujemo atribut tog objekta
}                              //ali poenta je da dole mozmo u console da menjamo key zato pisemo ovako
                                //pa umesto "city" mozmo traziti key "name"
console.log(jsonValueKey(json, "city"));  