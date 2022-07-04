// Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// * Recupero dal DOM gli elementi che mi servono

const display = document.getElementById('countdown');
let seconds = 30;
display.innerText = seconds;
const numbersList = document.getElementById('numbers-list');

// * Funzioni

const numbers = [];
function createRandomNumbers(min, max, randomNumbers) {
    while (numbers.length < randomNumbers) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (max - min)) + min;
        } while (numbers.includes(randomNumber));
        numbers.push(randomNumber)
    }
    return numbers;
}

const randomNumber = createRandomNumbers(1, 100, 5);

const countdown = setInterval (function () {
    display.innerText = --seconds;

    if (seconds === 0) {
        clearInterval(countdown);
    }
}, 1000);

for (i = 0; i < numbers.length; i++) {
    const newNumber = document.createElement('div');
    newNumber.classList.add('new-number');
    numbersList.append(newNumber);
    newNumber.innerText = numbers[i];
}
