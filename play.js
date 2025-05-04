
function getComputerChoice() {
    randInt = Math.floor(Math.random() * 3) + 1;
    if (randInt == 1) {
        return "Rock"
    } else if (randInt == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let randChoice = prompt("Make your choice: ").toLowerCase();
    if (randChoice == "rock") {
        return "Rock"
    } else if (randChoice == "paper") {
        return "Paper"
    } else if (randChoice == "scissors") {
        return "Scissors"
    }
}

let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

let scoreCard = document.querySelector('#score');
let outputCard = document.querySelector('#outputMsg');
let selection = document.querySelector('#selection');
let computerSelection = getComputerChoice();

let restartCard = document.querySelector('#restart');
restartCard.style.display = "none";

let round = document.createElement("p");
round.classList.add("round");
round.textContent = "Round: " + gameCount;

let hScore = document.createElement("p");
hScore.classList.add("hScore");
hScore.textContent = "Your score: " + humanScore;

let cScore = document.createElement("p");
cScore.classList.add("cScore");
cScore.textContent = "Opponent's score: " + computerScore;

let output = document.createElement("p");
output.classList.add("output");

scoreCard.appendChild(round);
scoreCard.appendChild(hScore);
scoreCard.appendChild(cScore);
outputCard.appendChild(output);

selection.addEventListener('click', (event) => {
    let choice = event.target;
    let choiceId = choice.id;

    switch (choiceId) {
        case 'rock':
            playRound(choiceId, computerSelection);
            break;
        case 'scissors':
            playRound(choiceId, computerSelection);
            break;
        case 'paper':
            playRound(choiceId, computerSelection);
            break;
    }
})

let play = document.querySelector('#play');
play.addEventListener('click', () => {
    restart();
});

// Functions...

function playRound(humanChoice, computerChoice) {
    let regRock = /rock/i;
    if (humanChoice.match(regRock)) {
        if (computerChoice == "Rock") {
            output.textContent = "It's a Tie!";
            updateScore();
        } else if (computerChoice == "Paper") {
            output.textContent = "You lose! Paper beats Rock.";
            computerScore += 1;
            updateScore();
        } else {
            output.textContent = "You win! Rock beats Scissors.";
            humanScore += 1;
            updateScore();
        }
    }

    let regPaper = /paper/i;
    if (humanChoice.match(regPaper)) {
        if (computerChoice == "Paper") {
            output.textContent = "It's a Tie!";
            updateScore();
        } else if (computerChoice == "Rock") {
            humanScore += 1;
            output.textContent = "You win! Paper covers Rock.";
            updateScore();
        } else {
            computerScore += 1;
            output.textContent = "You lose! Scissors cuts Paper.";
            updateScore();
        }
    }

    let regScissors = /scissors/i;
    if (humanChoice.match(regScissors)) {
        if (computerChoice == "Scissors") {
            output.textContent = "It's a Tie!";
            updateScore();
        } else if (computerChoice == "Paper") {
            humanScore += 1;
            output.textContent = "You win! Scissors cut Paper.";
            updateScore();
        } else {
            computerScore += 1;
            output.textContent = "You lose! Rock beats Scissors.";
            updateScore();
        }
    }

    gameCount += 1;
    round.textContent = "Round: " + gameCount;

    outputMsg();
}

function outputMsg() {
    if (humanScore == 5 || computerScore == 5) {
        selection.style.display = "none";
        scoreCard.style.display = "none";
        let message = humanScore == 5 ? "You Win with 5 points!" : "Your opponent wins with 5 points, better luck next time!";
        output.textContent = message;
        restartCard.style.display = "block";
    }
}

function updateScore() {
    hScore.textContent = "Your score: " + humanScore;
    cScore.textContent = "Opponent's score: " + computerScore;
}

function restart() {
    location.reload();
    restartCard.style.display = "none";
}