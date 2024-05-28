// JSON
const json = '{"imie":"Jan","wiek":38}';
console.log(json);


// String => Obiekt
const obiekt = JSON.parse(json)
console.log(obiekt.imie);


// Obiekt => String
console.log(JSON.stringify(obiekt));