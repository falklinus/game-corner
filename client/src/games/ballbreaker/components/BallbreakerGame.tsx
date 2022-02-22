import { useEffect, useState } from 'react'

const BallbreakerGame = () => {
  const [canvasize, setCanvasSize] = useState({
    width: window.innerWidth - 80,
    height: (window.innerWidth - 80) / 2,
  })
  const handleResize = () => {
    setCanvasSize({ width: window.innerWidth - 80, height: (window.innerWidth - 80) / 2 })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-2xl font-semibold'>Ballbreaker</h1>
          <p className=''>Score points by clearing the bricks!</p>
        </div>
        <button
          //   onClick={startGame}
          className='cursor-pointer rounded-lg p-2 border border-gray-700 bg-white font-bold outline-none transition duration-200 hover:bg-gray-700 hover:text-white'
        >
          START GAME
        </button>
      </div>
      <canvas
        width={canvasize.width}
        height={canvasize.height}
        className='bg-gray-700 mx-auto rounded-lg'
      ></canvas>
    </div>
  )
}

export default BallbreakerGame
