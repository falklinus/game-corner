import styled from 'styled-components'

export const StyledTetrisPreview = styled.div<{ width: number }>`
	grid-area: preview;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.25em;
	width: 100%;
	> div {
		display: grid;
		grid-template-columns: repeat(${props => props.width}, 1em);
		grid-template-rows: repeat(${props => props.width}, 1em);
		height: 4em;
		/* width: 100%; */
	}
`
