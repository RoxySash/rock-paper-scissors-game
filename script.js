
const roundResultsMsg = document.getElementById("roundResultsMsg");
const computerScoreSpan = document.getElementById("computerScoreSpan");
const playerScoreSpan = document.getElementById("playerScoreSpan");

const choices = ["Rock", "Paper", "Scissors"];

// calculates the random options for the computer 
function getRandomComputerResult(arr) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// if the player won the round this returns true boolean
function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") || (player === "Scissors" && computer === "Paper") || (player === "Paper" && computer === "Rock")
    );
}

// declaring the empty variables then as 0 
let playerScore = 0;
let computerScore = 0;

// this function gets the results of the roud which includes tallying each point
function getRoundResults(userChoice) {
    const computerResults = getRandomComputerResult(); 
 
    if (hasPlayerWonTheRound(userChoice, computerResults)){
    
        playerScore++; 
        return `Player Wins ${userChoice} beats ${computerResults}`
    } else if(computerResults === userChoice) {
        return `It's a tie! Both choose ${userChoice}`
    } else {
        computerScore++;
        return `Computer Wins! ${computerResults} beats ${userChoice}`
    }


}


function showResults(userChoice) {
    

    const roundResults = getRoundResults(userChoice);
    roundResultsMsg.textContent = roundResults;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    if(playerScore === 4 || computerScore === 4) {
    roundResultsMsg.innerText = `${playerScore === 4 ? "Player" : "Computer"} has won the game!`;

       setTimeout(resetGame, 800);
    
}; 
}


const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");


rockBtn.addEventListener("click", function(){
    showResults("Rock")
});

paperBtn.addEventListener("click", function(){
    showResults("Paper")
});
scissorsBtn.addEventListener("click", function(){
    showResults("Scissors")
});






function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundResultsMsg.textContent = "Game Over! Starting a new game...";
    computerScoreSpan.innerText = computerScore;
    playerScoreSpan.innerText = playerScore;
    


}

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", function() {
    document.getElementById("audio").play();
  });
});


