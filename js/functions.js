//2.generare numeri casuali: da 1 a 50, ps non deve dare numeri doppi
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

//3.timer di 30 secondi per i numeri da visualizzare
const timer = setTimeout(function(){
    //da rivedere le istruzioni da eseguire

}, 3000)

//Inseriamo un nuovo elemento html per ogni elemento dell'oggetto

function logRandomNums(obj) {
    
}

randomNums.forEach(randomNum => {
    const numbersListEl = document.getElementById('numbers-list');
    numbersListEl.insertAdjacentHTML('beforeend', `<li>${randomNum}</li>`);
    console.log(randomNum);
});