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
    showWinningCounts();
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

function showWinningCounts() {
    if (humanWinCount >= 3 || computerWinCount >= 3) {
        winner();
    }
    winnerText.innerHTML = `Human : ${humanWinCount} Vs Computer : ${computerWinCount}`;
}
// declare winner with endgame message box
function winner() {
    endGame.classList.add('show');
    winnerMessage.innerHTML =
        humanWinCount >= 3 ? `Humans Wins the game` : `Computer Wins the game`;
    humanWinCount = 0;
    computerWinCount = 0;
}

restart.addEventListener('click', restartNewGame); //remove endgame messagebox

function restartNewGame() {
    endGame.classList.remove('show');
}
