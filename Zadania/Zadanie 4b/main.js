import { wyswietl } from '../../shared/helpers.js';
import { funkcjaZBledem } from './data.js';

// Podpowiedź. Błąd jest obiektem typu error. Wiadomość o błędzie zawarta jest w polu `message`, np. error.message

// W tym bloku kod powinien być oparty o async/await
async function runAsync() {
    wyswietl('Async/await');
    // Poniżej umieść rozwiązanie
    // Wykorzystaj funkcję wyswietl aby dodawać tekst do pola na stronie
    await funkcjaZBledem();
    
}

// W tym bloku kod powinien być oparty o Promise
function runPromise() {
    wyswietl('Promise');
    // Poniżej umieść rozwiązanie
    // Wykorzystaj funkcję wyswietl aby dodawać tekst do pola na stronie
    funkcjaZBledem();
}

// Uruchomienie kodu
runAsync().then(() => runPromise())
