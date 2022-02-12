import { createContext, useContext } from 'react'
export type Tetris = {
  tetris: {
    pos: { x: number; y: number }
    shape: { color: string; fixed: boolean }[][]
    collided: boolean
  }
  setTetris: (prevTetris: {
    pos: { x: number; y: number }
    shape: { color: string; fixed: boolean }[][]
    collided: boolean
  }) => void
}
export const TetrisContext = createContext<Tetris>({
  tetris: {
    pos: { x: 3, y: 0 },
    shape: [
      [
        { color: 'pink', fixed: false },
        { color: 'pink', fixed: false },
        { color: '', fixed: false },
      ],
      [
        { color: '', fixed: false },
        { color: 'pink', fixed: false },
        { color: 'pink', fixed: false },
      ],
      [
        { color: '', fixed: false },
        { color: '', fixed: false },
        { color: '', fixed: false },
      ],
    ],
    collided: false,
  },
  setTetris: () => {},
})

export const useTetris = () => useContext(TetrisContext)
