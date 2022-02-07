import { KeyboardEvent, SyntheticEvent, useState } from 'react'

import { createBoard } from '../tetrisHelpers'

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

const TetrisGame = () => {
	const [dropTime, setDropTime] = useState(null)
	const [gameOver, setGameOver] = useState(false)
	const [player, updatePlayerPos, resetPlayer] = usePlayer()
	const [board, setBoard] = useBoard(player, resetPlayer)

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
				default:
					return
			}
		}
	}
	const movePlayer = (dir: number) => {
		updatePlayerPos({ x: dir, y: 0, collided: false })
	}
	const startGame = () => {
		// Reset everything
		setBoard(createBoard())
		resetPlayer()
	}
	const drop = () => {
		updatePlayerPos({ x: 0, y: 1, collided: false })
	}
	const dropPlayer = () => {
		drop()
	}

	console.log('re-render')
	return (
		<div role='button' tabIndex={0} onKeyDown={move}>
			<StyledTetrisWrapper>
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
								<TetrisDisplay text='Score' value={12324234} />
								<TetrisDisplay text='Rows' />
								<TetrisDisplay text='Level' />
							</>
						)}
						<TetrisStart start={startGame} />
					</div>
					<TetrisBoard board={board} />
					{/* <div className='preview-shape'>Shape</div> */}
				</StyledTetrisGame>
			</StyledTetrisWrapper>
		</div>
	)
}

export default TetrisGame
