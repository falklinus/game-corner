import { useState } from 'react'
import { GRID_SIZE, getLevel, sprite } from '../util'

interface Brick {
  x: number
  y: number
  width: number
  height: number
  // color: string
}

export const useLevel = (canvas: {
  ctx: CanvasRenderingContext2D | null
  width: number
  height: number
  left: number
}) => {
  const [level, setLevel] = useState(0)
  const [bricks, setBricks] = useState<any>(getLevel(level))
  const ratio = {
    width: canvas.width / GRID_SIZE.width,
    height: canvas.height / (2 * GRID_SIZE.height),
  }

  const drawLevel = () => {
    if (!canvas.ctx) return
    for (let i = 0; i < bricks.length; i++) {
      canvas.ctx.drawImage(
        sprite,
        bricks[i].img.x,
        bricks[i].img.y,
        bricks[i].img.width,
        bricks[i].img.height,
        bricks[i].pos.x * ratio.width,
        bricks[i].pos.y * ratio.height,
        ratio.width,
        ratio.height
      )
    }
  }

  return { drawLevel }
}
