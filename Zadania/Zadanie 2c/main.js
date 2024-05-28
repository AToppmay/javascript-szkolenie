import { wyswietl } from '../../shared/helpers.js';

// Tutaj są podane ceny
const telewizory = [4500, 7899, 5000, 3999];
const telefony = [1699, 789, 5000, 6000, 1900];

// Do mapy dodaj największe ceny
const mapa = new Map();
mapa.set('telewizor', 0);
mapa.set('telefon', 0);


// Odpowiedź:
wyswietl(mapa.get('telewizor'));
wyswietl(mapa.get('telefon'));