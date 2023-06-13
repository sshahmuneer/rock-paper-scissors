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
            return 0;
        } else if (computerSelection === 'paper') {
            return -1;
        } else if (computerSelection === 'scissors') {
            return 1;
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'rock') {
            return 1;
        } else if (computerSelection === 'paper') {
            return 0;
        } else if (computerSelection === 'scissors') {
            return -1;
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return -1;
        } else if (computerSelection === 'paper') {
            return 1;
        } else if (computerSelection === 'scissors') {
            return 0;
        }
    }
}