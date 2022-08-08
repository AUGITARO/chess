const containerElem = document.querySelector('.container');

const renderChessBoard = (boardSize) => {
    for (let i = 0; i < (boardSize ** 2); i++) {
        const cardElem = document.createElement('div');
        cardElem.classList.add('card');
        containerElem.append(cardElem);
    }
}

renderChess(8);
