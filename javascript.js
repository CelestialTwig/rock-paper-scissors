function getComputerChoice() {
    const number = Math.floor(Math.random() * 3)

    if (number === 0){
        return "rock"
    } 

    else if (number === 1){
        return "paper"
    }

    else {
        return "scissors"
    }
}




const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");
const confirmButton = document.getElementById("confirmButton")

let playerChoice = ""

rockButton.onclick = () => {
    playerChoice = "rock";
    topText.textContent = "Rock";
};

paperButton.onclick = () => {
    playerChoice = "paper";
    topText.textContent = "Paper";
};

scissorsButton.onclick = () => {
    playerChoice = "scissors";
    topText.textContent = "Scissors";
};

let topText = document.getElementById("choiceText");
let compChoice = document.getElementById("compChoice");




confirmButton.onclick = playRound;

function playRound() {

    const computerChoice = getComputerChoice()

    if (playerChoice === computerChoice) {
        topText.textContent = "It's a draw!";
    }

    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        topText.textContent = "You win!";
    }

    else {
        topText.textContent = "You lose!";
    }

    compChoice.textContent = `Computer's choice was ${computerChoice.toUpperCase()}`;


}
