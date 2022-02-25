import { useState } from 'react'

export const useBall = (canvas: {
  ctx: CanvasRenderingContext2D | null
  width: number
  height: number
  left: number
}) => {
  const [ball, setBall] = useState({
    x: canvas.width / 2,
    y: canvas.height * (2 / 3),
    radius: 10,
    velocity: 5,
    dir: {
      x: 0,
      y: 1,
    },
  })

  const updateDir = (dir: { x: number; y: number }) => {
    setBall((prevBall) => ({
      ...prevBall,
      dir,
    }))
  }

  const update = () => {
    setBall((prevBall) => ({
      ...prevBall,
      x: prevBall.x + prevBall.dir.x * prevBall.velocity,
      y: prevBall.y + prevBall.dir.y * prevBall.velocity,
    }))
  }

  const draw = () => {
    update()
    if (!canvas.ctx) return
    canvas.ctx.fillStyle = 'rgb(55,65,81)'
    canvas.ctx.beginPath()
    canvas.ctx.arc(ball.x, ball.y, 10, 0, Math.PI * 2)
    canvas.ctx.fill()
  }

  const resetBall = () => {
    setBall({
      x: canvas.width / 2,
      y: canvas.height * (2 / 3),
      radius: 10,
      velocity: 5,
      dir: {
        x: 0,
        y: 1,
      },
    })
  }

  return { ball, draw, updateDir, resetBall }
}
