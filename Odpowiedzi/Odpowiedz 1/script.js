// Przykład A
// Podpowiedź: domena znajduje się pomiędzy znakiem "@", a "."

const email1 = 'jankowalski@gmail.com';
const email2 = 'jankowalski@all-for-one.com';

function domenaEmailu(e) {
    const start = e.indexOf('@');
    const end = e.indexOf('.');
    return e.slice(start+1, end)
}

console.log(domenaEmailu(email1));
console.log(domenaEmailu(email2));


// Przykład B
function odwrocLitery(tekst) {
    let odpowiedz = '';
    for(let i = 0; i < tekst.length; i++) {
        if(tekst[i] === tekst[i].toUpperCase()) {
            odpowiedz = odpowiedz.concat(tekst[i].toLowerCase());
        } else {
            odpowiedz = odpowiedz.concat(tekst[i].toUpperCase());
        }
    }
    return odpowiedz
}

console.log('Przykład 2.1 zdany: ', odwrocLitery('JaN kOwAlSkI') === 'jAn KoWaLsKi');
console.log('Przykład 2.2 zdany: ', odwrocLitery('lorem IPSUM') === 'LOREM ipsum');