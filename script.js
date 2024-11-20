const rBtn = document.querySelector("#rock");
const pBtn = document.querySelector("#paper");
const sBtn = document.querySelector("#scissors");

const resultBoard = document.querySelector("#resultBoard");
const results = document.querySelector("#results");
const winner = document.querySelector("#winner");
const score = document.querySelector("#score");
const winAnnounce = document.createElement("h2");

//Function for randomly generating Comp choice
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

//Function to determine winner of the game
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

//Function containing the process of a game round
function playRound(humanChoice){
    let computerChoice = getComputerChoice()
    //Display player choices
    displayResults(humanChoice, computerChoice);
    //Logic for determining who wins
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
    //Displays the current score
    displayScore();
    if (humanScore === 5 
        || computerScore === 5){
            displayFinalScore();
    }
}

//Create an int variable for Comp score and Player score
let computerScore = 0;
let humanScore = 0;

rBtn.addEventListener("click", () => {
    playRound("Rock");
});
pBtn.addEventListener("click", () => {
    playRound("Paper");
});
sBtn.addEventListener("click", () => {
    playRound("Scissors");
});