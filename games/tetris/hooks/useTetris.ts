import { useState, useEffect } from 'react'

export const useTetris = () => {
  const [tetris, setTetris] = useState([
    ['pink', 'pink', ''],
    ['', 'pink', 'pink'],
    ['', '', ''],
  ])
  return [tetris]
}
