const getUserChoice = userInput =>{
    userInput=userInput.toLowerCase();
    if (userInput === 'rock'){
      return userInput;
    }
    if (userInput === 'paper'){
      return userInput;
  
      }
    if (userInput === 'scissors'){
      return userInput;
    } 
    if (userInput ==='bomb'){
      return userInput;
      }else{
      console.log('Error. Please choose Rock, Paper or Scissors.')
    }
  
  };
  function getComputerChoice(){
    randomNumber=Math.floor(Math.random()*3);
    switch(randomNumber){
      case 0:
        return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  };
  function detirmineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
      return 'It is a tie!';
    } if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    } if (userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'The computer won!'
      } if (computerChoice === 'paper'){
        return 'You won!';
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'The computer won!'
      } if (computerChoice === 'rock'){
        return 'You won!';
      }
    }
    if (userChoice === 'bomb'){
      return 'You won!';
    }
  
  };
  function playGame(){
    const userChoice=getUserChoice('scissors');
    const computerChoice=getComputerChoice();
    console.log( 'You Threw: ' + userChoice);
    console.log('The Computer Threw: ' + computerChoice);
    console.log(detirmineWinner(userChoice, computerChoice));
  }
  playGame();
