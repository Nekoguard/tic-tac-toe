class TicTacToe {
    constructor() {
        this.game = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        this.currentSymbol = 'x'
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.game[rowIndex][columnIndex] === null) {
            this.game[rowIndex][columnIndex] = this.currentSymbol
            this.currentSymbol = this.currentSymbol === "x" ? "o" : "x";
        }
    }

    isFinished() {
        return this.isDraw() || this.getWinner() != null;
    }

    getWinner() {
        if (this.game[0][0] === 'x' && this.game[0][1] === 'x' && this.game[0][2] === 'x' ||
            this.game[1][0] === 'x' && this.game[1][1] === 'x' && this.game[1][2] === 'x' ||
            this.game[2][0] === 'x' && this.game[2][1] === 'x' && this.game[2][2] === 'x' ||

            this.game[0][0] === 'x' && this.game[1][0] === 'x' && this.game[2][0] === 'x' ||
            this.game[0][1] === 'x' && this.game[1][1] === 'x' && this.game[2][1] === 'x' ||
            this.game[0][2] === 'x' && this.game[1][2] === 'x' && this.game[2][2] === 'x' ||

            this.game[0][0] === 'x' && this.game[1][1] === 'x' && this.game[2][2] === 'x' ||
            this.game[2][0] === 'x' && this.game[1][1] === 'x' && this.game[0][2] === 'x'
        ) {
            return 'x';
        } else if (this.game[0][0] === 'o' && this.game[0][1] === 'o' && this.game[0][2] === 'o' ||
            this.game[1][0] === 'o' && this.game[1][1] === 'o' && this.game[1][2] === 'o' ||
            this.game[2][0] === 'o' && this.game[2][1] === 'o' && this.game[2][2] === 'o' ||

            this.game[0][0] === 'o' && this.game[1][0] === 'o' && this.game[2][0] === 'o' ||
            this.game[0][1] === 'o' && this.game[1][1] === 'o' && this.game[2][1] === 'o' ||
            this.game[0][2] === 'o' && this.game[1][2] === 'o' && this.game[2][2] === 'o' ||

            this.game[0][0] === 'o' && this.game[1][1] === 'o' && this.game[2][2] === 'o' ||
            this.game[2][0] === 'o' && this.game[1][1] === 'o' && this.game[0][2] === 'o') {
            return 'o';
        }
        return null;
    }

    noMoreTurns() {
        return this.game.every((field) => !(field.includes(null)));
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.game[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
