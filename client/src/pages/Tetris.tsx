import { useState, useEffect } from 'react'

import { Display, Board, Cell } from 'games/tetris/components'
import { useTetris, useBoard } from 'games/tetris/hooks'

import { UseBoard, UseTetris } from 'games/tetris/types'
import { checkCollision, createBoard } from 'games/tetris/util'

const Tetris = () => {
  const [tetris, updatePosition, resetTetris, nextTetris]: UseTetris = useTetris()
  const [board, setBoard]: UseBoard = useBoard(tetris, resetTetris)
  const [nextPreview, setNextPreview] = useState(
    Array.from(Array(4), () => [...Array.from(Array(4), () => 'transparent')])
  )

  const [gameOver, setGameOver] = useState<boolean | null>(null)

  const startGame = () => {
    setGameOver(false)
    setBoard(createBoard())
    resetTetris()
  }

  useEffect(() => {
    const move = (direction: number) => {
      if (checkCollision(board, tetris, { x: direction, y: 0 })) return
      updatePosition({ pos: { x: direction, y: 0 }, collided: false })
    }

    const drop = () => {
      if (!checkCollision(board, tetris, { x: 0, y: 1 }))
        return updatePosition({ pos: { x: 0, y: 1 }, collided: false })
      if (tetris.pos.y < 1) {
        setGameOver(true)
        return
      }
      updatePosition({ pos: { x: 0, y: 0 }, collided: true })
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

  useEffect(() => {
    let newNextPreview = Array.from(Array(4), () => [...Array.from(Array(4), () => 'transparent')])
    for (let y = 0; y < nextTetris.shape.length; y++) {
      for (let x = 0; x < nextTetris.shape[y].length; x++) {
        newNextPreview[y][x] = nextTetris.shape[y][x].color
          ? nextTetris.shape[y][x].color
          : 'transparent'
      }
    }
    setNextPreview(newNextPreview)
  }, [nextTetris])

  console.log('re-render')

  return (
    <div className='mx-auto grid grid-cols-1 gap-4 px-10 sm:grid-cols-2'>
      <div className=''>
        <h1 className='text-base font-bold sm:text-2xl'>Tetris</h1>
        <p className='text-xs sm:text-base'>Score points by completing entire rows!</p>
        <div className='mt-4 grid grid-cols-2 gap-2'>
          {gameOver === null ? (
            <>
              <p className='col-span-2 text-sm'>Are you ready?</p>
              <button
                onClick={startGame}
                className='cursor-pointer rounded-lg border-gray-700 bg-white text-xs sm:text-xl p-2 font-bold outline-none transition duration-200 hover:bg-gray-700 hover:text-white sm:col-span-2'
              >
                START GAME
              </button>
            </>
          ) : gameOver ? (
            <div>Game Over</div>
          ) : (
            <>
              <div className='grid sm:grid-cols-2 col-span-1 sm:col-span-2 gap-2'>
                <div className='sm:col-span-2'>
                  <Display text='score' value={0} />
                </div>
                <Display text='rows' value={0} />
                <Display text='level' value={0} />
              </div>
              <div className='sm:col-start-2 row-start-1 flex justify-center items-center gap-4'>
                <p className='self-start font-bold'>Next</p>
                <div className='grid grid-cols-4'>
                  {nextPreview.map((row: string[]) =>
                    row.map((color: string) => <Cell color={color} />)
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {gameOver !== null && <Board board={board} />}
    </div>
  )
}

export default Tetris
