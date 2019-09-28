// define our game here
const game = () => {
  let playerScore = 0;
  let compScore = 0;

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
      matchScreen.classList.add('fadeIn');
    });
  };

  //call startGame function
  startGame();
};

//call game function
game();
