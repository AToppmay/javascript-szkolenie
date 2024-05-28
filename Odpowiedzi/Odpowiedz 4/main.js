import { pierwszyCiag, drugiCiag, trzeciCiag } from '../../Zadania/Zadanie 4/data.js';
import { wyswietl } from '../../shared/helpers.js';


// W tym bloku kod powinien być oparty o async/await
async function runAsync() {
    wyswietl('Async/await');
    // Uzywam pomocniczej zmiennej do zapisu rezultatu funkcji asynchronicznej
    let slowo;

    // Każde wywołanie musi byc poprzedzone słowem kluczowym await, aby poczekać na rezultat funkcji
    slowo = await pierwszyCiag();
    console.log(slowo)
    wyswietl(slowo);
    slowo = await drugiCiag();
    wyswietl(slowo);
    slowo = await trzeciCiag();
    wyswietl(slowo);
}

// W tym bloku kod powinien być oparty o Promise
function runPromise() {
    wyswietl('Promise');
    // Zaczynam od wywołania pierwszej funkcji
    pierwszyCiag()
    // Następnie dodaje operator then, aby pracować na rezultacie promise
        .then((slowo) => {
            wyswietl(slowo);
    // na koniec funkcji w then zwracam kolejne wywolanie, czyli promise
    // dzięki temu, mogę stworzyć łańcuch then na jednym poziomie
            return drugiCiag();
        })
        .then((slowo) => {
            wyswietl(slowo);
            return trzeciCiag();
        })
        .then((slowo) => {
            wyswietl(slowo);
        })
}

// Dopuszczalne rozwiązanie runPromise
// function runPromise() {
//     wyswietl('Promise');
//     // Zaczynam od wywołania pierwszej funkcji
//     pierwszyCiag()
//     // Następnie dodaje operator then, aby pracować na rezultacie promise
//         .then((slowo) => {
//             wyswietl(slowo);
//             // W tym rozwiązaniu promise jest wywoływany coraz głębiej
//             // W tym przypadku rozwiązanie zadziała, ale nie będzie to preferowany kod
//             drugiCiag().then((slowo2) => {
//                 wyswietl(slowo2);

//                 trzeciCiag().then((slowo3) => {
//                     wyswietl(slowo3)
//                 })
//             });
//         })
// }

// Uruchomienie kodu
runAsync().then(() => runPromise())
