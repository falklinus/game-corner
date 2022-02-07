import { StyledTetrisBlock } from 'styles/tetris/StyledTetrisBlock'

const TetrisBlock = ({ block }: any) => {
	return <StyledTetrisBlock color={block.color || '0, 0, 0'} />
}

export default TetrisBlock
