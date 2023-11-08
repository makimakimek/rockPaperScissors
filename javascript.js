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

function forEventListeners(button, playerScore, computerScore) {   
    //to prevent further game play
    if (playerScore === 5 || computerScore === 5) {
        return;
    } 

    const results = document.querySelector('#results');
    const scores = document.querySelector('#scores');

    let computerSelection = getComputerChoice();

    endResult = playRound(button, computerSelection);
    results.textContent = endResult;

    whoWon = endResult.slice(0, 11);
    if (whoWon === "you've won!") {
        playerScore++;
    } else if (whoWon === "you've lost") {
        computerScore++;
    }

    scores.textContent = playerScore + ' - ' + computerScore;

    //end of game
    if (playerScore === 5) {
        results.textContent = `you won with an end score of ${playerScore} to ${computerScore}!`;
    } else if (computerScore === 5) {
        results.textContent = `the computer won with an end score of ${computerScore} to ${playerScore}`;
    }

    let scoresArray = [playerScore, computerScore];

    return scoresArray;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;    

    //getting the button elements from index.html
    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');
    
    let scoresArray;
        
    //for player selection
    rockButton.addEventListener('click', () => {
        scoresArray = forEventListeners(rockButton.id, playerScore, computerScore);
        playerScore = scoresArray[0];
        computerScore = scoresArray[1];
    });
    
    paperButton.addEventListener('click', () => {
        scoresArray = forEventListeners(paperButton.id, playerScore, computerScore);
        playerScore = scoresArray[0];
        computerScore = scoresArray[1];
    });
    
    scissorsButton.addEventListener('click', () => {
        scoresArray = forEventListeners(scissorsButton.id, playerScore, computerScore);
        playerScore = scoresArray[0];
        computerScore = scoresArray[1];
    });

}

game();