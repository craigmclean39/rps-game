
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
    
    if(playerSelection == null)
    {
        return "Invalid Selection";
    }

    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.trim();

    if(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors')
    {
        return "Invalid Selection";
    }
    else{

        if(playerSelection == "rock" && computerSelection == "rock")
        {
            return "It's a tie, you both chose Rock";
        }
        else if(playerSelection == "rock" && computerSelection == "paper")
        {
            return "The Computer Wins, Paper covers Rock.";
        }
        else if(playerSelection == "rock" && computerSelection == "scissors")
        {
            return "You Win, Rock crushses Scissors.";
        }
        else if(playerSelection == "paper" && computerSelection == "rock")
        {
            return "You Win, Paper covers Rock.";
        }
        else if(playerSelection == "paper" && computerSelection == "paper")
        {
            return "It's a tie, you both chose paper";
        }
        else if(playerSelection == "paper" && computerSelection == "scissors")
        {
            return "The Computer Wins, Scissors cuts Paper.";
        }
        else if(playerSelection == "scissors" && computerSelection == "rock")
        {
            return "The Computer Wins, Rock crushses Scissors.";
        }
        else if(playerSelection == "scissors" && computerSelection == "paper")
        {
            return "You Win, Scissors cuts Paper.";
        }
        else if(playerSelection == "scissors" && computerSelection == "scissors")
        {
            return "It's a tie, you both chose scissors";
        }
    }
}

function PlayGame(playerChoice)
{
    cpuChoice = computerPlay();
    console.log(playRound(playerChoice, cpuChoice));
}

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener("click", function() {PlayGame('rock')});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function() {PlayGame('paper')});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', function() {PlayGame('scissors')});