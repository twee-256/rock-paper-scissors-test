console.log("Hello World!")

function getComputerChoice() {
    randInt = Math.floor(Math.random() * 3) + 1;
    if (randInt == 1) {
        console.log("Rock!")
    } else if (randInt == 2) {
        console.log("Paper!")
    } else {
        console.log("Scissors!")
    }
}
getComputerChoice();

function getHumanChoice() {
    choice = prompt("Make your choice: ");
    randChoice = choice.toLowerCase();
    if (randChoice == "r") {
        console.log("Rock!")
    } else if (randChoice == "p") {
        console.log("Paper!")
    } else if (randChoice == "s") {
        console.log("Scissors!")
    }
}
getHumanChoice();