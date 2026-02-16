//generare numeri casuali: da 1 a 50, ps non deve dare numeri doppi
/**
 * genera una cinquina di numeri compresi da 1 a 50
 * @returns restituisce un oggetto
 */
function getRandomNums() {
    const randomNums = new Set();
    while (randomNums.size != 5) {randomNums.add(Math.floor(Math.random() * 50) + 1)};
    return randomNums;
}
const randomNums = getRandomNums()
console.log(randomNums)

const numbersListEl = document.getElementById('numbers-list');
const answersFormEl = document.getElementById('answers-form')

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
const inputEl = document.querySelectorAll('input');
const buttonEl = document.querySelector('button');
const inputValues = [];

buttonEl.addEventListener('click', function(e){
    e.preventDefault();
    
    inputEl.forEach(input => {
        inputValues.push(input.value);
        console.log(input.value);
    })
})


console.log(inputValues);

