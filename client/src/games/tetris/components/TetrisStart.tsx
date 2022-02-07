import { StyledTetrisStart } from 'styles/tetris/StyledTetrisStart'

const TetrisStart = ({ start }: { start: () => void }) => {
	return (
		<StyledTetrisStart role='button' onClick={start}>
			<span>Start game</span>
		</StyledTetrisStart>
	)
}

export default TetrisStart
