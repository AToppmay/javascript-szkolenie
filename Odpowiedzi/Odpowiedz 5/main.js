const headingContent = "SAP Javascript Course";
const linksContent = ["https://developer.mozilla.org/en-US/docs/Web/JavaScript", "https://www.all-for-one.pl/pl/", "https://sapui5.hana.ondemand.com/"]
const listContent = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
const buttonsContent = ["SAP", "Javascript", "Course"]

function runValidation() {
    const heading = document.querySelector("h1#main-heading");
    const paragraph = document.querySelector("p.paragraf");
    const numberedList = document.querySelector("ol.lista-numerowana");
    const linksList = document.querySelector("ul#pomocne-linki");
    const buttons = document.querySelectorAll('button');

    const hasValidHeading = heading?.innerText.includes(headingContent);
    const hasValidList = numberedList?.querySelectorAll('li').length === 5
        ? Array.from(numberedList?.querySelectorAll('li') ?? []).every(item => listContent.includes(item.innerText))
        : false;
    const hasValidLinkList = linksList?.querySelectorAll('li a').length === 3
        ? Array.from(linksList?.querySelectorAll('li a') ?? []).every(item => linksContent.includes(item.href))
        : false;
    const hasValidButtons = buttons.length === 3
        ? Array.from(buttons).every(button => buttonsContent.includes(button.innerText))
        : false;
    
    let el = document.createElement('div');
    el.style.padding = '8px 16px';
    el.style.fontSize = '1.5rem';

    if (hasValidHeading && paragraph && hasValidList && hasValidLinkList && hasValidButtons) {
        el.style.backgroundColor = "rgb(74 222 128)";
        el.innerText = "Wszystkie elementy są zgodne. Zadanie zaliczone!"
    } else {
        el.style.backgroundColor = "rgb(239 68 68)";
        el.innerText = "Elementy nie są poprawne. Upewnij się, że używasz odpowiednich elementów, atrybutów (id, class) oraz treści."
    }
    document.body.append(el);
}

runValidation();
