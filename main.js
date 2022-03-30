let computerScore = 0
let playerScore = 0

const choices = ["rock", "paper", "scissors"];


function game(){
    for (let i = 0; i < 5; i++) {
        playRound(); 
    }
}
function playRound(playerSelection, computerSelection){

var playerSelection = playerChoice();
var computerSelection = computerChoice();
const winner = checkWinner(playerSelection, computerSelection);
console.log(computerSelection);
console.log(winner);
}
function playerChoice(){
let input = prompt("Choose ROCK, PAPER OR SCISSORS!");
while(input === null){
    input = prompt("Choose ROCK, PAPER OR SCISSORS!");
}
input = input.toLowerCase();
let check = validateInput(input);
while(check == false){
   input = prompt("You need to do the spelling of the choice correctly, capitalization doesn't matter");
   while(input === null){
    input = prompt("Choose ROCK, PAPER OR SCISSORS!");
}
    input = input.toLowerCase();
    check = validateInput(input);
}
return input; 

}

function validateInput(choice){
    return choices.includes(choice);
}

function computerChoice(){
return choices[Math.floor(Math.random()*choices.length)];
}

const winnerResults = {
    computer: ["You lost the game, skynet is activated"],
    player: ["You won the game, thanks playerConor"],
    tie: ["It's a tie, go to sleep and practice for next game"]
}

function checkWinner(choiceP, choiceC){
    if(choiceP == choiceC){
        return winnerResults.tie
    } else if ( (choiceP === "rock" && choiceC === "scissors")||
                (choiceP === "paper" && choiceC === "rock") || 
                (choiceP === "scissors" && choiceC === "paper")){
        return winnerResults.player;
    } else {
        return winnerResults.computer;
    }
}

game();