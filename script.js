let playerWins = 0;
let computerWins = 0;

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

const buttons = document.querySelectorAll('button:not(.play-again-button)');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (playerWins < 5 && computerWins < 5) {
            let playerSelection = button.id;
            let computerSelection = getComputerChoice();
            let result = playRound(playerSelection, computerSelection);
            displayRoundResult(playerSelection, computerSelection, result);
        }
    });
});

function displayRoundResult(playerSelection, computerSelection, result) {
    const results = document.querySelector('#results');
    const roundResult = document.querySelector('#result-message');
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    const playAgainButton = document.querySelector('.play-again-button');

    if (result === -1) {
        computerWins++;
        computerScore.textContent = `Computer: ${computerWins}`;
        roundResult.textContent = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
    } else if (result === 0) {
        roundResult.textContent = 'Tie!';
    } else if (result === 1) {
        playerWins++;
        playerScore.textContent = `Player: ${playerWins}`;
        roundResult.textContent = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
    }

    if (playerWins === 5) {
        roundResult.textContent = 'Congratulations! You won.';
        playAgainButton.classList.toggle('hide');
    } else if (computerWins === 5) {
        roundResult.textContent = 'Game over. You lost.';
        playAgainButton.classList.toggle('hide');
    }
}

const playAgainButton = document.querySelector('.play-again-button');
playAgainButton.addEventListener('click', (event) => {
    const roundResult = document.querySelector('#result-message');
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    

    playerWins = 0;
    computerWins = 0;
    roundResult.textContent = '';
    playerScore.textContent = `Player: ${playerWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;
    playAgainButton.classList.toggle('hide');
});