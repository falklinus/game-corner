// import { Canvas } from '.'

import { useFrameTime } from 'hooks'
import { useRef } from 'react'
import { useCanvas, useLevel, usePaddle } from '../hooks'
// import { spriteSheet } from '../util'

const BrickbreakerGame = () => {
  const canvasRef = useRef(null)
  const canvas = useCanvas(canvasRef)
  const { paddle, drawPaddle } = usePaddle(canvas)
  const { drawLevel } = useLevel(canvas)

  const update = () => {
    if (!canvas.ctx) return
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawPaddle()
    drawLevel()
  }

  useFrameTime(() => update(), 1000 / 30)

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-2xl font-semibold'>Brick Breaker</h1>
          <p className=''>Score points by clearing the bricks!</p>
        </div>
        <button
          //   onClick={startGame}
          className='cursor-pointer rounded-lg p-2 border border-gray-700 bg-white font-bold outline-none transition duration-200 hover:bg-gray-700 hover:text-white'
        >
          START GAME
        </button>
      </div>
      <div>
        <canvas
          ref={canvasRef}
          width={canvas.width}
          height={canvas.height}
          className='border-4 border-gray-700 bg-black bg-opacity-10 mx-auto rounded-lg'
        />
      </div>
    </div>
  )
}

export default BrickbreakerGame
