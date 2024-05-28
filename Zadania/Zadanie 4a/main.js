import { pierwszyCiag, drugiCiag, trzeciCiag } from './data.js';
import { wyswietl } from '../../shared/helpers.js';

// W tym bloku kod powinien być oparty o async/await
async function runAsync() {
    wyswietl('Async/await');
    // Poniżej umieść rozwiązanie
    // Wykorzystaj funkcję wyswietl aby dodawać tekst do pola na stronie
    
}

// W tym bloku kod powinien być oparty o Promise
function runPromise() {
    wyswietl('Promise');
    // Poniżej umieść rozwiązanie
    // Wykorzystaj funkcję wyswietl aby dodawać tekst do pola na stronie

}

// Uruchomienie kodu
runAsync().then(() => runPromise())
