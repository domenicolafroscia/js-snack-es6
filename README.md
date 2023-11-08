### ESERCIZI 
**Snack 1**
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

**Snack 2**
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

**Snack Bonus**
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.

Es:
const numbersArray = [23, 14, 6, 8, 10];
const newArray = getSubArray(numbersArray, 1, 3) ---> [14, 6, 8]


### SVOLGIMENTO 

**Snack 1**
1. Creare un array di oggetti dove ogni oggetto descrive il nome e il peso di una bici da corsa;
2. Con il destructuring prendere dall'array la bici con minor peso
3. Stampare il nome della bici con minor peso

**Snack 2**
1. Creare un array di oggetti dove ogni oggetto descrive nome, punti fatti e falli subiti di una squadra di calcio
2. L'unica proprietà da compilare è il nome, i punti e i falli vanno settati a 0
3. Creare una funzione di numeri random e inserirli al posto degli 0 nelle proprietà dei punti e dei falli
4. Creare un nuovo array con la destrutturazione dove però all'interno vanno inseriti solo nomi e falli subiti.
5. Stampare in console il tutto