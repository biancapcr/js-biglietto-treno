// 1) Inserimento dati
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"), 10);

// 2) Calcolo prezzo base
const pricePerKm = 0.21;
let totalPrice = km * pricePerKm;

// 3) Calcolo sconto
let discount = 0;
if (age < 18){
  discount = 0.20;
} 
else if (age > 65){
  discount = 0.40;
}

// 4) Applicazione sconto
totalPrice = totalPrice - (totalPrice * discount);

// 5) Formattazione risultato
const formattedPrice = totalPrice.toFixed(2);