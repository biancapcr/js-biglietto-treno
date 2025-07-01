# Biglietto del treno
===

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km),
va applicato uno sconto del 20% per i minorenni,
va applicato uno sconto del 40% per gli over 65.,
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.,

Realizzate prima un file README.md in cui mettere il testo dell'esercizio e scomponente il problema in sotto problemi. 
Numero minimo di push: 5

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80,
100km, 70 anni => prezzo corretto: €12.60

===

## Scomposizione in sotto-problemi

===

Start 

1. Inserimento dati

- Digitare i chilometri da percorrere;

- Digitare l'età del passeggero.

2. Calcolo prezzo base

- Moltiplicare il numero di chilometri per 0,21.

3. Calcolo sconto

? Se età < 18 → sconto 20%;

? Se età ≥ 65 → sconto 40%;

    :Altrimenti → nessuno sconto

4. Applicare sconto

- Sottrarre al prezzo base la percentuale di sconto calcolata.

5. Formattazione del risultato

- Arrotondare il prezzo finale ad un massimo di due decimali;

- Preparare una stringa con il prezzo numerico + €

6. Output risultato

- Stampare stringa formattata.

8. Verifica

- Confrontare i risultati ottenuti con gli esempi (100 km 10 anni e 100 km 70 anni).

End