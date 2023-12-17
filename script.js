
function getComputerChoice(){

    let computerSelection = '';

   const randomNumber = Math.random();
   if (randomNumber >= 0 && randomNumber < 1 / 3){
     computerSelection = "rock";
   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    computerSelection = "Paper";
   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
     computerSelection = "scissors";
   }
   return computerSelection;
 }






 
  function playRound(playerSelection){
  const computerSelection = getComputerChoice();

  let result = '';

  if (playerSelection === "rock"){
     if (computerSelection === "scissors"){
        result = "You win."
     } else if(computerSelection === "Paper"){
       result = "You lose."
     } else if(computerSelection === "rock"){
       result = "Tie"
     }
     } else if(playerSelection === "Paper"){
       if (computerSelection === "rock"){
       result = "You win."
     } else if(computerSelection === "scissors"){
       result = "You lose."
     } else if(computerSelection === "Paper"){
       result = "Tie"
     }
    } else if(playerSelection === "scissors"){
       if (computerSelection === "Paper"){
       result = "You win."
     } else if(computerSelection === "rock"){
       result = "You lose."
     } else if(computerSelection === "scissors"){
       result = "Tie"
     }
    } 


    alert(`You picked ${playerSelection}. Computer Picked ${computerSelection}. ${result}`);
  }
