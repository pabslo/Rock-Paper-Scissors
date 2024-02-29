function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie!";
    } else {
        return "invalid input";
    }
}

function playGame() {
    let playerChoice; 
    let result;
    let playerScore = 0;
    for(let i = 0; i < 5; i++) {
        playerChoice = prompt();
        result = playRound(playerChoice, getComputerChoice());
        console.log(result);
        if(result.includes("You win!") && playerScore == 2) {
            playerScore++;
            break;
        } else if (result.includes("You win!")) {
            playerScore++;
        } else if(result.includes("It's a tie!")) {
            i--;
        }
    }

    if(playerScore >= 3) {
        alert("You won the game!");
    } else {
        alert("You lost the game!");
    }
}

playGame();