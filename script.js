let turn = "X";

const boxes = [...document.getElementsByClassName("box")];

let board = boxes.map((box) => {
  return box.innerText;
});

function test(event) {
  const currentBox = document.getElementById(event.srcElement.id);

  board[currentBox.id] = turn;

  currentBox.innerText = turn;
  if (turn === "O") {
    turn = "X";
  } else {
    turn = "O";
  }

  console.log(board);
}
