import { useState, useCallback } from 'react'
import { UseTetris } from '../types'

export const useTetris = (): UseTetris => {
  const [tetris, setTetris] = useState({
    pos: { x: 0, y: 0 },
    shape: [[{ color: '', fixed: false }]],
    collided: false,
  })

  const updatePosition = ({ x, y, collided }: { x: number; y: number; collided: boolean }) => {
    setTetris((prevTetris) => ({
      ...prevTetris,
      pos: {
        x: prevTetris.pos.x + x,
        y: prevTetris.pos.y + y,
      },
      collided,
    }))
  }

  const resetTetris = useCallback(() => {
    setTetris({
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
    })
  }, [])

  return [tetris, updatePosition, resetTetris]
}
