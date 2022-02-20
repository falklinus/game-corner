import { useEffect, useState } from 'react'
import { UseGameStats } from '../types'

export const useGameStats = (rowsCleared: number): UseGameStats => {
  const [score, setScore] = useState(0)
  const [rows, setRows] = useState(0)
  const [level, setLevel] = useState(0)

  useEffect(() => {
    const calcScore = () => {
      const linePoints = [40, 100, 300, 1200]
      if (rowsCleared === 0) return
      setScore((prevScore) => prevScore + linePoints[rowsCleared - 1] * level)
      setRows((prevRows) => {
        console.log('prevrows', prevRows)
        return prevRows + rowsCleared
      })
    }
    calcScore()
  }, [rowsCleared, level])

  return [score, setScore, rows, setRows, level, setLevel]
}
