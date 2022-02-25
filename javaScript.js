let number;
let counterFaild = 0;
let win = 1;
let lose = 1;
let guess;
let guessStatus = document.getElementById("guessStatus");
let darkModeStyle = true;

function getName(event) {
  event.preventDefault();
  if (event.target.name.value.length > 0) {
    document.getElementById("helloName").innerHTML =
      "Hii " + event.target.name.value + ", good luck!";
    document.getElementById("nameForm").style.display = "none";
    document.getElementById("startGame").style.display = "inline-block";
    document.getElementById("errorName").style.display = "none";
  } else {
    document.getElementById("errorName").style.display = "block";
  }
}
function startGame() {
  document.getElementById("startGameBtn").style.display = "none";
  document.getElementById("score").style.display = "inline-grid";
  document.getElementById("game").style.display = "block";
  document.getElementById("endGame").style.display = "none";
  number = Math.floor(Math.random() * 10 + 1);
  guessStatus.innerHTML = "";
  guess = 0;
}
function game(event) {
  event.preventDefault();
  let tryAgain = "";
  if (Number(event.target.guess.value) === guess) {
    tryAgain = "Try another number, you tried it before one time.<br/>";
  } else {
  }
  guess = Number(event.target.guess.value);
  let tries = 3 - counterFaild;
  let help = "";
  if (number === guess) {
    counterFaild++;
    endGame(
      "Congratulations you won!<br/>The number is " +
        number +
        "<br/>you tried " +
        counterFaild +
        " times"
    );
    document.getElementById("win").innerHTML = win++;
    gameOver();
  } else {
    if (counterFaild === 3) {
      endGame("Sorry but you need to start again");
      document.getElementById("lose").innerHTML = lose++;
      gameOver();
    } else {
      if (number - guess > 0) {
        help = "<br/>The number is higher.";
      } else {
        help = "<br/>The number is smaller.";
      }
      if (Math.abs(number - guess) === 1) {
        guessStatus.innerHTML =
          tryAgain + "HOT!! You have " + tries + " more tries" + help;
      } else if (Math.abs(number - guess) === 2) {
        guessStatus.innerHTML =
          tryAgain + "Warm! You have " + tries + " more tries" + help;
      } else {
        guessStatus.innerHTML =
          tryAgain +
          "You are far, don't forget you have " +
          tries +
          " more tries" +
          help;
      }
      counterFaild++;
    }
  }
}
function gameOver() {
  document.getElementById("startGameBtn").style.display = "inline-block";
  document.getElementById("guess").value = 1;
  document.getElementById("game").style.display = "none";
  counterFaild = 0;
}

function endGame(status = "Please start again") {
  let endGame = document.getElementById("endGame");
  endGame.style.display = "grid";
  message.innerHTML = status;
}

// function darkMode() {
//   darkModeStyle = !darkModeStyle;
//   if (darkModeStyle) {
//     document.getElementById("darkMode").innerHTML = "Light Mode"
//   } else {
//     document.getElementById("darkMode").innerHTML = "Dark Mode"
//   }
//   let body = document.body;
//   let button = document.getElementsByClassName("button");
//   let form = document.getElementById("nameForm");
//   let endGame = document.getElementById("endGame");
//   let score = document.getElementsByClassName("score");
//   body.classList.toggle("dark-mode");
//   form.classList.toggle("dark-mode-card");
//   endGame.classList.toggle("dark-mode-card");
//   score[0].classList.toggle("dark-mode-card");
//   for (let i = 0; i < button.length; i++) {
//     button[i].classList.toggle("dark-mode-button");
//   }
function darkMode(value) {
  if (darkModeStyle != value) {
    darkModeStyle = !darkModeStyle;
    let body = document.body;
    let button = document.getElementsByClassName("button");
    let form = document.getElementById("nameForm");
    let endGame = document.getElementById("endGame");
    let score = document.getElementsByClassName("score");
    body.classList.toggle("dark-mode");
    form.classList.toggle("dark-mode-card");
    endGame.classList.toggle("dark-mode-card");
    score[0].classList.toggle("dark-mode-card");
    for (let i = 0; i < button.length; i++) {
      button[i].classList.toggle("dark-mode-button");
    }
  }
}


