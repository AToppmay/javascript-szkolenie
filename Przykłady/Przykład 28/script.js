// Manipulacja DOMu

// Id
const pierwszyElement = document.getElementById('pierwszy');
console.log(pierwszyElement);

// Class
const elementy = document.getElementsByClassName('opis');
console.log(elementy);

// Tag
const tags = document.getElementsByTagName('div');
console.log(tags);



// Dodanie tekstu
// const pusty = document.getElementById('pusty');
// pusty.innerText = 'Już nie pusty element';

// Zmiana atrybutu
// const link = document.getElementById('link');
// console.log('Link: ', link.getAttribute('href'));

// link.setAttribute('href', 'https://www.youtube.com/');



// Tworzenie nowych elementów
// const nowyElement = document.createElement('div');
// nowyElement.innerHTML = '- Dziecko pustego elementu'
// pusty.appendChild(nowyElement);