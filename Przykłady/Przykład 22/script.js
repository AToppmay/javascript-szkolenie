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


// Getter i Setter
const obiektGetSet = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        const data = value.split(' ');
        this.firstName = data[0];
        this.lastName = data[1];
    }
};

obiektGetSet.firstName = 'Alan';

obiektGetSet.fullName = 'Karol Nowak'
console.log(obiektGetSet);