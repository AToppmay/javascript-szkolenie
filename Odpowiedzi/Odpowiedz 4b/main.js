import { wyswietl } from '../../shared/helpers.js';
import { funkcjaZBledem } from '../../Zadania/Zadanie 4b/data.js';

// Podpowiedź. Błąd jest obiektem typu error. Wiadomość o błędzie zawarta jest w polu `message`, np. e.message

// W tym bloku kod powinien być oparty o async/await
async function runAsync() {
    wyswietl('Async/await');
    // Dla składni async/await, standardowym rozwiązaniem obsługi błędów jest użycie try/catch
    try {
        await funkcjaZBledem();
    } catch (e) {
        wyswietl(e.message);
    }
}

// W tym bloku kod powinien być oparty o Promise
function runPromise() {
    wyswietl('Promise');
    // Poniżej umieść rozwiązanie
    // Wykorzystaj funkcję wyswietl aby dodawać tekst do pola na stronie
    // Dla składni Promise należy uzyć operatora catch, aby przechwycic błędy przetwarzania danej Promise
    funkcjaZBledem().catch((e) => {
        wyswietl(e.message);
    })
}

// Uruchomienie kodu
runAsync().then(() => runPromise())
