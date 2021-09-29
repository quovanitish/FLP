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

// Assign checkWinner() function to every instance of TicTacToe object
TicTacToe.prototype.checkWinner = function () {
  if (
    this.board[0][0] == this.board[0][1] &&
    this.board[0][0] == this.board[0][2] &&
    this.board[0][0] != " "
  ) {
    this.playerWon = this.board[0][0];
  }

  // 2. Combination 2 horizontal second row
  else if (
    this.board[1][0] == this.board[1][1] &&
    this.board[1][0] == this.board[1][2] &&
    this.board[1][0] != " "
  ) {
    this.playerWon = this.board[1][0];
  }

  // 3. Combination 3 horizontal third row
  else if (
    this.board[2][0] == this.board[2][1] &&
    this.board[2][0] == this.board[2][2] &&
    this.board[2][0] != " "
  ) {
    this.playerWon = this.board[2][0];
  }

  // 4. Combination 4 Diagonal 1
  else if (
    this.board[0][0] == this.board[1][1] &&
    this.board[0][0] == this.board[2][2] &&
    this.board[0][0] != " "
  ) {
    this.playerWon = this.board[0][0];
  }

  // 5. Combination 5 Diagonal 2
  else if (
    this.board[2][0] == this.board[1][1] &&
    this.board[2][0] == this.board[0][2] &&
    this.board[2][0] != " "
  ) {
    this.playerWon = this.board[2][0];
  }

  // 6. Combination 6 vertical first column
  else if (
    this.board[0][0] == this.board[1][0] &&
    this.board[0][0] == this.board[2][0] &&
    this.board[0][0] != " "
  ) {
    this.playerWon = this.board[0][0];
  }

  // 7. Combination 7 vertical second column
  else if (
    this.board[0][1] == this.board[1][1] &&
    this.board[0][1] == this.board[2][1] &&
    this.board[0][1] != " "
  ) {
    this.playerWon = this.board[0][1];
  }

  // 8. Combination 8 vertical third column
  else if (
    this.board[0][2] == this.board[1][2] &&
    this.board[0][2] == this.board[2][2] &&
    this.board[0][2] != " "
  ) {
    this.playerWon = this.board[0][2];
  } else if (this.playerWon == undefined && this.totalMoves == 9) {
    console.log("Game Tie !!".blue.bold);
    process.exit();
  }
  return;
};

let board = [
	["X", " ", " "],
  [" ", "X", " "],
  [" ", " ", "X"],
];
let game = new TicTacToe(board);
game.checkWinner();
game.printBoard();
console.log(game.playerWon);
