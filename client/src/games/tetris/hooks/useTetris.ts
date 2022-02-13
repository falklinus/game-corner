import { useState, useCallback } from 'react'
import { Position, Tetris, UseTetris } from '../types'
import { getRandomTetris } from '../util'

export const useTetris = (): UseTetris => {
  const [tetris, setTetris] = useState<Tetris>({
    pos: { x: 0, y: 0 },
    shape: [[{ color: '', fixed: false }]],
    collided: false,
  })
  const [nextTetris, setNextTetris] = useState<Tetris>(getRandomTetris())

  const updatePosition = ({ pos: { x, y }, collided }: { pos: Position; collided: boolean }) => {
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
    setNextTetris((nextTetris) => {
      setTetris(nextTetris)
      return getRandomTetris()
    })
  }, [])

  return [tetris, updatePosition, resetTetris, nextTetris]
}
