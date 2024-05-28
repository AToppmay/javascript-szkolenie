
// Weź wartość elementu o id="element" z obiektu 'document'
const element = document.getElementById('element');

// Stwórz teraz przycisk korzystając z funkcji 'document.createElement('button')
const button = document.createElement('button');

// Dodaj do tego przycisku innerText
button.innerText = 'Kliknij mnie';

// Dodaj przycisk do Elementu
element.appendChild(button);