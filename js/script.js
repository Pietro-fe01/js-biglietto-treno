"use strict";

/*Il programma dovrà chiedere all'utente il numero di chilometri 
che vuole percorrere*/
const kmDistance = Number(prompt("Quanti kilometri dovrai percorrere?"));
document.getElementById("km-todo").innerHTML = `La distanza da percorrere sarà di ${kmDistance} km.`;

/*e l'età del passeggero.*/
const customerAge = Number(prompt("Inserisci la tua età:"));
document.getElementById("customer-age").innerHTML = `Età del passeggero: ${customerAge} anni.`;


