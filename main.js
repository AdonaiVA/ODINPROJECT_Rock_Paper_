
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}


function playRound(playerSelection, computerSelection) {

    const rock = "Rock"
    const scissors = "Scissors"
    const paper = "Paper"

    if (playerSelection === rock){
        if (computerSelection === rock){
            return "It's a tie"
        } else if (computerSelection === scissors){
            return "Player wins"
        } else if (computerSelection === paper){
            return "Computer wins"
        }
    }
    if (playerSelection === scissors){
        if (computerSelection === rock){
            return "Computer wins"
        } else if (computerSelection === scissors){
            return "It's a tie"
        } else if (computerSelection === paper){
            return "Player wins"
        }
    }
    if (playerSelection === paper){
        if (computerSelection === rock){
            return "Player wins"
        } else if (computerSelection === scissors){
            return "Computer wins"
        } else if (computerSelection === paper){
            return "It's a tie"
        }
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0

    for (let round = 1; round <= 5; round++){
        const playerSelection = prompt("Enter your choice (Rock, Scissors, Paper)")
        const computerSelection = getComputerChoice()
        
        const resultado = playRound(playerSelection, computerSelection)
        console.log('Round ' + round + " It's a " + resultado)

        if (resultado.includes("Computer")){
            computerScore++
        } else if (resultado.includes("Player")){
            playerScore++
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game")
    } else if (playerScore < computerScore){
        console.log("You lose the game")
    } else {
        console.log("It's a draw")
    }
}

game()