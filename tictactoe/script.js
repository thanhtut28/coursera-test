const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.querySelector(
    '[data-winning-message-text]'
);
const restartButton = document.getElementById('restartButton');
const xbutton = document.getElementById('xButton');
const obutton = document.getElementById('oButton');
const choiceElement = document.getElementById('choice');
let circleTurn;

xbutton.addEventListener('click', choicex);
obutton.addEventListener('click', choiceo);
//choice listener
function choicex() {
    circleTurn = false;

    choiceElement.classList.add('hide');
    startGame();
}

function choiceo() {
    circleTurn = true;

    choiceElement.classList.add('hide');
    startGame();
}

restartButton.addEventListener('click', newGame); //restart listener

function newGame() {
    choiceElement.classList.remove('hide');
    winningMessageElement.classList.remove('show');
}

function startGame() {
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.addEventListener('click', handleClick);
    });
    setBoardHoverClass();
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);

    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    }

    // check for win
    // check for draw
    else {
        swapTurn(); // switch turns
        setBoardHoverClass();
    }

    undoCell = cell;
    undoClass = currentClass;
}

let undoCell;
let undoClass;

//undo listener   <--
board.addEventListener('dblclick', () => {
    undoCell.classList.remove(undoClass);
    swapTurn();
    setBoardHoverClass();
});

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = `${
            circleTurn ? "O's" : "X's"
        } Wins!`;
    }
    winningMessageElement.classList.add('show');
}

function isDraw() {
    return [...cellElements].every(cell => {
        return (
            cell.classList.contains(X_CLASS) ||
            cell.classList.contains(CIRCLE_CLASS)
        );
    });
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurn() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}
