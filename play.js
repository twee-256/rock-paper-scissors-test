console.log("Hello World!")

function getComputerChoice() {
    randInt = Math.floor(Math.random() * 3) + 1;
    if (randInt == 1) {
        console.log("Rock!")
        return "Rock!"
    } else if (randInt == 2) {
        console.log("Paper!")
        return "Paper!"
    } else {
        console.log("Scissors!")
        return "Scissors!"
    }
}
getComputerChoice();

function getHumanChoice() {
    choice = prompt("Make your choice: ");
    randChoice = choice.toLowerCase();
    if (randChoice == "rock") {
        console.log("Rock!")
        return "Rock!"
    } else if (randChoice == "paper") {
        console.log("Paper!")
        return "Paper!"
    } else if (randChoice == "scissors") {
        console.log("Scissors!")
        return "Scissors!"
    }
}
getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);