require("colors");
const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Class TicTacToe to initiate a game instance
class TicTacToe {  
  constructor(board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]) {
    this.board = board;
    this.player1 = "X";
    this.player2 = "0";
    this.playerWon = undefined;
    this.totalMoves = 0;
  }

  // function to print the board
  printBoard() {
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
  }
}

let board = [['X', ' ', '0'], [' ', 'X', ' '], ['0', ' ', ' ']]
let game = new TicTacToe(board);