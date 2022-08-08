const containerElem = document.querySelector('.container');

const renderChess = (boardSize) => {
    for (let i = 0; i < boardSize * boardSize; i++) {
        const cardElem = document.createElement("div");
        cardElem.classList.add('card');
        containerElem.append(cardElem);
    }
}

renderChess(8);
