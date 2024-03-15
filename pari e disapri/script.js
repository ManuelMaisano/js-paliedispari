//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

//scegliamo tra pari e dispari

let userChoice = prompt('Scegli tra pari e dispari');
console.log(userChoice);

while (userChoice !== 'pari' && userChoice !== 'dispari') {
    userChoice = prompt('Scegli tra pari e dispari');
}

//l'utente sceglie un numero tra 1 e 5

const UserNumber = parseInt(prompt('Dimmi un numero da 1 a 5'));
console.log('Numero user', + UserNumber);



