//2.generare numeri casuali: da 1 a 50, ps non deve dare numeri doppi
/**
 * genera una cinquina di numeri compresi da 1 a 50
 * @returns restituisce un oggetto
 */
function getRandomNums() {
    const randomNums = new Set();
    while (randomNums.size != 5) {randomNums.add(Math.floor(Math.random() * 50) + 1)}
    return randomNums;
}
const randomNum = getRandomNums()
console.log(randomNum)

