// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// var parola = prompt("Inserisci una parola, scopri se è palindroma o no").toLowerCase();
//
// var parolaInversa = inversioneStringa(parola);
//
// function inversioneStringa(str) {
//   return str.split("").reverse().join("");
// }
//
// function palindroma(str) {
//   if (parola == parolaInversa) {
//     alert("La parola è palindroma")
//   } else {
//     alert("La parola non è palindroma")
//   }
// }
//
// palindroma(parola);



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


var scelta = prompt("Scegli pari o dispari").toLowerCase();
console.log(scelta);

var flag = false;

while (!flag) {
  var numeroUtente = parseInt(prompt("Dammi un numero da 1 a 5"));
  if (numeroUtente > 5 || numeroUtente <= 0) {
    alert("Ti ho chiesto un numero da 1 a 5, riprova");
  } else {
    flag = true;
  }
}

var numeroRandom = numeroComputer (1,5);


var risultato = somma (numeroUtente,numeroRandom);
console.log(risultato);


if (scelta == 'pari' && risultato == 0 || scelta == 'dispari' && risultato == 1){
  alert("Hai vinto");
} else {
  alert("Hai vinto il computer");
}



// Funzioni
function numeroComputer(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}

function somma(numeroUtente,numeroRandom){
  return parseInt(numeroUtente + numeroRandom)%2;
}
