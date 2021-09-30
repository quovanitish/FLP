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
}

let board = [['X', ' ', '0'], [' ', 'X', ' '], ['0', ' ', ' ']]
let game = new TicTacToe(board);