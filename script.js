// define our game here
const game = () => {
  let playerScore = 0;
  let compScore = 0;

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
    const computerHand = document.querySelectorAll("computer-hand");

    //create an array that represents the computer's choices
    const computerOptions = ["rock", "paper", "scissors"];

    //loop through each option button and add event listener to each button
    options.forEach(option => {
      option.addEventListener("click", function() {
        //create a randomize method and store in a variable
        const computerNumber = Math.floor(Math.random() * 3);
        //apply randomize method to computer options array
        const computerChoice = computerOptions[computerNumber];
        console.log(computerChoice);
      });
    });
  };

  //call startGame function
  startGame();
  playMatch();
};

//call game function
game();
