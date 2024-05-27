//Metody iterujące po tablicach
const tablica2 = ['Adam', 'Jan', 'Karol'];

for(let i = 0; i < tablica2.length; i++) {
    console.log(`Element nr${i}: `, tablica2[i]);
}

// For Each
tablica2.forEach((element) => console.log('Element forEach: ', element));

// Map
const nowaTablica = tablica2.map((element) => element.toUpperCase())
console.log('Nowa tablica: ', nowaTablica);

// Filter
const filtrowana = tablica2.filter((element) => element !== 'Adam');
console.log('Wyfiltrowana tabela: ', filtrowana);

// Some
const hasJan = tablica2.some((element) => element === 'Jan');
console.log(hasJan);

// All
const allJan = tablica2.every((element) => element === 'Jan');
console.log(allJan);