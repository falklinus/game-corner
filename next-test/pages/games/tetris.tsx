import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Board, Display } from 'games/tetris/components'
import { useTetris, useBoard } from 'games/tetris/hooks'
import { checkCollision, createBoard } from 'games/tetris/util/helpers'

const tetris = () => {
  const [tetris, updatePosition, resetTetris]: [
    tetris: {
      pos: {
        x: number
        y: number
      }
      shape: {
        color: string
        fixed: boolean
      }[][]
      collided: boolean
    },
    updatePosition: ({
      x,
      y,
      collided,
    }: {
      x: number
      y: number
      collided: boolean
    }) => void,
    resetTetris: () => void
  ] = useTetris()

  const [board, setBoard]: [
    board: { color: string; fixed: boolean }[][],
    setBoard: Dispatch<SetStateAction<{ color: string; fixed: boolean }[][]>>
  ] = useBoard(tetris, resetTetris)

  const [gameOver, setGameOver] = useState(false)

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    if (gameOver) return
    console.log('hej')
    let move
    if (['ArrowLeft', 'a'].includes(key)) move = { x: -1, y: 0 }
    else if (['ArrowRight', 'd'].includes(key)) move = { x: 1, y: 0 }
    else if (['ArrowDown', 's'].includes(key)) move = { x: 0, y: 1 }

    if (move && !checkCollision(board, tetris, move)) {
      updatePosition({ x: move.x, y: move.y, collided: false })
    }
  }

  const handleKeyUp = ({ key }: KeyboardEvent) => {}

  const startGame = () => {
    setGameOver((prevGameOver) => !prevGameOver)
    setBoard(createBoard())
    resetTetris()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useEffect(() => {
    console.log(gameOver)
  }, [gameOver])

  console.log('re-render')
  return (
    <div className="mx-auto grid grid-cols-1 gap-8 px-8 sm:grid-cols-2">
      <div className="">
        <h1 className="text-base font-bold sm:text-2xl">Tetris</h1>
        <p className="text-xs sm:text-base">
          Score points by completing entire rows!
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="md:col-span-2">
            <Display text="score" value={0} />
          </div>
          <Display text="rows" value={0} />
          <Display text="level" value={0} />
          <button
            onClick={startGame}
            className="cursor-pointer rounded-lg border border-gray-700 bg-white p-2 font-bold outline-none transition duration-200 hover:bg-gray-700 hover:text-white md:col-span-2"
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

export default tetris
