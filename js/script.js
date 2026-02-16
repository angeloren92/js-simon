/*
-agganciamo i nodi della dom

1 agganciare i nodi della dom
2 generare numeri casuali: da 1 a 50, ps non deve dare numeri doppi
3 timer di 30 secondi per i numeri da visualizzare
4 visualizzazione form con inputs
5 evento quando clicca conferma
6 validazione numeri inseriti //è il bonus per ultimo
7 confronto numeri generati e numeri inseriti da utente
8 visualizzazione risultato in html
*/

//AGGANCIO NODI
const numbersListEl = document.getElementById('numbers-list');
const answersFormEl = document.getElementById('answers-form');
const buttonEl = document.querySelector('button');
const instructionsEl = document.getElementById('instructions');
const countdownEl = document.getElementById('countdown')

//RICHIAMO FUNZIONI
//ho dovuto trasformare il set in un array, per poterci lavorare successivamente
const randomNums = Array.from(getRandomNums());
console.log(randomNums);

//TIMER PER LASCIARE ALL'UTENTE DI LEGGERE LE ISTRUZIONI
setTimeout(function () {
    let timer = 3;
    countdownEl.innerHTML = timer;
    instructionsEl.innerHTML = "";
    //Inseriamo un nuovo elemento html per ogni elemento dell'oggetto
    randomNums.forEach(randomNum => {
        numbersListEl.innerHTML += `<li>${randomNum}</li>`;
    });
    //COUNTDOWN CON LE CONSEGUENTI AZIONI
    const timerId = setInterval(function () {
        if (timer <= 0) {
            clearInterval(timerId);
            answersFormEl.classList.remove('d-none');
            numbersListEl.classList.add('d-none');
            countdownEl.classList.add('d-none');
            instructionsEl.innerHTML = 'Inserisci i numeri che hai visto prima';
        }
        else {
            timer--;
            countdownEl.innerHTML = timer;
        }
    }, 1000)
}, 2500)


//EVENTO AL CLICK CON CONSEGUENTI AZIONI
buttonEl.addEventListener('click', function (e) {
    e.preventDefault();
    //conserviamo i valori degli input inseriti dall'utente
    const inputValues = getInputValues();
    console.log(inputValues)
    //deve fare i confronti 
    const goodNumbers = checkNumbers(randomNums, inputValues);
    //azioni al click del conferma
    countdownEl.innerHTML = "";
    instructionsEl.innerHTML = "Hai indovinato questi Numeri!!";
    answersFormEl.classList.add('d-none');
    numbersListEl.classList.remove('d-none');
    countdownEl.classList.remove('d-none');
    //reset della lista UL LI
    numbersListEl.innerHTML = "";
    //visualizzaione dei numeri indovinati
    goodNumbers.forEach(goodnumber => {
        numbersListEl.innerHTML += `<li>${goodnumber}</li>`;
    });
})

//FUNZIONI
//generare numeri casuali: da 1 a 50, ps non deve dare numeri doppi
/**
 * ## genera una cinquina di numeri compresi da 1 a 50
 * @returns restituisce un oggetto
 */
function getRandomNums() {
    const randomNums = new Set();
    while (randomNums.size != 5) { randomNums.add(Math.floor(Math.random() * 50) + 1) };
    return randomNums;
}


/**
 * ## Salviamo in un array i valori degli input
 * @returns 
*/
function getInputValues() {
    const inputEl = document.querySelectorAll('input');
    const value = [];
    inputEl.forEach(input => {
        value.push(Number(input.value));
    })
    return value;
}
/**
 * ## confrontiamo i valori tra di loro
 * @param {Array} randomNums numeri casuali generati da sistema
 * @param {Array} inputValues numeri presi dagli input
 * @returns 
*/
function checkNumbers(randomNums, inputValues) {
    const goodNumbers = [];
    for (let i = 0; i < inputValues.length; i++) {
        if (randomNums.includes(inputValues[i])) {
            goodNumbers.push(inputValues[i]);
        }
    }
    console.log(goodNumbers)
    return goodNumbers;
}
