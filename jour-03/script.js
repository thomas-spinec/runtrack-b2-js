import Player from './class/Player.js';
import Board from './class/Board.js';

//player 1
let player1 = new Player('X', true);
console.log(player1);

let board = new Board();
board.displayBoard();