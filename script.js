//*// create function getComputerChoice that will return "Rock", "Paper", "Scissors". Use Math.random

//*// create function getHumanChoice that will return user input. Don't worry about user typing anything other
//*// than "Rock", "Paper", "Scissors".

//*// create 2 variables, humanScore & computerScore. These variables should keep score.

//*// create function called playRound with the parameters for humanChoice and computerChoice.
//*// humanChoice should not be case-sensitive
//*// Log the winner.
//*// increment human- or computerScore based on round winner

//* Example Code
//? function playRound(humanChoice, computerChoice) {
//?     // your code here!
//? }

//? const humanSelection = getHumanChoice();
//? const computerSelection = getComputerChoice();

//? playRound(humanSelection, computerSelection);

//* create function called playGame to play 5 games.
//* move playRound and score variables inside the playGame function.

// function getComputerChoice() {
//     let computerChoice = Math.floor(Math.random() * 3 + 1);
//     // console.log(computerChoice)

//     if (computerChoice == 1) {
//         console.log(`rock`)
//     } else if (computerChoice == 2) {
//         console.log(`paper`)
//     } else {
//         console.log(`scissors`)
//     }
// }

// function getHumanChoice(userInput) {
//     return userInput = prompt(`Please pick between "Rock", "Paper", and "Scissors"`).toLowerCase();
// }

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice == "rock" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock") {
//         computerScore++;
//         return `Computer Wins this round. Player Score = ${humanScore}, Computer Score = ${computerScore}`;
//     } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
//         humanScore++;
//         return `Player Wins this round. Player Score = ${humanScore}, Computer Score = ${computerScore}`;
//     } else if (humanChoice == computerChoice) {
//         return `Tie! Player Score = ${humanScore}, Computer Score = ${computerScore}`;
//     }
// }

let computerChoice;
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3 + 1);

    if (x == 1) {
        return computerChoice = `rock`;
    } else if (x == 2) {
        return computerChoice = `paper`;
    } else {
        return computerChoice = `scissors`;
    }
}

function getHumanChoice(userInput) {
    return userInput = prompt(`Please pick between "Rock", "Paper", and "Scissors"`).toLowerCase();
}

function playGame() {
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return console.log(`Computer Wins this round. Player Score = ${humanScore}, Computer Score = ${computerScore}`);
    } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return console.log(`Player Wins this round. Player Score = ${humanScore}, Computer Score = ${computerScore}`);
    } else if (humanChoice == computerChoice) {
        return console.log(`Tie! Player Score = ${humanScore}, Computer Score = ${computerScore}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);