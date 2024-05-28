export function wyswietl(...args) {
    const resultsElement = document.querySelector('#wyniki');
    args.forEach(arg => {
        const result = `${typeof arg}: ${JSON.stringify(arg, null, 2)}\n`;
        resultsElement.append(result);
    })
}

export function wait(fn, timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fn());
        }, timeout);
    })
}