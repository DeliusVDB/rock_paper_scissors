let computerChoice;
function getComputerChoice() {
  let x = Math.floor(Math.random() * 3 + 1);

  if (x == 1) {
    return (computerChoice = `rock`);
  } else if (x == 2) {
    return (computerChoice = `paper`);
  } else {
    return (computerChoice = `scissors`);
  }
}

function getHumanChoice(userInput) {
  return (userInput = prompt(
    `Please pick between "Rock", "Paper", and "Scissors"`
  ).toLowerCase());
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    computerScore++;
    return console.log(
      `Computer Wins this round. Player Score = ${humanScore}, Computer Score = ${computerScore}. Player played ${humanChoice}, while Computer played ${computerChoice}.`
    );
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    return console.log(
      `Player Wins this round. Player Score = ${humanScore}, Computer Score = ${computerScore}. Player played ${humanChoice}, while Computer played ${computerChoice}.`
    );
  } else if (humanChoice == computerChoice) {
    return console.log(
      `Tie! Player Score = ${humanScore}, Computer Score = ${computerScore}. Player played ${humanChoice}, while Computer played ${computerChoice}.`
    );
  }
}

let rounds = 1;
function playGame() {
  for (rounds; rounds < 6; rounds++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame();
