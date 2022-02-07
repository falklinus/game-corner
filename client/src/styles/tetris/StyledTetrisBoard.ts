import styled from 'styled-components'

// const width = 200
export const StyledTetrisBoard = styled.div<{
	xBlocks: number
	yBlocks: number
	width: number
}>`
	display: grid;
	grid-template-rows: repeat(
		${props => props.yBlocks},
		calc(${props => props.width}px / ${props => props.xBlocks})
	);
	grid-template-columns: repeat(${props => props.xBlocks}, 1fr);
	gap: 1px;
	border: 2px solid grey;
	width: 100%;
	max-width: ${props => props.width}px;
`
