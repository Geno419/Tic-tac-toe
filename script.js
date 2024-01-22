let turn = "X";
const boxes = [...document.getElementsByClassName("box")];
let board = boxes.map((box) => {
  return box.innerText;
});
let gameEnded = false;

function updateBox(event) {
  const currentBox = document.getElementById(event.srcElement.id);
  if (board[currentBox.id] !== "") return;
  board[currentBox.id] = turn;
  currentBox.innerText = turn;
}

function playerTurn(event) {
  const currentBox = document.getElementById(event.srcElement.id);
  if (board[currentBox.id] !== "" || gameEnded === true) return;
  board[currentBox.id] = turn;
  currentBox.innerText = turn;
  checkWinner();
  //updateBox(event).then(() => checkWinner());
}

function changeTurn() {
  if (turn === "O") {
    turn = "X";
  } else {
    turn = "O";
  }
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
  changeTurn();
}

function announceWinner(winner) {
  alert(`${winner} wins the game!`);
  endGame();
}

function endGame() {
  gameEnded = true;
  // boxes.forEach((box) => {
  //   box.innerText = "";
  // });
  // board = boxes.map((box) => {
  //   return box.innerText;
  // });
}
// Figure out if winning
// increment score
// display who's turn it is
// local storage for the scores, and restart/new game button
