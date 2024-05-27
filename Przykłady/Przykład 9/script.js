// Funkcja zwykła




// Definiowanie
function dodajLiczby(a, b) {
    return a + b;
}

const wynik = dodajLiczby(4, 7);
console.log(wynik);





// Domyślne wartości parametrów
function zwierze(imie = 'Ala', zwierze = 'kota') {
    console.log(`${imie} ma ${zwierze}`)
}

zwierze('Jan', 'psa');
zwierze();





// Funkcje jako argumenty
function obliczDolary(pln) {
    return pln/3
}

function obliczEuro(pln) {
    return pln/5
}

function wypłata(imie, wyplata, symbol, konwersja) {
    let wartosc = konwersja(wyplata)
    console.log(`${imie} zarabia ${wartosc}${symbol}`)
}

wypłata('Jan', 15000, '$', obliczDolary);
wypłata('Jan', 15000, '€', obliczEuro);
