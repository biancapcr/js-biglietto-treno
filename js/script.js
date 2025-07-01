// 1) Inserimento dati
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"), 10);

// 2) Calcolo prezzo base
const pricePerKm = 0.21;
let totalPrice = km * pricePerKm;