// console.log("Praktika")
// let vardas = "Petras";
// let alga = 100;

// //funkcijos sukurimas
// function pasisveikinimas(a){
//     console.log("Labas" +a);
// }
// //funkcijos iskvietimas
// pasisveikinimas(vardas);

// //funkcijos sukurimas
// function metinesPajamos(x){
//     console.log(x*12);
// }
// //funkcijos iskvietimas
// metinesPajamos(alga);

//lokalus, globalus scope
// const gyvunas = "Dramblys";
// console.log("pirmas deklaravimas" +gyvunas);

//  gyvunas = "Ozka"

// console.log("antras deklaravimas" +gyvunas);
console.log ("Super Calk");

function skaiciuoti(a, b, zenklas){
switch (zenklas){
    case "+":
    console.log (a + b);
    break;

    case "-":
    console.log (a - b);
    break;

    case "/":
    console.log (a / b);
    break;

    case "*":
    console.log (a * b);
    break;

}
}
skaiciuoti(3, 4, "*");