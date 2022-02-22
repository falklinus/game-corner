import { Canvas } from '.'

const BallbreakerGame = () => {
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
      <div>
        <Canvas />
      </div>
    </div>
  )
}

export default BallbreakerGame
