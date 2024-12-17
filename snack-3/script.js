const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

const numeriIncrementati = numbers.map(numero => numero + 1);


console.log("Array originale:", numbers);
console.log("Array incrementato:", numeriIncrementati);

// Risultato: [3, 9, 5, 8, 3, 88]