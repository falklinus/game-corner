import { Display } from 'games/tetris/components'

const Tetris = () => {
  return (
    <div className='mx-auto grid grid-cols-1 gap-8 px-10 sm:grid-cols-2'>
      <div className=''>
        <h1 className='text-base font-bold sm:text-2xl'>Tetris</h1>
        <p className='text-xs sm:text-base'>Score points by completing entire rows!</p>
        <div className='mt-4 grid grid-cols-2 gap-2'>
          <div className='md:col-span-2'>
            <Display text='score' value={0} />
          </div>
          <Display text='rows' value={0} />
          <Display text='level' value={0} />
          <button
            // onClick={startGame}
            className='cursor-pointer rounded-lg border border-gray-700 bg-white p-2 font-bold outline-none transition duration-200 hover:bg-gray-700 hover:text-white md:col-span-2'
          >
            START GAME
          </button>
        </div>
      </div>
      <div>{/* <Board board={board} /> */}</div>
    </div>
  )
}

export default Tetris
