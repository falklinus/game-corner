import TetrisGame from '../games/TetrisGame'
import '../styles/tetris.scss'

const Tetris = () => {
  return (
    <div className='tetris'>
      <div className='header'>
        <p className='title'>Welcome to Tetris!</p>
        <p className='description'>
          Complete entire rows to score points. Gather as many points as you can before the board
          fills up.
        </p>
      </div>
      <TetrisGame />
    </div>
  )
}

export default Tetris
