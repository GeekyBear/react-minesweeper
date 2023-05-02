import React from "react";
import styles from "./styles.module.css"

const BOARD_SIZE = 10;
const MINE_NUMBER = 10;

function MineSweeper() {
    let board = [];
    let gameover = false;
    let boardSize = BOARD_SIZE * BOARD_SIZE - MINE_NUMBER;
    let counter = 0;

    (function initializeField() {
        for (let files = 0; files < BOARD_SIZE; files++) {
            board[files] = [];
            for (let columns = 0; columns < BOARD_SIZE; columns++) {
                board[files][columns] = {
                    isMine: false,
                    isRevealed: false,
                    numNeighborMines: 0
                };
            }
        }
    })();

    (function plantMinesOnBoard() {

        let placedMines = 0;

        while (placedMines < MINE_NUMBER) {
            let row = Math.floor(Math.random() * BOARD_SIZE);
            let col = Math.floor(Math.random() * BOARD_SIZE);
            if (!board[row][col].isMine) {
                board[row][col].isMine = true;
            }
            placedMines++;
        }
    })()

    function reveal(e, file, col) {
        //let currentButton = document.getElementById(e.target.id);    

        if (gameover || board[file][col].isRevealed || board[file][col].isMine) {
            if (board[file][col].isMine) return alert("KABOOOOOM PERDISTE")
            if (board[file][col].isRevealed) return console.log('La celda ya fue revelada!');
            return console.log('No entro!')
        }
        console.log(board[file][col]);
        console.log(document.getElementById(e.target.id));
        board[file][col].isRevealed = true;
        counter++;

        if (counter === boardSize) return alert("Ganaste wei")
    }

    return (
        <div className={styles.container}>
            <h1>Minesweeper</h1>
            <div className={styles.board}>
                {
                    board
                        ? board.map((file, i) =>
                            file.map((column, j) => (
                                <button
                                    className={styles.square}
                                    id={i + j.toString()}
                                    onClick={(e) => reveal(e, i, j)}>
                                </button>
                            )))
                        : <p>loading</p>
                }
            </div>
        </div>
    )
}

export default MineSweeper;