// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("Inserisci una parola, scopri se è palindroma o no").toLowerCase();

var parolaInversa = inversioneStringa(parola);

function inversioneStringa(str) {
  return str.split("").reverse().join("");
}

function palindroma(str) {
  if (parola == parolaInversa) {
    alert("La parola è palindroma")
  } else {
    alert("La parola non è palindroma")
  }
}

palindroma(parola);



// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
