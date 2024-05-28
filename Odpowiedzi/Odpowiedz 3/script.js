// Przykład 1
const koło = {
    pi: Math.PI,
    obwod(r) {
        return this.pi * 2 * r
    },
    pole(r) {
        return this.pi * Math.pow(r, 2)
    },
}


// Przykład 2
const tabela = [{ imie: 'Jan', wiek: 65 }, { imie: 'Ala', wiek: 32 }, { imie: 'Piotr', wiek: 25 }]

tabela.forEach((osoba) => console.log(osoba.wiek));


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