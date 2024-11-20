const buttons = document.querySelectorAll("button")

const resultBoard = document.querySelector("#resultBoard");
const results = document.querySelector("#results");
const winner = document.querySelector("#winner");
const score = document.querySelector("#score");
const winAnnounce = document.createElement("h2");

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    let computerChoice
    if (randomNumber === 0){
        computerChoice = "Rock";
    } else if (randomNumber === 1){
        computerChoice = "Paper";
    } else if (randomNumber === 2){
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function displayResults(humanChoice, computerChoice){
    results.textContent = `P: ${humanChoice} vs. C: ${computerChoice}`
}

function displayScore(){
    score.textContent = `P: ${humanScore}\nC: ${computerScore}`;
}

function displayFinalScore(){
    if (humanScore>computerScore){
        winAnnounce.textContent = `Congratulations! You won!`;
    } else if (humanScore<computerScore){
        winAnnounce.textContent = `You lost! Better luck next time!`;
    } else{
        winAnnounce.textContent = `It's a tie!`;
    }
    resultBoard.insertBefore(winAnnounce, score)
}

function playRound(humanChoice){
    let computerChoice = getComputerChoice()
    displayResults(humanChoice, computerChoice);
    if (humanChoice === "Rock" && computerChoice === "Scissors"
        || humanChoice === "Scissors" && computerChoice === "Paper"
        ||humanChoice === "Paper" && computerChoice === "Rock"){ 
            winner.textContent = `${humanChoice} beats ${computerChoice}, you win!`;
            humanScore++;
    } else if (humanChoice === "Rock" && computerChoice ===     "Paper"
        || humanChoice === "Scissors" && computerChoice === "Rock"
        || humanChoice === "Paper" && computerChoice === "Scissors"){
            winner.textContent = `${computerChoice} beats ${humanChoice}, you lose!`;
            computerScore++;
    } else {
        winner.textContent = `${humanChoice} vs. ${computerChoice}: tie!`;
    }

    displayScore();
    if (humanScore === 5 
        || computerScore === 5){
            displayFinalScore();
    }
}

let computerScore = 0;
let humanScore = 0;

//Three buttons have similar eventListeners, so they are grouped together for more efficient code, using button.id as argument 
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});