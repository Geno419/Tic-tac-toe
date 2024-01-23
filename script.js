const playAgainBtn = document.getElementById("play-again");
const boxes = [...document.getElementsByClassName("box")];
const message = document.getElementById("message");
const xScore = document.getElementById("X-score");
const oScore = document.getElementById("O-score");
xScore.innerText = localStorage.getItem("X-Score") || 0;
oScore.innerText = localStorage.getItem("O-Score") || 0;

let turn = "X";
message.innerText = `${turn} it's your turn`;
let board = boxes.map((box) => {
  return box.innerText;
});
let gameEnded = false;

function playerTurn(event) {
  const currentBox = document.getElementById(event.srcElement.id);
  if (board[currentBox.id] !== "" || gameEnded === true) return;
  board[currentBox.id] = turn;
  currentBox.innerText = turn;
  checkWinner();
}

function changeTurn() {
  if (turn === "O") {
    turn = "X";
  } else {
    turn = "O";
  }
  message.innerText = `${turn} it's your turn`;
}

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkWinner() {
  // have they won?
  for (let i = 0; i < winningPositions.length; i++) {
    const thisPosition = winningPositions[i];
    const value1 = board[thisPosition[0]];
    const value2 = board[thisPosition[1]];
    const value3 = board[thisPosition[2]];
    if (value1 === "" || value2 === "" || value3 === "") continue;
    else if (value1 === value2 && value2 === value3) {
      announceWinner(value1);
    }
  }
  if (gameEnded === false) {
    changeTurn();
  }
}

function announceWinner(winner) {
  message.innerText = `${winner} wins the game!`;
  incrementScore(winner);
  endGame();
}

function endGame() {
  gameEnded = true;
}
playAgainBtn.addEventListener("click", resetGame);

function resetGame() {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  board = boxes.map((box) => {
    return box.innerText;
  });
  changeTurn();
  gameEnded = false;
}
function incrementScore(winner) {
  if (winner === "O") {
    oScore.innerText++;
    let O = Number(oScore.innerText);
    localStorage.setItem("O-Score", O);
  } else {
    xScore.innerText++;
    let X = Number(xScore.innerText);
    localStorage.setItem("X-Score", X);
  }
}
