import {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react'
import { createBoard } from '../util/helpers'

export const useBoard = (
  tetris: {
    pos: { x: number; y: number }
    shape: { color: string; fixed: boolean }[][]
    collided: boolean
  },
  resetTetris: () => void
): [
  board: { color: string; fixed: boolean }[][],
  setBoard: Dispatch<SetStateAction<{ color: string; fixed: boolean }[][]>>
] => {
  const [board, setBoard] = useState(createBoard())
  useEffect(() => {
    const updateBoard = (board: { color: string; fixed: boolean }[][]) => {
      let newBoard = []

      for (let y = 0; y < board.length; y++) {
        let row: { color: string; fixed: boolean }[] = []
        for (let x = 0; x < board[0].length; x++) {
          if (board[y][x].fixed) row.push(tetris.shape[y][x])
          else row.push({ color: '', fixed: false })
        }
        newBoard.push(row)
      }

      for (let y = 0; y < tetris.shape.length; y++) {
        for (let x = 0; x < tetris.shape[0].length; x++) {
          newBoard[y + tetris.pos.y][x + tetris.pos.x] = tetris.shape[y][x]
        }
      }

      return newBoard
    }

    setBoard((prevBoard) => updateBoard(prevBoard))
  }, [tetris, resetTetris])

  return [board, setBoard]
}
