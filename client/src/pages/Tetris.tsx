import { TetrisGame } from 'games/tetris/components'

const Tetris = () => {
  return (
    <div className='mx-auto grid grid-cols-1 gap-4 px-10 max-w-[800px] sm:grid-cols-2'>
      <TetrisGame />
    </div>
  )
}

export default Tetris
