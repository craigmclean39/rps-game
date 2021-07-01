
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
    
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.trim();

    if(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors')
    {
        console.log("Invalid Choice")
        return;
    }
    else{

        if(playerSelection == "rock" && computerSelection == "rock")
        {
            console.log("It's a tie, you both chose Rock");
        }
        else if(playerSelection == "rock" && computerSelection == "paper")
        {
            console.log("The Computer Wins, Paper covers Rock.");
        }
        else if(playerSelection == "rock" && computerSelection == "scissors")
        {
            console.log("You Win, Rock crushses Scissors.");
        }
        else if(playerSelection == "paper" && computerSelection == "rock")
        {
            console.log("You Win, Paper covers Rock.");
        }
        else if(playerSelection == "paper" && computerSelection == "paper")
        {
            console.log("It's a tie, you both chose paper");
        }
        else if(playerSelection == "paper" && computerSelection == "scissors")
        {
            console.log("The Computer Wins, Scissors cuts Paper.");
        }
        else if(playerSelection == "scissors" && computerSelection == "rock")
        {
            console.log("The Computer Wins, Rock crushses Scissors.");
        }
        else if(playerSelection == "scissors" && computerSelection == "paper")
        {
            console.log("You Win, Scissors cuts Paper.");
        }
        else if(playerSelection == "scissors" && computerSelection == "scissors")
        {
            console.log("It's a tie, you both chose scissors");
        }
    }
}


for(i = 0; i <10; i++)
{
    //console.log(`${i} : ${computerPlay()}`);

    playRound('rock', computerPlay());
}
