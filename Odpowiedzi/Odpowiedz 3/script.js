// Przykład 1
const koło = {
    pi: Math.PI,
    obwod(r) {
        return this.pi * 2 * r
    },
    pole() {
        return this.pi * Math.pow(r, 2)
    },
}


// Przykład 2
const tabela = [{ imie: 'Jan', wiek: 65 }, { imie: 'Ala', wiek: 32 }, { imie: 'Piotr', wiek: 25 }]

const lata = tabela.map((osoba) => osoba.wiek);
let srednia = 0;
lata.forEach((wiek) => srednia = srednia + wiek);
srednia = srednia / lata.length;

console.log('Średnia: ', srednia);


// Przykład 3
const postacie = [{
    imie: 'Jan',
    wiek: 65,
    telefon: 795700165,
}, {
    imie: 'Ala',
    wiek: 27,
    zwierze: 'Kot', 
}, {
    imie: 'Burek',
    wiek: 7,
    rasa: 'Labrador',
}]

postacie.forEach((postac) => {
    Object.keys(postac).forEach((klucz) => {
        console.log(`${klucz}: ${postac[klucz]}`)
    });
});