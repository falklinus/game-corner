import styled from 'styled-components'

export const StyledTetrisDisplay = styled.div<{ color: string }>`
	border: 2px solid grey;
	padding: 0.5em 0;
	font-size: 1em;
	width: 5em;
	height: 2.5em;
	max-width: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
	position: relative;

	.label {
		position: absolute;
		font-size: 0.5em;
		top: 0.5em;
		left: 0.5em;
		font-weight: bold;
		text-transform: uppercase;
		color: ${props => props.color};
	}
	.value {
		position: absolute;
		right: 0.5em;
		top: 50%;
		transform: translateY(-50%);
		font-size: 0.75em;
	}

	@media only screen and (max-width: 460px) {
		height: 30px;
		min-width: 0;

		.value {
			font-size: 0.5em;
		}
	}
`
