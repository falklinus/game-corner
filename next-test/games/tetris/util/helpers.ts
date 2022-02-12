export const createBoard = () =>
  Array.from(Array(20), () => [
    ...Array.from(Array(10), () => ({ color: '', fixed: false })),
  ])

export const checkCollision = (
  board: { color: string; fixed: boolean }[][],
  tetris: {
    shape: { color: string; fixed: boolean }[][]
    pos: { x: number; y: number }
    collided: boolean
  },
  move: { x: number; y: number }
) => {
  console.log(tetris)
  for (let y = 0; y < tetris.shape.length; y++) {
    for (let x = 0; x < tetris.shape[y].length; x++) {
      if (tetris.shape[y][x].color) {
        console.log(tetris.pos)
        if (tetris.pos.x + x + move.x >= board[0].length) {
          return true
        }
        if (tetris.pos.x + x + move.x <= 0) return true
        if (tetris.pos.y + y + move.y >= board.length) return true
        if (board[tetris.pos.y + y + move.y][tetris.pos.x + x + move.x].fixed)
          return true
      }
    }
  }
  return false
}
