// Metody tablic
const tablica = ['A', 'B', 'C', 'D'];


// IndexOf
console.log('IndexOf: ', tablica.indexOf('B'));


// Concat
console.log('Concat: ', tablica.concat(['F']));


// Join
console.log('Join: ', tablica.join('-'));

//Brak zmian po powyższych metodach
console.log(tablica)



// Metody zmieniające wartość tablicy
// Wyjmowanie wartości
const elementOstatni = tablica.pop();
console.log('Wartość ostatnia: ', elementOstatni);
console.log('Tablica: ', tablica);

const elementPierwszy = tablica.shift();
console.log('Wartość pierwsza: ', elementPierwszy);
console.log('Tablica: ', tablica);

//Dodawanie wartości
tablica.push('D');
console.log('Tablica po push: ', tablica);

tablica.unshift('A');
console.log('Tablica po unshift: ', tablica);