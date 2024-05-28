import { wyswietl } from '../../shared/helpers.js';

// URLe do podpunktów
// 1. GET https://jsonplaceholder.typicode.com/posts
// 2. GET https://jsonplaceholder.typicode.com/posts/23
// 3. POST https://jsonplaceholder.typicode.com/posts
// Jeżeli nie wiesz jak pracować z tym API, przejdź na podlinkowaną w treści zadania stronę na której można znaleźć przykłady zapytań z użycie fetch api

// W tym bloku powinien znajdować się kod do podpunktu 1.
async function runFirst() {
    wyswietl('10 Postów');
    // Poniżej umieść rozwiązanie
    // Wykorzystaj funkcję wyswietl aby dodawać tekst do pola na stronie
}

// W tym bloku powinien znajdować się kod do podpunktu 2.
async function runSecond() {
    wyswietl('23. Post');
    // Poniżej umieść rozwiązanie
    // Wykorzystaj funkcję wyswietl aby dodawać tekst do pola na stronie
}

// W tym bloku powinien znajdować się kod do podpunktu 3.
async function runThird() {
    wyswietl('Nowy Post');
    // Poniżej umieść rozwiązanie
    // Wykorzystaj funkcję wyswietl aby dodawać tekst do pola na stronie
}

document.getElementById('pierwszy').addEventListener('click', runFirst);
document.getElementById('drugi').addEventListener('click', runSecond);
document.getElementById('trzeci').addEventListener('click', runThird);

