const containerElem = document.querySelector('.container');

const renderChessBoard = (boardSize) => {
    containerElem.style.width = boardSize * 100 + 2 + 'px';
    containerElem.style.height = boardSize * 100 + 2 +'px';
    for (let i = 0; i < (boardSize ** 2); i++) {
        const cardElem = document.createElement('div');
        cardElem.classList.add('card');
        containerElem.append(cardElem);
    }
}

renderChess(8);
