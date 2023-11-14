/*
Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
-- Generiamo due prompt in cui l’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
-- dentro una funzione generiamo un numero casuale tra 1 e 5.

Sommiamo i due numeri

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
-- Inseriamo in una funzione i numeri per cui il resto della metà della somma dei due numeri è zero 

Dichiariamo chi ha vinto.
*/

// Generiamo due prompt in cui l’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let pariDispari = prompt('scegli pari o dispari:');
let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5:'));

// Dentro una funzione generiamo un numero casuale tra 1 e 5.
function numeroCasuale() {
  return Math.floor(Math.random() * 5) + 1;
}

let numeroComputer = numeroCasuale();

// Sommiamo i due numeri.
let sommaNumeri = numeroUtente + numeroComputer;

// Inseriamo in una funzione i numeri per cui il resto della metà della somma dei due numeri è zero
function numeroPari(numero) {
  return numero % 2 === 0;
}

// Stampiamo i numeri e la loro somma
console.log('Hai scelto:', pariDispari);
console.log('Il tuo numero:', numeroUtente);
console.log('Numero del computer:', numeroComputer);
console.log('Somma dei numeri:', sommaNumeri);

// Vincitore
let fine = numeroPari(sommaNumeri);

if ((pariDispari === 'pari' && fine) || (pariDispari === 'dispari' && !fine)) {
  console.log('Hai vinto!');
} else {
  console.log('Non Hai vinto!');
}
