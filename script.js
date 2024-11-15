

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

//Prompt for Player choice
function getHumanChoice(){
    let choiceLoop = true;
    let humanChoice;
    //Prompt will keep asking until a valid answer is inputted
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

//Function containing the process of a game round
function playRound(humanChoice, computerChoice){
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

//Plays 5 rounds, prompting new values for human & comp choice each time
function playGame(){
    for (let i=0; i<5; i++){
        console.log("---- Round " + (i+1) + " ----"); //Displays the round number
        //Create a variable for Comp choice and Player choice
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    winner(humanScore, computerScore)    
}

//Create an int variable for Comp score and Player score
let computerScore = 0;
let humanScore = 0;

//Calls function to begin game
playGame()