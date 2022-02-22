import { useCallback, useEffect, useState } from 'react'
import { Position } from '../types'

export const usePaddle = (
  canvasPosition: Position,
  canvasContext: CanvasRenderingContext2D | null | undefined
) => {
  const [paddle, setPaddle] = useState<{
    x: number | undefined
    y: number | undefined
    width: number
    height: number
  }>({
    x: undefined,
    y: undefined,
    width: 100,
    height: 10,
  })
  //const [mouse, setMouse] = useState({ pos: { x: undefined, y: undefined } })

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!canvasPosition) return
      setPaddle((prevPaddle) => ({
        ...prevPaddle,
        x:
          e.clientX + paddle.width / 2 < (canvasPosition.width as number)
            ? e.clientX > paddle.width / 2
              ? e.clientX - paddle.width / 2
              : 0
            : (canvasPosition.width as number) - paddle.width,
        y: (canvasPosition.height as number) - paddle.height - 10,
      }))
    },
    [canvasPosition, paddle]
  )

  const drawPaddle = () => {
    if (!canvasContext) return
    canvasContext.fillStyle = 'rgb(55,65,81)'
    canvasContext.fillRect(paddle.x as number, paddle.y as number, paddle.width, paddle.height)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return [drawPaddle]
}
