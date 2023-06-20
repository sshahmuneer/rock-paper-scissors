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

// function game() {

//     let playerWins = 0;
//     let computerWins = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Type rock, paper, or scissors");
//         let computerSelection = getComputerChoice();
//         let result = playRound(playerSelection, computerSelection);
//         if (result === -1) {
//             computerWins++;
//             console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
//         } else if (result === 0) {
//             console.log('Tie!');
//         } else if (result === 1) {
//             playerWins++;
//             console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
//         }
//     }

//     if (playerWins > computerWins) {
//         console.log('You are the winner!');
//     } else if (playerWins < computerWins) {
//         console.log('You lost.');
//     } else {
//         console.log('Tie! There is no winner.');
//     }
// }

// game();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let playerSelection = button.id;
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        displayRoundResult(playerSelection, computerSelection, result);
    });
});

function displayRoundResult(playerSelection, computerSelection, result) {
    const results = document.querySelector('#results');
    const roundResult = document.createElement('div');
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');

    if (result === -1) {
        computerWins++;
        computerScore.textContent = `Computer: ${computerWins}`;
        roundResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (result === 0) {
        roundResult.textContent = 'Tie!';
    } else if (result === 1) {
        playerWins++;
        playerScore.textContent = `Player: ${playerWins}`;
        roundResult.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    }

    results.appendChild(roundResult);
}