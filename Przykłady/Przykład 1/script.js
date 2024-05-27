// Zakres zmiennych
const higherScope = 0;

if (true) {
    const lowerScope = 0;
    console.log('Wartość zmiennej higherScope: ', higherScope);
    console.log('Wartość zmiennej lowerScope: ', lowerScope);
}

console.log('Wartość zmiennej higherScope: ', higherScope);
console.log('Wartość zmiennej lowerScope: ', lowerScope);

if (true) {
    const lowerScope = 0;
    console.log('Wartość zmiennej lowerScope: ', lowerScope);
}