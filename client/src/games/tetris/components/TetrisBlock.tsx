import { StyledTetrisBlock } from 'styles/tetris/StyledTetrisBlock'

const TetrisBlock = ({ block }: any) => {
	return <StyledTetrisBlock color={block.color || '240, 240, 240'} />
}

export default TetrisBlock
