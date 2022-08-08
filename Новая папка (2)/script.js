const containerElem = document.querySelector('.container');

const renderChekers = (a) => {
    for (let i = 0; i < a * a; i++) {
        const cardElem = document.createElement("div");
        cardElem.classList.add('card');
        containerElem.append(cardElem);
    }
}

renderChekers(10);