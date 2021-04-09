/**
 * Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
 * The Math.floor() function returns the largest integer less than or equal to a given number.
 * The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) 
 */

var playerWin=0;
var computerWin=0; 

function computerPlay() {
     let valeur;
     let choix;
     valeur = Math.floor(Math.random() * 3) + 1;
     
     if (valeur === 1) {
        // Return ‘Rock’
        choix = "Rock";
      } else if (valeur === 2) {
        // Return ‘Paper’
        choix = "Paper";
      } else {
        // Return ‘Scissors’
        choix = "Scissors";
      }


      return (choix);     
}


function playRound(playerSelection, computerSelection) {
  // your code here!
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  var resultRound;
  
  if (computerSelection == playerSelection) {
    resultRound = "Tie round! try again";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")

  ) {
    resultRound = "You Lose! " + computerSelection + " beats "+ playerSelection; 
    computerWin ++; 
    } else 
  { 
      resultRound = "Awesome you won! " + playerSelection + " beats "+ computerSelection; 
      playerWin ++;
  }

  return resultRound;
}





function game() {
  
  playerSelection="";
  for (i = 0; i < 5; i++) {
    do {
    playerSelection = window.prompt("What is your choice Rock, Paper or Scissors ?", "rock");
    playerSelection = playerSelection.toLowerCase();
    } while (playerSelection !="rock" && playerSelection !="scissors" && playerSelection !="paper") 

    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log("Result of round : " +(i+1) + " "+playRound(playerSelection, computerSelection));
  }

  if (playerWin == computerWin) {
    console.log("Tie game!");

  } else if (playerWin < computerWin) {
    console.log("You lost a pity for you");
  }
  else {
    console.log("Awesome you won !");
  }

}

game();
