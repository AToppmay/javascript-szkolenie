// Eventy
const przycisk = document.getElementById('przycisk');


// On Click
przycisk.addEventListener('click', (event) => console.log(event));


// On Mouse Over
const element = document.getElementById('element');
element.addEventListener('mouseover', (event) => console.log(event));


// On Key Down
const input = document.getElementById('input');
input.addEventListener('keydown', (event) => {
    console.log(event)
});
