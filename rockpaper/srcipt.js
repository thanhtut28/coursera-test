const paper = 'paper';
const rock = 'rock';
const scissors = 'scissors';
let humanWinCount = 0;
let computerWinCount = 0;

const humanCell = document.getElementById('humanCell');
const computerCell = document.getElementById('computerCell');
const buttonGroup = document.getElementById('buttonGroup');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const fightButton = document.getElementById('fightButton');
const generate = document.getElementById('generate');
const winnerText = document.getElementById('winnerText');
const winnerMessage = document.getElementById('winnerMessage');
const endGame = document.getElementById('endGame');
const restart = document.getElementById('restart');

rockButton.addEventListener('click', addRockClass);
paperButton.addEventListener('click', addPaperClass);
scissorsButton.addEventListener('click', addScissorsClass);

let humanChoice = '';
let humanClass = '';
function addRockClass() {
    buttonGroup.classList.add('hide');
    humanCell.classList.add(rock);
    humanChoice = 'r';
    humanClass = rock;
}

function addPaperClass() {
    buttonGroup.classList.add('hide');
    humanCell.classList.add(paper);
    humanChoice = 'p';
    humanClass = paper;
}
function addScissorsClass() {
    buttonGroup.classList.add('hide');
    humanCell.classList.add(scissors);
    humanChoice = 's';
    humanClass = scissors;
}
// human choice ends

// computer choice start
generate.addEventListener('click', generateComputerChoioce);

let computerChances = [rock, paper, scissors];
let computerChoice = '';
let cmoputerTurn;
function generateComputerChoioce() {
    computerTurn = Math.floor(Math.random() * computerChances.length);
    computerChoiceFunction(computerTurn);
    computerCell.classList.add(computerChances[computerTurn]);
    generate.classList.add('hide');
}

function computerChoiceFunction(computerTurn) {
    switch (computerTurn) {
        case 0:
            computerChoice = 'r';
            break;
        case 1:
            computerChoice = 'p';
            break;
        case 2:
            computerChoice = 's';
            break;
    }
}
// computer choice ends

//calculate results
fightButton.addEventListener('click', checkForWinners);
function checkForWinners() {
    let choices = humanChoice + computerChoice;
    switch (choices) {
        case 'rr':
        case 'pp':
        case 'ss':
            console.log('draw');
            removeClasses();
            break;

        case 'rs':
        case 'pr':
        case 'sp':
            console.log('Human Wins');
            humanWinCount++;
            removeClasses();
            break;

        case 'rp':
        case 'ps':
        case 'sr':
            console.log('ComputerWins');
            computerWinCount++;
            removeClasses();
            break;

        default:
            console.log('pick all choices');
    }
    winningCounts();
}

function removeClasses() {
    humanCell.classList.remove(humanClass);
    computerCell.classList.remove(computerChances[computerTurn]);
    buttonGroup.classList.remove('hide');
    generate.classList.remove('hide');
    humanChoice = '';
    computerChoice = '';
}

winnerText.innerHTML = `Human : ${humanWinCount} Vs Computer : ${computerWinCount}`;

function winningCounts() {
    if (humanWinCount >= 3) {
        humanWinCount = 0;
        computerWinCount = 0;
        winnerHuman();
    } else if (computerWinCount >= 3) {
        humanWinCount = 0;
        computerWinCount = 0;
        winnerComputer();
    }
    winnerText.innerHTML = `Human : ${humanWinCount} Vs Computer : ${computerWinCount}`;
}

restart.addEventListener('click', restartNewGame);

function winnerHuman() {
    endGame.classList.add('show');
    winnerMessage.innerHTML = `Human Wins the game`;
}

function winnerComputer() {
    endGame.classList.add('show');
    winnerMessage.innerHTML = `Computer Wins the game`;
}

function restartNewGame() {
    endGame.classList.remove('show');
}
