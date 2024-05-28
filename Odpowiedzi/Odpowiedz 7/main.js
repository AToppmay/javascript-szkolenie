import { wyswietl } from '../../shared/helpers.js';

// URLe do podpunktów
// 1. GET https://jsonplaceholder.typicode.com/posts
// 2. GET https://jsonplaceholder.typicode.com/posts/23
// 3. POST https://jsonplaceholder.typicode.com/posts


// W tym bloku powinien znajdować się kod do podpunktu 1.
async function runFirst() {
    wyswietl('10 Postów');
    // Poniżej umieść rozwiązanie
    // Wykorzystaj funkcję wyswietl aby dodawać tekst do pola na stronie
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    data.slice(0, 10).forEach(post => {
        wyswietl(post.id);
        wyswietl(post.title);
    })
}

// W tym bloku powinien znajdować się kod do podpunktu 2.
async function runSecond() {
    wyswietl('23. Post');
    // Poniżej umieść rozwiązanie
    // Wykorzystaj funkcję wyswietl aby dodawać tekst do pola na stronie
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/23')
    const post = await res.json();
    wyswietl(post.title);
    wyswietl(post.body);
}

// W tym bloku powinien znajdować się kod do podpunktu 3.
async function runThird() {
    wyswietl('Nowy Post');
    // Poniżej umieść rozwiązanie
    // Wykorzystaj funkcję wyswietl aby dodawać tekst do pola na stronie
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
            title: "SAP JS Course",
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const post = await res.json();
    wyswietl(post.id);
    wyswietl(post.title);
}

document.getElementById('pierwszy').addEventListener('click', runFirst);
document.getElementById('drugi').addEventListener('click', runSecond);
document.getElementById('trzeci').addEventListener('click', runThird);

