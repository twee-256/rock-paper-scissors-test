console.log("Hello World!")

function getComputerChoice() {
    randInt = Math.floor(Math.random() * 3) + 1;
    if (randInt == 1) {
        console.log("Rock")
        return "Rock"
    } else if (randInt == 2) {
        console.log("Paper")
        return "Paper"
    } else {
        console.log("Scissors")
        return "Scissors"
    }
}

function getHumanChoice() {
    let randChoice = prompt("Make your choice: ").toLowerCase();
    if (randChoice == "rock") {
        console.log("Rock")
        return "Rock"
    } else if (randChoice == "paper") {
        console.log("Paper")
        return "Paper"
    } else if (randChoice == "scissors") {
        console.log("Scissors")
        return "Scissors"
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    let regRock = /rock/i;
    if (humanChoice.match(regRock)) {
        if (computerChoice == "Rock") {
            console.log("Tie!")
        } else if (computerChoice == "Paper") {
            console.log("You lose! Paper beats Rock.")
            computerScore += 1;
        } else {
            console.log("You win! Rock beats Scissors.")
            humanScore += 1;
        }
    }

    let regPaper = /paper/i;
    if (humanChoice.match(regPaper)) {
        if (computerChoice == "Paper") {
            console.log("Tie!")
        } else if (computerChoice == "Rock") {
            console.log("You win! Paper covers Rock.")
            humanScore += 1;
        } else {
            console.log("You lose! Scissors cuts Paper.")
            computerScore += 1;
        }
    }

    let regScissors = /scissors/i;
    if (humanChoice.match(regScissors)) {
        if (computerChoice == "Scissors") {
            console.log("Tie!")
        } else if (computerChoice == "Saper") {
            console.log("You win! Scissors cut Paper.")
            humanScore += 1;
        } else {
            console.log("You lose! Rock beats Scissors.")
            computerScore += 1;
        }
    }
    console.log(humanScore);
    console.log(computerScore);
}

function playGame() {
    let gameCount = 0;

    for (i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        gameCount += 1;
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You win with ${humanScore} points!`);
    } else if (humanScore == computerScore) {
        console.log(`It's a tie! You have ${humanScore} points; your opponent has ${computerScore} points.`)
    } else {
        console.log(`You lose with your opponent having ${computerScore} wins :( Better luck next time!`)
    }
}

playGame();