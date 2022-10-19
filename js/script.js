// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// PROCEDIMENTO
// [*] Creare l'array con i numeri casuali
// [*] Inserirli in un timer di 30 secondi
// [*] Alla fine del timer un ciclo fa partire 5 prompt all'utente, per ogni prompt dell'utente il numero viene inserito in un array
// [] Paragonare l'array dei numeri iniziali con quello dell'utente

let numbersArray = [];
const sameNumbers = [];
const casualNumbers = getRndInteger(1, 100);
console.log(casualNumbers);
const numbersTitle = document.getElementById("title");

const startButton = document.querySelector(".start");
startButton.addEventListener("click", timerStart)

let timeOut = false;
let timeoutStart;
// FUNZIONI
/**
 * Description: Funzione per creare numeri casuali non duplicati
 * @param {any} min
 * @param {any} max
 * @returns {any} 
 */
function getRndInteger(min, max) {
    while (numbersArray.length < 5) {
        const random = Math.floor(Math.random() * (max - min + 1) ) + min;
        if (!numbersArray.includes(random)) {
            numbersArray.push(random); 
        }
    }
    return numbersArray;
}

/**
 * Description: funzione per il timeout di 30 secondi
 */
function timerStart() {
    numbersTitle.innerHTML = casualNumbers;
    const userArray = [];
    timeoutStart = setTimeout(function() {
        numbersTitle.innerHTML = "";
        for (let i = 0; i < 5; i++) {
            userNumbers = parseInt(prompt("Inserisci i numeri che hai visto"));
            userArray.push(userNumbers);
            if (numbersArray.includes(userNumbers)) {
                sameNumbers.push(userNumbers);
                console.log(sameNumbers);
            }
        }
        alert(`Hai indovinato ${sameNumbers.length} numeri!, ${sameNumbers}`)
    }, 1000);
}

// function timerStop() {
//     if (timeOut = true) {
//         clearTimeout(timeoutStart);
//     }
// }