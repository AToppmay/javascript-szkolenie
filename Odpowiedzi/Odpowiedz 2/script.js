// Przykład 1
const numery = [637, 32, 89, 56, 403, 1234];

const parzyste = numery.filter((el) => el % 2 === 0);
console.log(parzyste);


// Przykład 2
const imiona = ['Jan Kowalski', 'Ola Drozd', 'Ala Nowak', 'Dawid Nowak', 'Karol Drozd'];

const emaile = imiona.map((el) => {
    const imie = el.replace(' ', '.');
    return `${imie}@gmail.com`;
});

console.log(emaile);


// Przykład 3
const telewizory = [4500, 7899, 5000, 3999];
const telefony = [1699, 789, 5000, 6000, 1900];

const mapa = new Map();
mapa.set('telewizor', 0);
mapa.set('telefon', 0);

telewizory.forEach((tv) => {
    if (tv > mapa.get('telewizor')) {
        mapa.set('telewizor', tv);
    }
})
telefony.forEach((t) => {
    if (t > mapa.get('telefon')) {
        mapa.set('telefon', t);
    }
})


const drogiTV = mapa.get('telewizor');
const drogiTelefon = mapa.get('telefon');
console.log('Najdroższy TV: ', drogiTV);
console.log('Najdroższy telefon: ', drogiTelefon);
