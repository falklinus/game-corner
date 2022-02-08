import styled from 'styled-components'

export const StyledTetrisWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	padding: 1em;
	outline: none;

	header {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		margin-bottom: 1em;

		h1 {
			font-size: 1.25em;
		}

		p {
			font-size: 0.675em;
		}
	}

	@media only screen and (max-width: 460px) {
		header {
			display: none;
		}
	}
`
export const StyledTetrisGame = styled.div`
	display: flex;
	justify-content: center;
	gap: 1em;

	.display-wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.5em;
	}

	.preview-shape {
		display: grid;
		grid-template-columns: repeat(4, 30px);
		grid-template-rows: repeat(4, 30px);
	}

	@media only screen and (max-width: 460px) {
		flex-direction: column;
		align-items: center;

		.display-wrapper {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			grid-template-areas:
				'preview'
				'preview';
		}
	}
`
