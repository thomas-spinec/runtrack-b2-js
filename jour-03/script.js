import Player from './class/Player.js';
import Board from './class/Board.js';
import Game from './class/Game.js';

const btnPlay = document.querySelector("#play");

let player1 = new Player("X", true);
let player2 = new Player("O", false);
let board = new Board();
let game = new Game(player1, player2, board);


btnPlay.addEventListener("click", (e) => {
    e.preventDefault();
    if (btnPlay.innerText === "Play") {
        game.startNewGame();
        game.registerMove();
    } else {
        game.resetGame();
    }
})
