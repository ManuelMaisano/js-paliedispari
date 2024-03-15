// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


const userWord = prompt('Scrivi una parola')

const wordPalindrome = isTheWordAPalindrom (userWord)
alert (wordPalindrome)
console.log(wordPalindrome);
 

// FUNCTIONS
function isTheWordAPalindrom (word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i-- ) {
        let letterWord = word[i];
        console.log(letterWord);
        reverseWord += letterWord;
    }
    let palindromOrNot;
    if (reverseWord === word) {
        palindromOrNot = "È palindromo"
    } else {
        palindromOrNot = "Non è palindromo"
    }
    return palindromOrNot
}