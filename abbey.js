"Use Strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 10;
*/

//event listner

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "No number 🤣";
    //when guess is wrong
    displayMessage("No number 🤣");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too High" : "Too Low";
      // score = score - 1;
      displayMessage(guess > secretNumber ? "Too High" : "Too Low");
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game Over");
      // document.querySelector(".message").textContent = "Game Over";
      document.querySelector(".score").textContent = 0;
    }
  }
  //When the player wins
  else if (guess === secretNumber) {
    displayMessage("Correct Number ");
    // document.querySelector(".message").textContent = "Correct Number ✌ ";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#06b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".Highscore").textContent = highscore;
    }
  }
  //if the number is greater than the secret number
  // else if (guess > secretNumber) {
  // }

  // THIS HAS BEEN CATERED FOR USING THE TERNARY OPERATOR
  // //if the number is less than the secret Number
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score = score - 1;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "Game Over";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }

  // document.querySelector(".message").textContent = "Game OVee";
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing");
  // document.querySelector(".message").textContent = "Start Guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
// let highscore = 20;
// let Score = 0;

// const displayMessage = function (message) {
//   document.querySelector(".message").textContent = message;
// };
// document.querySelector(".check").addEventListener("click", function () {
//   // const guess = Number(document.querySelector('.guess').value);
//   const guess = Number(document.querySelector(".guess").value);
// });
