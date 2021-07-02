
/*Returns rock paper or scissors*/
function computerPlay()
{
    let computerChoice = Math.floor(Math.random() * 3);
    let computerChoiceStr = "";

    switch(computerChoice){
        case 0:
            computerChoiceStr = "rock";
            break;
        case 1:
            computerChoiceStr = "paper";
            break;
        case 2:
            computerChoiceStr = "scissors";
            break;
    }

    return computerChoiceStr;
}

function playRound(playerSelection, computerSelection) {

    //object to store game results
    //msg is the text message we want displayed to the user
    //winner will be 0 for a tie, 1 if player wins, and 2 if computer wins
    const gameResults = {msg:"", winner:0};
    
    if(playerSelection == null)
    {
        gameResults.msg =  "Invalid Selection";
        gameResults.winner = -1;
    }

    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.trim();

    if(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors')
    {
        gameResults.msg =  "Invalid Selection";
        gameResults.winner = -1;
    }
    else{

        if(playerSelection == "rock" && computerSelection == "rock")
        {
            gameResults.msg = "It's a tie, you both chose Rock";
            gameResults.winner = 0;
        }
        else if(playerSelection == "rock" && computerSelection == "paper")
        {
            gameResults.msg = "The Computer Wins, Paper covers Rock.";
            gameResults.winner = 2;
        }
        else if(playerSelection == "rock" && computerSelection == "scissors")
        {
            gameResults.msg = "You Win, Rock crushses Scissors.";
            gameResults.winner = 1;
        }
        else if(playerSelection == "paper" && computerSelection == "rock")
        {
            gameResults.msg = "You Win, Paper covers Rock.";
            gameResults.winner = 1;
        }
        else if(playerSelection == "paper" && computerSelection == "paper")
        {
            gameResults.msg = "It's a tie, you both chose paper";
            gameResults.winner = 0;
        }
        else if(playerSelection == "paper" && computerSelection == "scissors")
        {
            gameResults.msg = "The Computer Wins, Scissors cuts Paper.";
            gameResults.winner = 2;
        }
        else if(playerSelection == "scissors" && computerSelection == "rock")
        {
            gameResults.msg = "The Computer Wins, Rock crushses Scissors.";
            gameResults.winner = 2;
        }
        else if(playerSelection == "scissors" && computerSelection == "paper")
        {
            gameResults.msg = "You Win, Scissors cuts Paper.";
            gameResults.winner = 1;
        }
        else if(playerSelection == "scissors" && computerSelection == "scissors")
        {
            gameResults.msg = "It's a tie, you both chose scissors";
            gameResults.winner = 0;
        } 
    }

    return gameResults;
}


const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener("click", function() {PlayGame('rock')});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function() {PlayGame('paper')});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', function() {PlayGame('scissors')});

const gameMsg = document.querySelector("#message-container");
const scoreMsg = document.querySelector("#score-container");

let playerWins = 0;
let computerWins = 0;

function PlayGame(playerChoice)
{
    cpuChoice = computerPlay();
    let result = playRound(playerChoice, cpuChoice);
    gameMsg.textContent = result.msg;

    switch(result.winner)
    {
        case 0:
            //tie
            break;
        case 1:
            playerWins++;
            break;
        case 2:
            computerWins++;
            break;
    }

    scoreMsg.textContent = `Score: Player ${playerWins} Computer ${computerWins}`;
}