import { KeyboardEvent, SyntheticEvent, useState } from 'react'

import { checkCollision, createBoard } from '../tetrisHelpers'

// Components
import TetrisDisplay from './TetrisDisplay'
import TetrisStart from './TetrisStart'
import TetrisBoard from './TetrisBoard'

// Styled Components
import {
	StyledTetrisGame,
	StyledTetrisWrapper,
} from 'styles/tetris/StyledTetrisGame'

// Custom Hooks
import { usePlayer } from 'hooks/usePlayer'
import { useBoard } from 'hooks/useBoard'
import TetrisBlock from './TetrisBlock'
import { StyledTetrisPreview } from 'styles/tetris/StyledTetrisPreview'

const TetrisGame = () => {
	const [dropTime, setDropTime] = useState(null)
	const [gameOver, setGameOver] = useState(false)
	const [player, updatePlayerPos, resetPlayer, rotatePlayer, nextTetro] =
		usePlayer()
	const [board, setBoard, rowsCleared] = useBoard(player, resetPlayer)
	// const [score, setScore] = useState(0)
	// const [rows, setRows] = useState(0)
	// const [level, setLevel] = useState(0)

	const move = ({ key }: KeyboardEvent) => {
		if (!gameOver) {
			switch (key) {
				case 'ArrowLeft' || 'a':
					movePlayer(-1)
					break
				case 'ArrowRight' || 'd':
					movePlayer(1)
					break
				case 'ArrowDown' || 's':
					dropPlayer()
					break
				case 'ArrowUp' || 'w':
					rotatePlayer(board, 1)
					break
				default:
					return
			}
		}
	}
	const movePlayer = (dir: number) => {
		if (!checkCollision(player, board, { x: dir, y: 0 }))
			updatePlayerPos({ x: dir, y: 0, collided: false })
	}
	const startGame = () => {
		setGameOver(false)
		setBoard(createBoard())
		resetPlayer()
	}
	const drop = () => {
		if (!checkCollision(player, board, { x: 0, y: 1 }))
			updatePlayerPos({ x: 0, y: 1, collided: false })
		else {
			if (player.pos.y < 1) {
				console.log('GAME OVER!!')
				setGameOver(true)
				setDropTime(null)
			}
			updatePlayerPos({ x: 0, y: 0, collided: true })
		}
	}
	const dropPlayer = () => {
		drop()
	}

	console.log('re-render')
	return (
		<StyledTetrisWrapper role='button' tabIndex={0} onKeyDown={move}>
			<header>
				<h1>Welcome to Tetris!</h1>
				{/* <p>
						Complete entire rows to score points. Gather as many points as you
						can before the board fills up.
					</p> */}
			</header>
			<StyledTetrisGame>
				<div className='display-wrapper'>
					{gameOver ? (
						<TetrisDisplay gameOver text='Game Over' />
					) : (
						<>
							<StyledTetrisPreview
								width={nextTetro && nextTetro.shape[0].length}
							>
								Next
								<div>
									{nextTetro &&
										nextTetro.shape.map((row: any) =>
											row.map((block: any, x: number) => (
												<TetrisBlock key={x} block={block} />
											))
										)}
								</div>
							</StyledTetrisPreview>
							<TetrisDisplay text='Score' value={12324234} />
							<TetrisDisplay text='Rows' value={rowsCleared} />
							<TetrisDisplay text='Level' />
						</>
					)}
					<TetrisStart start={startGame} />
				</div>
				<TetrisBoard board={board} />
			</StyledTetrisGame>
		</StyledTetrisWrapper>
	)
}

export default TetrisGame
