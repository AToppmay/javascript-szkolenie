// PRzydatne wbudowane obiekty

//Object
const pies = {
    imie: 'Burek',
    rasa: 'Labrador',
};

// pies.imie;
// pies.rasa;
// ...

const klucze = Object.keys(pies); // ['imie', 'rasa']
klucze.forEach((klucz) => console.log(pies[klucz]));

const wartosci = Object.values(pies); // ['Burek', 'Labrador']
wartosci.forEach((wartosc) => console.log(wartosc));




// Math
console.log('PI: ', Math.PI);
console.log('Pierwiastek z 16: ', Math.sqrt(16));
console.log('Zaokrąglenie: ', Math.round(3.14));
console.log('Losowa liczba: ', Math.random());


// Date
const dataDzis = new Date();
const data = new Date('2020-03-13T09:30:00');

console.log(`Dzis mamy: ${dataDzis.getDate()}.${dataDzis.getMonth() + 1}.${dataDzis.getFullYear()}`);

