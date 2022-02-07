import { StyledTetrisDisplay } from 'styles/tetris/StyledTetrisDisplay'

const TetrisDisplay = ({
	gameOver = false,
	text,
	value,
}: {
	gameOver?: boolean
	text: string
	value?: number
}) => {
	return (
		<StyledTetrisDisplay color={gameOver ? 'red' : 'grey'}>
			<span className='label'>{text}</span>
			<span className='value'>{value && value.toLocaleString()}</span>
		</StyledTetrisDisplay>
	)
}

export default TetrisDisplay
