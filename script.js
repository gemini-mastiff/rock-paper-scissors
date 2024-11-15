//Create a function for randomly generating Comp choice
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

//Create prompt for Player choice
function getHumanChoice(){
    let choiceLoop = true;
    let humanChoice;
    while (choiceLoop === true){
        let humanAnswer = prompt("Choose one: (R)ock, (P)aper, (S)cissors");
        humanAnswer = humanAnswer.toUpperCase();
        if (humanAnswer === "R"
        || humanAnswer === "ROCK"){
            humanChoice = "Rock";
            choiceLoop = false
        } else if (humanAnswer === "P"
        || humanAnswer === "PAPER"){
            humanChoice = "Paper";
            choiceLoop = false
        } else if (humanAnswer === "S"
        || humanAnswer === "SCISSORS"){
            humanChoice = "Scissors";
            choiceLoop = false
        } else {
            console.log("Please input a valid answer.");
        }
    }
    return humanChoice;
}

//Create logic for Rock>Scissors, Scissors>Paper, Paper>Rock, Tie if a draw
function playRound(humanChoice, computerChoice){
    console.log("User: " + humanChoice + " vs. Computer: " + computerChoice)
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
    }
    console.log("User: " + humanScore + "\nComputer: " + computerScore)
}
//Find out who wins
//Increment respective score by +1

//Create a variable for the Comp choice
const computerChoice = getComputerChoice();
//Create a variable for the Player choice
// const humanChoice = getHumanChoice();
//Create an int variable for Comp score
let computerScore = 0;
//Create an int variable for Player score
let humanScore = 0;


//Store Player choice inside of variable


//Create a loop that plays 5 rounds in one game
//At the end of the game, compare scores
//Highest points is the winner

playRound(humanChoice, computerChoice)