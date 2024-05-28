// Globalne obiekty


// Window
console.log(window);


// Console
window.console.log('Tekst');


// Historia
console.log(history);

const wstecz = document.getElementById('wstecz');
wstecz.addEventListener('click', (e) => {
    history.back();
});

const naprzod = document.getElementById('naprzod');
naprzod.addEventListener('click', (e) => {
    history.forward();
});


// setTimeout
// const timeoutId = window.setTimeout(() => alert('Mineły 3s!'), 3000);
// window.clearTimeout(timeoutId);

// setInterval
// const interId = window.setInterval(() => alert('Mineły 3s!'), 3000);
// window.clearInterval(interId);