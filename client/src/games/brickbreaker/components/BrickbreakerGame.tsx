import { useFrameTime } from 'hooks'
import { useEffect, useRef, useState } from 'react'
import { useBall, useCanvas, useLevel, usePaddle } from '../hooks'
import { checkCollision } from '../util'

const BrickbreakerGame = () => {
  const [isWon, setIsWon] = useState(false)
  const [gameOver, setGameOver] = useState<boolean | null>(null)
  const [prompt, setPrompt] = useState('Click to Play!')
  const canvasRef = useRef(null)
  const canvas = useCanvas(canvasRef)
  const { paddle, draw: drawPaddle, resetPaddle } = usePaddle(canvas)
  const { bricks, draw: drawLevel, removeBrick, resetLevel } = useLevel(canvas)
  const { ball, draw: drawBall, updateDir, resetBall } = useBall(canvas)
  const [timing, setTiming] = useState<number | null>(null)

  const update = () => {
    if (gameOver) return

    if (ball.y > paddle.y + paddle.height) {
      setPrompt('GAME OVER!')
      setGameOver(true)
      setTiming(null)
      return
    }

    const collision = checkCollision(canvas, bricks, paddle, ball)
    //if (collision.collided) return setTiming(null)
    if (collision.collided) {
      if (collision.brick !== null) removeBrick(collision.brick)
      if (collision.dir) updateDir(collision.dir)
    }
    if (!canvas.ctx) return
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawPaddle()
    drawLevel()
    drawBall()
    if (bricks.length === 0) {
      setTiming(null)
      setGameOver(null)
      setPrompt('Congratulations! You have Won! Click to play again')
      return
    }
  }

  const canvasClick = () => {
    if (gameOver === null) return startGame()
    if (gameOver === true) {
      setGameOver(null)
      reset()
      setPrompt('Click to Play!')
    }
  }

  const reset = () => {
    if (!canvas.ctx) return
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height)
    resetPaddle()
    resetLevel()
    resetBall()
    drawPaddle()
    drawLevel()
    drawBall()
  }

  const startGame = () => {
    reset()
    setGameOver(false)
    setPrompt('Ready...')
    setTimeout(() => {
      setPrompt('Set...')
    }, 1000)
    setTimeout(() => {
      setPrompt('Go!')
    }, 2000)
    setTimeout(() => {
      setPrompt('')
      setTiming(1000 / 60)
    }, 3000)
  }

  useFrameTime(() => update(), timing)

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-2xl font-semibold'>Brick Breaker</h1>
          <p className=''>Score points by clearing the bricks!</p>
        </div>
        {/* <button
          onClick={startGame}
          className='cursor-pointer rounded-lg p-2 border border-gray-700 bg-white font-bold outline-none transition duration-200 hover:bg-gray-700 hover:text-white'
        >
          START GAME
        </button> */}
      </div>
      <div>
        <span className='pointer-events-none text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          {prompt}
        </span>
        <canvas
          onClick={canvasClick}
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
