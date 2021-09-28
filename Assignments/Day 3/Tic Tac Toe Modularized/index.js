/* To create an instance of a tic tac toe game */
// TODO: Implement playmove(), checkwinner() functions to play the game
function TicTacToe() {
		this.player1 = 'X',
		this.player2 = '0',
		this.totalMoves = 0,
		this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
		this.printBoard = function () {
			console.log();
			console.log("-------------");
			for (let i = 0; i < this.board.length; i++) {
				let line = '';
				for (let j = 0; j < this.board[i].length; j++) {
					if (j == 0)
						line += '| ' + this.board[i][j] + ' | ';
					else
						line += this.board[i][j] + ' | ';
				}
				console.log(line);
				console.log("-------------");
			}
			console.log("");
		}
}

let game = new TicTacToe()
game.printBoard();