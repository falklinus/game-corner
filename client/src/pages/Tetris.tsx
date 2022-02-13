import { Dispatch, SetStateAction, useState, useEffect } from 'react'

import { Display, Board } from 'games/tetris/components'
import { useTetris, useBoard } from 'games/tetris/hooks'

import { UseTetris } from 'games/tetris/types'
import { checkCollision, createBoard } from 'games/tetris/util'

const Tetris = () => {
  const [tetris, updatePosition, resetTetris]: UseTetris = useTetris()
  const [board, setBoard]: [
    board: { color: string; fixed: boolean }[][],
    setBoard: Dispatch<SetStateAction<{ color: string; fixed: boolean }[][]>>
  ] = useBoard(tetris, resetTetris)

  const [gameOver, setGameOver] = useState(true)

  const startGame = () => {
    setGameOver(false)
    setBoard(createBoard())
    resetTetris()
  }

  useEffect(() => {
    const move = (direction: number) => {
      if (checkCollision(board, tetris, { x: direction, y: 0 })) return
      updatePosition({ x: direction, y: 0, collided: false })
    }

    const drop = () => {
      console.log(checkCollision(board, tetris, { x: 0, y: 1 }))
      if (!checkCollision(board, tetris, { x: 0, y: 1 }))
        return updatePosition({ x: 0, y: 1, collided: false })
      if (tetris.pos.y < 1) {
        setGameOver(true)
        return
      }
      updatePosition({ x: 0, y: 0, collided: true })
    }

    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (gameOver) return
      if (['ArrowLeft', 'a'].includes(key)) return move(-1)
      if (['ArrowRight', 'd'].includes(key)) return move(1)
      if (['ArrowDown', 's'].includes(key)) return drop()
    }

    const handleKeyUp = ({ key }: KeyboardEvent) => {}

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [board, gameOver, tetris, updatePosition])

  console.log('re-render')

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
            onClick={startGame}
            className='cursor-pointer rounded-lg border border-gray-700 bg-white p-2 font-bold outline-none transition duration-200 hover:bg-gray-700 hover:text-white md:col-span-2'
          >
            START GAME
          </button>
        </div>
      </div>
      <div>
        <Board board={board} />
      </div>
    </div>
  )
}

export default Tetris
