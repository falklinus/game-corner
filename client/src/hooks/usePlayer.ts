import { randomShape, BOARD_WIDTH, SHAPES } from 'games/tetris/tetrisHelpers'
import { useState, useCallback } from 'react'

// import { Player, Shape } from 'interfaces/tetris'

export const usePlayer = () => {
	const [player, setPlayer] = useState<any>({
		pos: { x: 0, y: 0 },
		shape: { shape: SHAPES.empty },
		collided: false,
	})

	const updatePlayerPos = ({ x, y, collided }: any) => {
		setPlayer((prevPlayer: any) => ({
			...prevPlayer,
			pos: { x: prevPlayer.pos.x + x, y: prevPlayer.pos.y + y },
			collided,
		}))
	}

	const resetPlayer = useCallback(() => {
		setPlayer({
			pos: {
				x: BOARD_WIDTH / 2 - 2,
				y: 0,
			},
			shape: randomShape(),
			collided: false,
		})
	}, [])

	return [player, updatePlayerPos, resetPlayer]
}
