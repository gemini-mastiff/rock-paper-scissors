const rBtn = document.querySelector("#rock");
const pBtn = document.querySelector("#paper");
const sBtn = document.querySelector("#scissors");

const results = document.querySelector("#results");
const score = document.querySelector("#score");

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

//Function containing the process of a game round
function playRound(humanChoice){
    let computerChoice = getComputerChoice()
    //Display player choices
    console.log("User: " + humanChoice + " vs. Computer: " + computerChoice)
    //Logic for determining who wins
    if (humanChoice === "Rock" && computerChoice === "Scissors"){
        console.log("Rock beats Scissors, you win!")
        humanScore++
    } else if (humanChoice === "Rock" && computerChoice === "Paper"){
        console.log("Paper beats Rock, you lose!")
        computerScore++
    } else if (humanChoice === "Scissors" && computerChoice === "Paper"){
        console.log("Scissors beats Paper, you win!")
        humanScore++
    } else if (humanChoice === "Scissors" && computerChoice === "Rock"){
        console.log("Rock beats Scissors, you lose!")
        computerScore++
    } else if (humanChoice === "Paper" && computerChoice === "Rock"){
        console.log("Paper beats Rock, you win!")
        humanScore++
    } else if (humanChoice === "Paper" && computerChoice === "Scissors"){
        console.log("Scissors beat Paper, you lose!")
        computerScore++
    } else {
        console.log(humanChoice + " vs. " + computerChoice + ": tie!")
    }
    //Displays the current score
    console.log("User: " + humanScore + "\nComputer: " + computerScore);
}

//Function to determine winner of the game
function winner(humanScore, computerScore){
    if (humanScore>computerScore){
        console.log("Congratulations! You won!");
    } else if (humanScore<computerScore){
        console.log("You lost! Better luck next time!");
    } else{
        console.log("It's a tie!")
    }
}

//Create an int variable for Comp score and Player score
let computerScore = 0;
let humanScore = 0;

rBtn.addEventListener("click", () => {
    playRound("Rock");
});
pBtn.addEventListener("click", () => {
    playRound("Paper")
});
sBtn.addEventListener("click", () => {
    playRound("Scissors")
});