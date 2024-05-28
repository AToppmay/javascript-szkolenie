// Funkcje asynchroniczne


// Obietnice
const obietnica = new Promise((resolve, reject) => {
    if (true) {
        resolve('Sukces');
    } else {
        reject('Porażka');
    }
});

obietnica.then((msg) => console.log(msg))
    .catch((msg) => console.log(msg));




// Async-Await
/*

obietnica.then(() => {
  obietnica2.then(() => {
    obietnica3...
  }).catch(...)
}).catch(...)
...

*/

async function poczekajNaDane() {
    const data = await obietnica
    console.log('Dane z pierwszej obietnicy: ', data);
    const data2 = await obietnica
    console.log('Dane z drugiej obietnicy: ', data2);
}

poczekajNaDane();