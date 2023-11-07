const board = document.getElementById('board');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

function handleCellClick(index) {
    if (gameBoard[index] === '' && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        renderBoard();
        if (!checkWinner() && !gameBoard.includes('')) {
            alert('Ничья!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`Игрок ${gameBoard[a]} победил!`);
            return true;
        }
    }

    return false;
}

function renderBoard() {
    board.innerHTML = '';
    gameBoard.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell;
        cellElement.addEventListener('click', () => handleCellClick(index));
        board.appendChild(cellElement);
    });
}

renderBoard();