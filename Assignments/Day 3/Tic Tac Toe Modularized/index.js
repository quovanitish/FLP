/* To create an instance of a tic tac toe game */
// TODO: Implement playmove() functions to play the game
function TicTacToe(
  board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]
) {
  this.player1 = "X";
  this.player2 = "0";
  this.totalMoves = 0;
  this.playerWon = undefined;
  this.board = board;
}

// Assign printBoard() function to every instance of TicTacToe object
TicTacToe.prototype.printBoard = function () {
  console.log();
  console.log("-------------");
  for (let i = 0; i < this.board.length; i++) {
    let line = "";
    for (let j = 0; j < this.board[i].length; j++) {
      if (j == 0) line += "| " + this.board[i][j] + " | ";
      else line += this.board[i][j] + " | ";
    }
    console.log(line);
    console.log("-------------");
  }
  console.log("");
};

let board = [
	["X", " ", " "],
  [" ", "X", " "],
  [" ", " ", "X"],
];
let game = new TicTacToe(board);
game.printBoard();
console.log(game.playerWon);
