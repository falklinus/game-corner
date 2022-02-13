import { useState, useEffect } from 'react'
import { createBoard } from 'games/tetris/util'
import { Grid, GridRow, Tetris, UseBoard } from '../types'

export const useBoard = (tetris: Tetris, resetTetris: () => void): UseBoard => {
  const [board, setBoard] = useState(createBoard())
  useEffect(() => {
    const updateBoard = (board: Grid) => {
      let newBoard: Grid = []

      for (let y = 0; y < board.length; y++) {
        let row: GridRow = []
        for (let x = 0; x < board[0].length; x++) {
          row.push(board[y][x].fixed ? board[y][x] : { color: '', fixed: false })
        }
        newBoard.push(row)
      }

      for (let y = 0; y < tetris.shape.length; y++) {
        for (let x = 0; x < tetris.shape[0].length; x++) {
          if (tetris.shape[y][x].color) {
            newBoard[y + tetris.pos.y][x + tetris.pos.x] = {
              ...tetris.shape[y][x],
              fixed: tetris.collided ? true : false,
            }
          }
        }
      }

      if (tetris.collided) {
        resetTetris()
      }

      return newBoard
    }

    setBoard((prevBoard) => updateBoard(prevBoard))
  }, [tetris, resetTetris])

  return [board, setBoard]
}
