
const numbersListEl = document.getElementById('numbers-list');
const answersFormEl = document.getElementById('answers-form');

//generare numeri casuali: da 1 a 50, ps non deve dare numeri doppi
/**
 * ## genera una cinquina di numeri compresi da 1 a 50
 * @returns restituisce un oggetto
 */
function getRandomNums() {
    const randomNums = new Set();
    while (randomNums.size != 5) {randomNums.add(Math.floor(Math.random() * 50) + 1)};
    return randomNums;
}

//ho dovuto trasformare il set in un array, per poterci lavorare successivamente
const randomNums = Array.from(getRandomNums());
console.log(randomNums)

//Inseriamo un nuovo elemento html per ogni elemento dell'oggetto
randomNums.forEach(randomNum => {
    numbersListEl.innerHTML += `<li>${randomNum}</li>`;
});

//timer di 30 secondi per lo switch di visualizzazione, da numeri random generati a form per l'inserimento input
const timer = setTimeout(function() {
    //da rivedere le istruzioni da eseguire
    numbersListEl.classList.add('d-none')
    answersFormEl.classList.remove('d-none')
}, 3000);

//Agganciamo i nodi degli inputes
const buttonEl = document.querySelector('button');

//evento al click del bottone
buttonEl.addEventListener('click', function(e){
    e.preventDefault();
    //conserviamo i valori degli input inseriti dall'utente
    const inputValues = getInputValues();
    console.log(inputValues)
    //deve fare i confronti 
    const goodNumbers = checkNumbers(randomNums, inputValues);
    
})

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
    for (let i = 0 ; i < inputValues.length; i++) {
        if (randomNums.includes(inputValues[i])) {
            goodNumbers.push(inputValues[i]);
        }
    }
    console.log(goodNumbers)
    return goodNumbers;
}
