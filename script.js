// define our game here
const game = () => {
  let pScore = 0;
  let cScore = 0;

  //start our game
  const startGame = () => {
    //select intro button and store in a variable
    const playBtn = document.querySelector(".intro button");
    //select intro screen and store in a variable
    const introScreen = document.querySelector(".intro");
    //select match screen and store in a variable
    const matchScreen = document.querySelector(".match");

    //create event listener for playBtn
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = () => {
    //select options buttons and store in a variable
    const options = document.querySelectorAll(".options button");
    //select the player hand and store in a variable
    const playerHand = document.querySelector(".player-hand");
    //select the computer hand and store in a variable
    const computerHand = document.querySelector(".computer-hand");
    //select hands images and store in a variable
    const hands = document.querySelectorAll(".hands img");

    //loop through hands and add event listener that stops the animation once it is done running
    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    //create an array that represents the computer's choices
    const computerOptions = ["rock", "paper", "scissors"];

    //loop through each option button and add event listener to each button
    options.forEach(option => {
      option.addEventListener("click", function() {
        //create a randomize method and store in a variable
        const computerNumber = Math.floor(Math.random() * 3);
        //apply randomize method to computer options array
        const computerChoice = computerOptions[computerNumber];

        //create set timeout function
        setTimeout(() => {
          //call comparehands function here
          compareHands(this.textContent, computerChoice);

          //update images based on choice
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        //add animations to hands
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  //function that updates the score
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //function that compares the hand choices of each side
  const compareHands = (playerChoice, computerChoice) => {
    //define what displays in the winner div based on certain conditions
    const winner = document.querySelector(".winner");
    //checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie!";
      return; //ends the function
    }
    //check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return; //ends the function
      } else {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return; //ends the function
      }
    }
    //check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return; //ends the function
      } else {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return; //ends the function
      }
    }
    //check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer wins!";
        cScore++;
        updateScore();
        return; //ends the function
      } else {
        winner.textContent = "Player wins!";
        pScore++;
        updateScore();
        return; //ends the function
      }
    }
  };

  //call startGame function
  startGame();
  playMatch();
};

//call game function
game();
