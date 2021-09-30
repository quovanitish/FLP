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

  // function to check the winner in the game
  checkWinner() {
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

  // function to check a performed move is valid or not
  checkValidMove(rowNum, colNum) {
    if(this.board[rowNum][colNum] != ' ' || this.board[rowNum][colNum] == undefined) 
        return false;
    else
        return true;
  }
}

let board = [['X', ' ', '0'], [' ', 'X', ' '], ['0', ' ', ' ']]
let game = new TicTacToe(board);