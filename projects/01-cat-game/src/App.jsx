import { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

import { Square } from './components/Square.jsx';
import { TURNS } from './constans.js';
import { checkWinnerFrom, checkEndGame } from './logic/board.js';
import { WinnerModal } from './components/WinnerModel.jsx';
import { Board } from './components/Board.jsx';
import { saveGameToStorage, resetGameToStorage } from './logic/storage/index.js';

function App() {
  /* NOTA */
  /* Los hooks no deben de ir dentro de ninguna sentencia de control (if, for, switch. etc.) */

  // const [board, setBoard] = useState(Array(9).fill(null));
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });

  // const [turn, setTurn] = useState(TURNS.X);
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ? turnFromStorage : TURNS.X
  });

  // Null -> sin ganador; False -> Empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameToStorage()
  };

  const updateBoard = (index) => {
    // No actualizar si ya tiene algo X u O
    if (board[index] || winner) return;

    // Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar el turno del jugador
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardar partida
    saveGameToStorage({ board: newBoard, turn: newTurn })

    // Revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      resetGameToStorage()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
      resetGameToStorage()
    }
  }

  return (
    <main className='board'>
      <h1>Gato</h1>

      <Board board={board} updateBoard={updateBoard} />

      <h2 className='turn-text'>Turno</h2>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
      <section>
        <button onClick={resetGame}>
          Reinicar
        </button>
      </section>
    </main >
  )
}

export default App
