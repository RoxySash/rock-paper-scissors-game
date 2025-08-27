
const choices = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult(arr) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") || (player === "Scissors" && computer === "Paper") || (player === "Paper" && computer === "Rock")
    );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userChoice) {
    const computerResults = getRandomComputerResult(); 
 
    if(hasPlayerWonTheRound(userChoice, computerResults))
    {
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
    roundResultsMsg.textContent = getRoundResults(userChoice);
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
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

const winnerMsgElement = document.getElementById("winner-msg");
const resetGameBtn = document.getElementById("reset-game-btn");

if(playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${playerScore === 3 ? "Player" : "Computer"} has won the game!`;

    resetGameBtn.style.display = "block";
    
};
resetGameBtn.addEventListener("click", resetGame());

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    computerScoreSpan.innerText = computerScore;
    playerScoreSpan.innerText = playerScore;

    resetGameBtn.style.display = "none";
    winnerMsgElement.innerText = "";
    
}

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", function() {
    document.getElementById("audio").play();
  });
});


