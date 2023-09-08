// faire un plateau de tic tac toe
export default class Board {
    constructor() {
        this.initializeBoard();
    }

    initializeBoard() {
        this.grid = [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]
        ];
        this.hasWinner = false;
    }

    // afficher le plateau
    displayBoard() {
        let board = document.querySelector("#board");
        board.innerHTML = "";
        for (let i = 0; i < this.grid.length; i++) {
            let row = document.createElement("div");
            row.classList.add("row");
            for (let j = 0; j < this.grid[i].length; j++) {
                let cell = document.createElement("button");
                cell.classList.add("case");
                // ajouter l'id "btn-Y-X" à chaque bouton
                cell.id = `btn-${i}-${j}`;
                cell.innerHTML = this.grid[i][j];
                row.appendChild(cell);
            }
            board.appendChild(row);
        }
    }

    // ajouter un symbole sur le plateau
    placeMove(row, col, symbol) {
        // si la case est vide on place le symbole sinon on retourne false
        if (this.grid[row][col] === "-") {
            this.grid[row][col] = symbol;
            this.displayBoard();
            return true
        }
        else {
            return false;
        }
    }

    // vérifier si un joueur a gagné
    checkVictory() {
        // vérifier les lignes
        for (let i = 0; i < this.grid.length; i++) {
            if (this.grid[i][0] !== "-" && this.grid[i][0] === this.grid[i][1] && this.grid[i][0] === this.grid[i][2]) {
                this.hasWinner = true;
                return this.grid[i][0];
            }
        }
        // vérifier les colonnes
        for (let j = 0; j < this.grid.length; j++) {
            if (this.grid[0][j] !== "-" && this.grid[0][j] === this.grid[1][j] && this.grid[0][j] === this.grid[2][j]) {
                this.hasWinner = true;
                return this.grid[0][j];
            }
        }
        // vérifier les diagonales
        if (this.grid[0][0] !== "-" && this.grid[0][0] === this.grid[1][1] && this.grid[0][0] === this.grid[2][2]) {
            this.hasWinner = true;
            return this.grid[0][0];
        }
        if (this.grid[0][2] !== "-" && this.grid[0][2] === this.grid[1][1] && this.grid[0][2] === this.grid[2][0]) {
            this.hasWinner = true;
            return this.grid[0][2];
        }
        return false;
    }

    // vérifier si le plateau est plein
    isFull() {
        for (let i = 0; i < this.grid.length; i++) {
            if (this.grid[i].includes("-")) {
                return false;
            }
        }
        return true;
    }

    // reset le plateau
    resetBoard(){
        this.initializeBoard();
        this.displayBoard();
    }
}