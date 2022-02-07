import { useEffect, useState } from 'react'
import { StyledTetrisBoard } from 'styles/tetris/StyledTetrisBoard'
import TetrisBlock from './TetrisBlock'

// const TetrisBoard = ({ board }: any) => {
const TetrisBoard = ({ board }: any) => {
	const [width, setWidth] = useState(0)
	const handleResize = () => {
		const vw = Math.max(
			document.documentElement.clientWidth || 0,
			window.innerWidth || 0
		)
		const vh = Math.max(
			document.documentElement.clientHeight || 0,
			window.innerHeight || 0
		)
		if (vw < vh / 2) {
			setWidth(0.75 * vw)
		} else {
			setWidth((0.75 * vh) / 2)
		}
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<StyledTetrisBoard
			width={width}
			xBlocks={board[0].length}
			yBlocks={board.length}
		>
			{board.map((rows: any) =>
				rows.map((block: any, x: number) => (
					<TetrisBlock key={x} block={block} />
				))
			)}
		</StyledTetrisBoard>
	)
}

export default TetrisBoard
