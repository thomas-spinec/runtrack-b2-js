export default class Game {
    count;
    constructor(player1, player2, board) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = board;
        this.currentTurn = this.player1;
    }

    // initialiser une nouvelle partie
    startNewGame() {
        this.board.initializeBoard();
        this.board.displayBoard();
        let player = document.querySelector("#current-player");
        player.innerText = "Au tour du symbole " + this.currentTurn.symbol + " de jouer"
        let turn = document.querySelector("#turn");
        this.count = 1;
        turn.innerHTML = "Tour n°" + this.count;
    }

    // faire le move
    makeMove(row, col) {
        if (this.board.placeMove(row, col, this.currentTurn.symbol)) {
            // si le move est valide on check si la partie est terminée
            if (this.checkGameOver()) {
                this.announceWinner();
            }
            else {
                // sinon on change de joueur
                this.switchTurn();
                this.registerMove();
            }
        }
    }

    // rajoute les event listeners sur les boutons
    registerMove() {
        let buttons = document.querySelectorAll(".case");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", (event) => {
                let row = event.target.id.split("-")[1];
                let col = event.target.id.split("-")[2];
                this.makeMove(row, col);
            });
        }
    }

    // changer de joueur
    switchTurn() {
        if (this.currentTurn === this.player1) {
            this.currentTurn = this.player2;
        }
        else {
            this.currentTurn = this.player1;
        }
        let player = document.querySelector("#current-player");
        player.innerText = "Au tour du symbole " + this.currentTurn.symbol + " de jouer"
        let turn = document.querySelector("#turn");
        this.count++;
        turn.innerHTML = "Tour n°" + this.count;

    }

    // verifier si la partie est terminée (gagnant ou board plein)
    checkGameOver() {
        return (this.board.checkVictory() || this.board.isFull());
    }

    // afficher le gagnant
    announceWinner() {
        let message = document.querySelector("#message");
        let btnPlay = document.querySelector("#play");
        // s'il y a un gagnant
        if (this.board.checkVictory()) {
            message.innerHTML = `Le joueur ${this.currentTurn.symbol} a gagné !`;
        } else if (this.board.isFull()) {
            message.innerHTML = `Match nul !`;
        }
        btnPlay.innerText = "Rejouer";
    }

    // reset la partie
    resetGame() {
        this.board.resetBoard();
        this.currentTurn = this.player1;
        let message = document.querySelector("#message");
        message.innerHTML = "";
        let player = document.querySelector("#current-player");
        player.innerText = "Cliquez sur Play pour commencer une nouvelle partie";
        let btnPlay = document.querySelector("#play");
        btnPlay.innerText = "Play";
        let turn = document.querySelector("#turn");
        turn.innerHTML = "";
        this.count = 1;
    }

}