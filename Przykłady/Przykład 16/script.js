// Kolekcje

// Mapy
const map = new Map();

map.set('Julia', 1);
map.set('Marek', 2);
map.set('Janusz', 3);
console.log(map);


// Set
map.set('Julia', 300);
console.log(map);


// Delete
map.delete('Julia');
console.log(map);


// Has
console.log(map.has('Marek'));




// Set
const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(2);
console.log(set);

const tablica = [1, 2, 3, 2];
console.log(tablica);

// Has
console.log('Has 2?: ', set.has(2));

// Delete
set.delete(1);
console.log(set);