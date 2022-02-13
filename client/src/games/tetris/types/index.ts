export type UseTetris = [
  tetris: {
    pos: { x: number; y: number }
    shape: { color: string; fixed: boolean }[][]
    collided: boolean
  },
  updatePosition: ({ x, y, collided }: { x: number; y: number; collided: boolean }) => void,
  resetTetris: () => void
]
