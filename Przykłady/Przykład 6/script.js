// Wartości logiczne (Boolean)

const prawda = true;
const fałsz = false;

if (prawda) {
    console.log('Ten kod się wykonuje!');
}

if (fałsz) {
    console.log('A ten nie!');
}

// Operatory logiczne

// AND
console.log(true && true);
console.log(false && true);

// OR
console.log(true || true);
console.log(true || false);
console.log(false || false);

// NOT
console.log(!true);



// Wartości logiczne innych typów

// False = '', undefined, null, numery <= 0
// True = każdy nie pusty string, numery > 0

if ('') {
    console.log('Napis jest pusty!');
}