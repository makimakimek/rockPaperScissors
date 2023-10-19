function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let stringChoice;

    if (choice === 0) {
        stringChoice = "rock";
    } else if (choice === 1) {
        stringChoice = "paper";
    } else if (choice === 2) {
        stringChoice = "scissors";
    }

    return stringChoice;
}

function playRound(playerSelection, computerSelection) {
    //first make the playerselection all lowercase
    //then check to see if playerselection string == computerselection string
    //if so for the first if statement have "tied"
    //if not go to other else if statements, have two else if statements that have || and &&

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return (`you're tied! the computer also picked ${computerSelection}`);
    } else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "paper")) {
        return (`you've won! the computer picked ${computerSelection}`);
    } else if ((playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock")) {
        return (`you've lost :( the computer picked ${computerSelection}`);
    }
}

function game() {
    //Use the previous function inside of this one to play a 5 round game that keeps score and reports
    //a winner and a loser at the very end
    let computerSelection;
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("rock, paper, or scissors?");
        let result = playRound(playerSelection, computerSelection);
        alert(result);

        let whoWon = result.slice(0, 11);
        if (whoWon === "you've won!") {
            playerScore++;
        } else if (whoWon === "you've lost") {
            computerScore++;
        }
    }

    if (computerScore > playerScore) {
        alert(`the computer won with an end score of ${computerScore} to ${playerScore}`);
    } else if (playerScore > computerScore) {
        alert(`you won with an end score of ${playerScore} to ${computerScore}!`);
    } else if (playerScore === computerScore) {
        alert(`you're tied with an end score of ${playerScore} to ${computerScore}`);
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
game();