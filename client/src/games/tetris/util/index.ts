import { Grid, GridRow, Position, Tetris } from '../types'

const SHAPES: boolean[][][] = [
  [
    [true, true],
    [true, true],
  ],
  [
    [true, true],
    [true, true],
  ],
  [
    [true, true],
    [true, true],
  ],
  [
    [true, true],
    [true, true],
  ],
  [
    [false, false, false],
    [true, true, false],
    [false, true, true],
  ],
  [
    [false, true, false],
    [true, true, false],
    [true, false, false],
  ],
  [
    [false, true, true],
    [true, true, false],
    [false, false, false],
  ],
  [
    [false, true, false],
    [false, true, true],
    [false, false, true],
  ],
  [
    [false, true, false],
    [false, true, false],
    [false, true, true],
  ],
  [
    [false, false, false],
    [true, true, true],
    [true, false, false],
  ],
  [
    [false, true, false],
    [false, true, false],
    [true, true, false],
  ],
  [
    [false, false, false],
    [true, true, true],
    [false, false, true],
  ],
  [
    [false, true, false],
    [true, true, true],
    [false, false, false],
  ],
  [
    [false, true, false],
    [false, true, true],
    [false, true, false],
  ],
  [
    [false, false, false],
    [true, true, true],
    [false, true, false],
  ],
  [
    [false, true, false],
    [true, true, false],
    [false, true, false],
  ],
  [
    [false, false, false, false],
    [true, true, true, true],
    [false, false, false, false],
    [false, false, false, false],
  ],
  [
    [false, false, true, false],
    [false, false, true, false],
    [false, false, true, false],
    [false, false, true, false],
  ],
  [
    [false, false, false, false],
    [false, false, false, false],
    [true, true, true, true],
    [false, false, false, false],
  ],
  [
    [false, true, false, false],
    [false, true, false, false],
    [false, true, false, false],
    [false, true, false, false],
  ],
]

const COLORS = ['blue', 'orange', 'red', 'yellow', 'green', 'pink', 'purple']

export const getRandomTetris = (): Tetris => {
  const randomShape = SHAPES[Math.floor(Math.random() * SHAPES.length)]
  const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)]
  let randomTetris: Tetris = {
    pos: { x: Math.floor(Math.random() * (10 - SHAPES[0].length)), y: 0 },
    shape: [],
    collided: false,
  }
  for (let y = 0; y < randomShape.length; y++) {
    let row: GridRow = []
    for (let x = 0; x < randomShape[y].length; x++) {
      row.push(
        randomShape[y][x] ? { color: randomColor, fixed: false } : { color: '', fixed: false }
      )
    }
    randomTetris.shape.push(row)
  }
  return randomTetris
}

export const createBoard = (): Grid =>
  Array.from(Array(20), () => [...Array.from(Array(10), () => ({ color: '', fixed: false }))])

export const checkCollision = (board: Grid, tetris: Tetris, move: Position): boolean => {
  for (let y = 0; y < tetris.shape.length; y++) {
    for (let x = 0; x < tetris.shape[y].length; x++) {
      if (tetris.shape[y][x].color) {
        if (tetris.pos.x + x + move.x >= board[0].length) {
          return true
        }
        if (tetris.pos.x + x + move.x < 0) return true
        if (tetris.pos.y + y + move.y >= board.length) return true
        if (board[tetris.pos.y + y + move.y][tetris.pos.x + x + move.x].fixed) return true
      }
    }
  }
  return false
}
