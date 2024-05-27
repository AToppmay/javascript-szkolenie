// Łańcuchy znaków (String)
const tekst = 'Ala ma 300 kotów!';

const tekst2 = "Kot ma 1 Alę?";


// Łączenie tekstów
const dodaneTeksty = tekst + 'test' + tekst2;

console.log(dodaneTeksty);

// Łączenie tekstów z innymi typami
const dodanieNumeru = 'Ala ma ' + 30 + ' lat';

console.log(dodanieNumeru);

// Wyciąganie pojedyńczych znaków
const tekst3 = 'Lorem ipsum';
console.log('Pierwszy znak: ', tekst3[0]);
console.log('Drugi znak: ', tekst3[1]);
console.log('Trzeci znak: ', tekst3[2]);

console.log('Długość tekstu: ', tekst3.length);

// Popularne metody
const test = 'Jan Kowalski';

console.log('toUpperCase: ', test.toUpperCase());
console.log('Wartość: ', test);

console.log('indexOf: ', test.indexOf('K'));

console.log('Slice: ', test.slice(0, 4));
console.log('Substr: ', test.substring(0, 4));

console.log('Replace: ', test.replace('Jan', 'Adam'));

// Szablony
const wiek = 60;
const imie = 'Jan';
const zawod = 'informatykiem';

const bezSzablonu = imie + ' jest ' + zawod + ' i ma ' + wiek + ' lat';
console.log('Tekst bez szablonu: ', bezSzablonu);

const szablon = `${imie} jest ${zawod} i ma ${wiek} lat`;
console.log('Tekst z szablonu: ', szablon);

// Wyrażenia regularne
const email = 'jankowalski@gmail.com';
const nieEmail = 'jankowalski#gmail.com';

const struktura = new RegExp('.*@gmail.com');

console.log(struktura.test(email));
console.log(struktura.test(nieEmail));

const regexp = new RegExp('.[A-Z][0-9]');
console.log(regexp.test('$A9'));

const regexp2 = new RegExp('[A-Z]+[0-9]*');
console.log(regexp2.test('A99'));