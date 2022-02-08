import styled from 'styled-components'

export const StyledTetrisBlock = styled.div<{ color: string }>`
	background: rgba(
		${props => props.color},
		${props => (props.color === '240, 240, 240' ? 1 : 0.8)}
	);
	border: ${props => (props.color === '240, 240, 240' ? '0px' : '4px solid')};
	/* border: 4px solid; */
	border-bottom-color: rgba(${props => props.color}, 0.1);
	border-right-color: rgba(${props => props.color}, 1);
	border-top-color: rgba(${props => props.color}, 1);
	border-left-color: rgba(${props => props.color}, 0.3);
	border-radius: 5px;

	&:first-child {
		border-top-left-radius: 5px;
	}
	&:nth-child(10) {
		border-top-right-radius: 5px;
	}
	&:nth-child(191) {
		border-bottom-left-radius: 5px;
	}
	&:last-child {
		border-bottom-right-radius: 5px;
	}
`
