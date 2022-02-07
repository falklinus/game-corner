import styled from 'styled-components'

export const StyledTetrisStart = styled.button`
	cursor: pointer;
	/* padding: 0.5em 1em; */
	background-color: grey;
	border: none;
	outline: none;
	color: white;
	font-size: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2.5em;
	width: 5em;

	span {
		font-size: 0.75em;
	}

	@media only screen and (max-width: 460px) {
		height: 30px;
	}
`
