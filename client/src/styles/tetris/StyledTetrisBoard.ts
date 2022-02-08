import styled from 'styled-components'

// const width = 200
export const StyledTetrisBoard = styled.div<{
	xBlocks: number
	yBlocks: number
	width: number
}>`
	background: white;
	display: grid;
	grid-template-rows: repeat(
		${props => props.yBlocks},
		calc(${props => props.width}px / ${props => props.xBlocks})
	);
	grid-template-columns: repeat(${props => props.xBlocks}, 1fr);
	gap: 1px;
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	width: 100%;
	max-width: ${props => props.width}px;
	border-radius: 5px;

	// &:hover {
	// 	transform: scale(1.2);
	// }
`
