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

function getHumanChoice(){
    let endTask = false
    while (endTask == false){
    let userInput = prompt("Rock, Paper or Scissors?: ").toLowerCase();

    if (userInput === "rock") {
        endTask = true
        return "rock"
    }

    else if (userInput === "paper") {
        endTask = true
        return "paper"
    }

    else if (userInput === "scissors") {
        endTask = true
        return "scissors"
    }

    else {
        alert("Please enter a valid option!")
    }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        alert("It's a draw!")
    }


    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++
        alert("You win!")
    }

    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++
        alert("You lose!")
    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++
        alert("You lose!")
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++
        alert("You win!")
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++
        alert("You win!")
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        computerScore++
        alert("You lose!")
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
}

playGame()

