let x = 0;

function getComputerChoice(player) {
    if (player == 1) {
        console.log("Rock");
    } else if (player == 2) {
        console.log("Paper");
    }
    else {
        console.log("Scissors");
    }

    let computerGuesser = (Math.floor(Math.random() * 3) + 1);
    if (computerGuesser == 1) {
        console.log("Rock");
    } else if (computerGuesser == 2) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }


    if (player > computerGuesser) {
        console.log("Player Wins");
    } else if (player == computerGuesser) {
        console.log("TIE! \n Go Again...");
    } else if (player < computerGuesser) {
        console.log("Computer Wins");
    }
}

console.log(getComputerChoice(prompt("Choose your fighter! \n 1. Rock \n 2. Paper \n 3. Scissor")));