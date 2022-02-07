import { Link } from 'react-router-dom'
import { StyledHomeLinkButton } from 'styles/home/StyledHome'

const Home = () => {
	return (
		<Link to='/tetris'>
			<StyledHomeLinkButton>Tetris</StyledHomeLinkButton>
		</Link>
	)
}

export default Home
