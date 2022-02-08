import styled from 'styled-components'

export const StyledTetrisStart = styled.button`
	cursor: pointer;
	background-color: grey;
	color: white;
	border: none;
	outline: none;
	font-size: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2.5em;
	width: 5em;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	transition: all 0.1s ease-in-out;
	text-transform: uppercase;

	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		transform: scale(1.02);
		/* background-color: #f0f0f0;
		color: #262626; */
	}

	span {
		font-size: 0.75em;
	}

	@media only screen and (max-width: 460px) {
		height: 30px;
	}
`
