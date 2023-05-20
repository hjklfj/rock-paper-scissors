function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let res;
    switch (choice) {
        case 0:
            res = "Rock";
            break;
        case 1:
            res = "Paper";
            break;
        default:
            res = "Scissors";
    }
    return res;
}

function playRound(playerSelection, computerSelection) {
    let res;
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        res = "Tie";
    } else if(playerSelection.toLowerCase() === "rock") {
        if(computerSelection.toLowerCase() === "paper") {
            res = "You Lose! Paper beats Rock";
        } else {
            res = "You Win! Rock beats Scissors";
        }
    } else if(playerSelection.toLowerCase() === "paper") {
        if(computerSelection.toLowerCase() === "rock") {
            res = "You Win! Paper beats Rock";
        } else {
            res = "You Lose! Scissors beats Paper";
        }
    } else {
        if(computerSelection.toLowerCase() === "rock") {
            res = "You Lose! Rock beats Scissors";
        } else {
            res = "You Win! Scissors beats Paper";
        }
    }
    return res;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    let playscore = 0, computerScore = 0, iter = 0;
    let playerSel, computerSel;
    while(iter < 5) {
        playerSel = prompt("Pealse input your desicion!", "Rock");
        computerSel = getComputerChoice();
        console.log(playRound(playerSel, computerSel));
        iter++;
    }
}

game();