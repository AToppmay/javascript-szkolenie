// Obiekty

// Obiekt: TELEFON
// Własności:
// - kolor
// - cena
// - rok produkcji

const tablica = [1, 2];
tablica.length;

// Funkcje:
// - dzwoń
// - zrób zdjęcie
// - włącz latarkę

tablica.includes();


// Tworzenie obiektów - własności
const obiekt = {
    kolor: 'czerwony',
    cena: 2999.99,
}


// Tworzenie obiektów - metody
const obiektMetody = {
    kolor: 'czerwony',
    cena: 2999.99,
    dzwon() {
        console.log('Telefon dzwoni!');
    },
}

obiektMetody.dzwon();


// This
const obiektThis = {
    kolor: 'czerwony',
    cena: 2999.99,
    dzwon() {
        let jaki = this.kolor;
        console.log(`${jaki} telefon dzwoni!`);
    },
}

obiektThis.dzwon();