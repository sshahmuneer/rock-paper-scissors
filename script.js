function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else if (randomNumber === 3) {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'rock') {
            return 'Tie!';
        } else if (computerSelection === 'paper') {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else if (computerSelection === 'scissors') {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection === 'paper') {
            return 'Tie!';
        } else if (computerSelection === 'scissors') {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        } else if (computerSelection === 'paper') {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection === 'scissors') {
            return 'Tie!';
        }
    }
}