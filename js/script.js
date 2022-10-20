"use strict";

/*Il programma dovrà chiedere all'utente il numero di chilometri 
che vuole percorrere*/
const kmDistance = Number(prompt("Quanti kilometri dovrai percorrere?"));
document.getElementById("km-todo").innerHTML = `La distanza da percorrere sarà di ${kmDistance} km.`;

/*e l'età del passeggero.*/
const customerAge = Number(prompt("Inserisci la tua età:"));
document.getElementById("customer-age").innerHTML = `Età del passeggero: ${customerAge} anni.`;

/*Sulla base di queste informazioni dovrà calcolare il 
prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo).*/
const ticketPrice = ((0.21 * kmDistance));
document.getElementById("ticket-price").innerHTML =`Il prezzo totale della corsa è di ${ticketPrice.toFixed(2)} Euro.`;

/*va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/
let discountPrice;
if(customerAge < 1 || customerAge > 110){
    alert("Assicurati di inserire un'età compresa tra 1 e 110.");
    location.reload();
}else if (customerAge < 18){
    document.getElementById("age-discount").innerHTML = "Congratulazioni! Hai diritto ad uno sconto del 20% sul totale della corsa!";
    discountPrice = (ticketPrice) - (ticketPrice * 0.2);
    document.getElementById("new-discounted-price").innerHTML = `Il prezzo totale della corsa è di ${discountPrice.toFixed(2)} Euro.`;
} else if (customerAge >= 65){
    document.getElementById("age-discount").innerHTML = "Congratulazioni! Lei ha diritto ad uno sconto del 40% sul totale della corsa!";
    discountPrice = (ticketPrice) - (ticketPrice * 0.4);
    document.getElementById("new-discounted-price").innerHTML = `Il prezzo totale della corsa è di ${discountPrice.toFixed(2)} Euro.`;
}
