import { useCallback, useEffect, useState } from 'react'

export const usePaddle = (canvas: {
  ctx: CanvasRenderingContext2D | null
  width: number
  height: number
  left: number
}) => {
  const [paddle, setPaddle] = useState<{
    x: number | undefined
    y: number
    width: number
    height: number
  }>({
    x: canvas.width / 2 - 50,
    y: canvas.height - 30,
    width: 100,
    height: 15,
  })

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      setPaddle((prevPaddle) => {
        return {
          ...prevPaddle,
          x:
            e.clientX > canvas.width - prevPaddle.width / 2 + canvas.left
              ? canvas.width - prevPaddle.width
              : e.clientX < prevPaddle.width / 2 + canvas.left
              ? 0
              : e.clientX - prevPaddle.width / 2 - canvas.left,
        }
      })
    },
    [canvas.width, canvas.height, canvas.left]
  )

  const draw = () => {
    if (!canvas.ctx) return
    canvas.ctx.fillStyle = 'rgb(55,65,81)'
    canvas.ctx.fillRect(paddle.x as number, paddle.y as number, paddle.width, paddle.height)
  }

  const resetPaddle = () => {
    setPaddle({
      x: canvas.width / 2 - 50,
      y: canvas.height - 30,
      width: 100,
      height: 15,
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return { paddle, draw, resetPaddle }
}
