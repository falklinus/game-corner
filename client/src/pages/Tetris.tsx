import { useState, useEffect, useCallback } from 'react'

import { Display, Board, NextTetris } from 'games/tetris/components'
import {
	useTetris,
	useBoard,
	useGameStats,
	useFrameTime,
} from 'games/tetris/hooks'

import { UseBoard, UseGameStats, UseTetris } from 'games/tetris/types'
import { checkCollision, createBoard } from 'games/tetris/util'

const Tetris = () => {
	const [
		tetris,
		updatePosition,
		resetTetris,
		rotateTetris,
		nextTetris,
	]: UseTetris = useTetris()
	const [board, setBoard, rowsCleared]: UseBoard = useBoard(tetris, resetTetris)
	const [score, setScore, rows, setRows, level, setLevel]: UseGameStats =
		useGameStats(rowsCleared)
	const [nextPreview, setNextPreview] = useState(
		Array.from(Array(4), () => [...Array.from(Array(4), () => 'transparent')])
	)

	const [gameOver, setGameOver] = useState<boolean | null>(null)
	const [dropTime, setDropTime] = useState<number | null>(null)

	const startGame = () => {
		setGameOver(false)
		setBoard(createBoard())
		resetTetris()
		setDropTime(1000)
		setScore(0)
		setRows(0)
		setLevel(0)
	}

	const move = useCallback(
		(direction: number) => {
			if (checkCollision(board, tetris, { x: direction, y: 0 })) return
			updatePosition({ pos: { x: direction, y: 0 }, collided: false })
		},
		[board, tetris, updatePosition]
	)

	const drop = useCallback(() => {
		if (rows > (level + 1) * 10) {
			setLevel((prevLevel: number) => prevLevel + 1)
			setDropTime(1000 / (level + 1) + 200)
		}
		if (!checkCollision(board, tetris, { x: 0, y: 1 }))
			return updatePosition({ pos: { x: 0, y: 1 }, collided: false })
		if (tetris.pos.y < 1) {
			setGameOver(true)
			setDropTime(null)
			return
		}
		updatePosition({ pos: { x: 0, y: 0 }, collided: true })
	}, [board, level, rows, setLevel, tetris, updatePosition])

	const handleKeyDown = useCallback(
		({ key }: KeyboardEvent) => {
			if (gameOver) return
			if (['ArrowLeft'].includes(key)) return move(-1)
			if (['ArrowRight'].includes(key)) return move(1)
			if (['ArrowDown'].includes(key)) {
				setDropTime(null)
				drop()
				return
			}
			if (['ArrowUp'].includes(key)) return rotateTetris(board, 1)
			// if (['ArrowRight'].includes(key)) return rotateTetris(board, 1)
		},
		[board, gameOver, drop, move, rotateTetris]
	)

	const handleKeyUp = useCallback(({ key }: KeyboardEvent) => {
		if (key === 'ArrowDown') {
			setDropTime(1000 / (level + 1) + 200)
		}
	}, [])

	useFrameTime(() => {
		drop()
	}, dropTime)

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		document.addEventListener('keyup', handleKeyUp)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('keyup', handleKeyUp)
		}
	}, [board, gameOver, tetris, updatePosition, handleKeyDown, handleKeyUp])

	useEffect(() => {
		let newNextPreview = Array.from(Array(4), () => [
			...Array.from(Array(4), () => 'transparent'),
		])
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
		<div className='mx-auto grid grid-cols-1 gap-4 px-10 max-w-[800px] sm:grid-cols-2'>
			<div className=''>
				<h1 className='text-base font-bold sm:text-2xl'>Tetris</h1>
				<p className='text-xs sm:text-base'>
					Score points by completing entire rows!
				</p>
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
						<>
							<p className='col-span-2 text-sm'>GAME OVER</p>
							<button
								onClick={() => setGameOver(null)}
								className='cursor-pointer rounded-lg border-gray-700 bg-white text-xs sm:text-xl p-2 font-bold outline-none transition duration-200 hover:bg-gray-700 hover:text-white sm:col-span-2'
							>
								Play Again
							</button>
						</>
					) : (
						<>
							<div className='grid sm:grid-cols-2 col-span-1 sm:col-span-2 gap-2'>
								<div className='sm:col-span-2'>
									<Display text='score' value={score} />
								</div>
								<Display text='rows' value={rows} />
								<Display text='level' value={level + 1} />
							</div>
							<div className='sm:col-start-2 row-start-1 flex justify-center items-center gap-4'>
								<NextTetris nextPreview={nextPreview} />
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
