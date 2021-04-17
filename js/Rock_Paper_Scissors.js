var computerWin = 0;
var playerWin  = 0;
/**
 Random function return computer choice Rock, Paper or Scissors 
*/
function computerPlay() {
  
  let choices = ['Rock', 'Paper', 'Scissors']
   return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  
  
  
  if (computerSelection == playerSelection) {
    return ("Tie round! try again");
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock')
  )
  {
    playerWin ++; 
    return("Awesome you won! "+ playerSelection + " beats "+ computerSelection);
  } else {
    computerWin ++;
    return ("You Lose a round! " + computerSelection + " beats "+ playerSelection); 
  }
}

function game() {
  const playerSelect = document.getElementById('playerselect');
  const computerSelect = document.getElementById('computerselect');
  const roundResult = document.getElementById('roundresult');
  const gameResult = document.getElementById('gameresult');

  const buttons = document.querySelectorAll('button');
  buttons.forEach(button =>{
    button.addEventListener('click', function(){
      playerSelection = button.value;
      playerSelect.innerHTML   = "The Player Selection......... " + playerSelection;      
      
      computerSelection = computerPlay();
      computerSelect.innerHTML = "The Computer Selection... "+ computerSelection;
      
      roundResult.innerHTML="Result of round.................. "+ playRound(playerSelection, computerSelection)+' '+playerWin +" VS "+ computerWin;

      gameResult.innerHTML="";
      if ((computerWin==5) || (playerWin==5)) {
          if (computerWin > playerWin) {
            gameResult.innerHTML="You lose!";
          } else {
            gameResult.innerHTML="You Win!";
          }
          computerWin = 0;
          playerWin  = 0;
         
          
        }
    })
  })

} 

game();