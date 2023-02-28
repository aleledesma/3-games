import { useEffect, useState } from 'react'
import './TicTacToe.css'

const cellsInitialState = new Array(9).fill('')
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const gameStates = {
  playing: 'playing',
  draw: 'draw',
  winX: 'winX',
  winO: 'winO'
}
const gameMessages = {
  playing: null,
  draw: 'The game ended in a draw',
  winX: 'X has won the game',
  xinO: 'O has won the game'
}
const TicTacToe = () => {
  const [cells, setCells] = useState(cellsInitialState)
  const [turn, setTurn] = useState('X')
  const [gameState, setGameState] = useState(gameStates.playing)

  useEffect(() => {
    let winner
    for (const player of ['X', 'O']) {
      const hasWon = winCombinations.some(combination => combination.every(index => cells[index] === player))
      if (hasWon) winner = player
    }
    if (winner === 'X') setGameState(gameStates.winX)
    else if (winner === 'O') setGameState(gameStates.winO)
    else if (!cells.includes('')) setGameState(gameStates.draw)
  }, [cells])

  function handleClickCell (index) {
    if (cells[index] !== '') return
    if (gameState !== gameStates.playing) return
    const copyCells = [...cells]
    copyCells[index] = turn
    setCells(copyCells)

    setTurn(turn === 'X' ? 'O' : 'X')
  }

  function handlePlayAgain () {
    setCells(cellsInitialState)
    setTurn('X')
    setGameState(gameStates.playing)
  }

  return (
    <>
      <h1 className='ticTitle'>Tic Tac Toe</h1>
      <p className='ticTurn'>It is the turn of {turn}</p>
      <div className='cellsContainer'>
        {cells.map((cell, index) => <div onClick={() => handleClickCell(index)} className='cell' key={index} >{cell}</div>)}
      </div>
      {gameState !== gameStates.playing && (
        <div className='resultContainer'>
          <p className='resultMessage'>{gameMessages[gameState]}</p>
          <button className='resultButton' onClick={handlePlayAgain}>Play Again</button>
        </div>
      )}
    </>
  )
}

export default TicTacToe
