// Pętle i Switch

// Pętla For
console.log('Początek pętli');
for(let i = 0; i < 5; i++) {
    console.log('Krok For: ', i);
}
console.log('Koniec pętli');



const tekst = 'Jan';
for(let i = 0; i < tekst.length; i++) {
    console.log(tekst[i]);
}



// Pętla While
let i = 0;
while(i < 5) {
    console.log('Krok While: ', i);
    i++;
}


// Switch
const imie = 'Ala';
switch(imie) {
    case 'Ala':
        console.log('Ma kota');
        break;
    case 'Jan':
        console.log('Ma psa');
        break;
    default:
        console.log('Nie ma zwierzaka');
}