/*
Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

'use strict';

// Chiedi all'utente di inserire una parola
let parola = prompt('Inserisci una parola:');

// Genera un alert se la parola è un palindromo o meno
if (Palindromo(parola)) {
  alert(parola + ' è un palindromo!');
} else {
  alert(parola + ' non è un palindromo.');
}

// Non so come continuare
