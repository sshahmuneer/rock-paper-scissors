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

let rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    console.log('rock button pressed');
});

let paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    console.log('paper button pressed');
});