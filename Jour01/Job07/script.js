const ferie = ['01-01', '04-06', '05-01', '05-08',
'05-14' , '05-25', '07-14' , '08-15' , '11-01' , '12-25'];

let date = new Date;
let date2 = new Date("2026-04-06");


let jour = date.getDate();
console.log(date.getDate());
let mois = date.getMonth() + 1;
console.log(date.getMonth() + 1);
    let annee = date.getFullYear();

console.log(date2.getMonth() + 1);
console.log(date2.getDate());
console.log(date2.getFullYear());

let dateExemple = "0" + date2.getDate() + "-0" + (date2.getMonth() + 1);
console.log(dateExemple);


