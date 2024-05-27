// Funkcje strzałkowe
const arrow = (a, b) => {
    console.log(a + b);
}

arrow(3, 8);



// Wykorzystanie
function funkcja(anonymous) {
    anonymous();
}

funkcja(() => console.log('Funkcja!'));


// Symplifikacja funkcji
const dluga = () => {
    console.log('Dłuższa wersja');
}

const krotka = () => console.log('Krótsza wersja');

