import {
	randomShape,
	BOARD_WIDTH,
	SHAPES,
	checkCollision,
} from 'games/tetris/tetrisHelpers'
import { Shape } from 'interfaces/tetris'
import { useState, useCallback, useEffect } from 'react'

// import { Player, Shape } from 'interfaces/tetris'

export const usePlayer = () => {
	const [player, setPlayer] = useState<any>({
		pos: { x: 0, y: 0 },
		shape: SHAPES.empty,
		color: '',
		collided: false,
	})
	const [newTetro, setNewTetro] = useState({ shape: SHAPES.empty })
	const [nextTetro, setNextTetro] = useState(() => {
		const { shape, color } = randomShape()
		return {
			shape: shape.map((row: any) =>
				row.map((value: any) => ({ value, color: value ? color : undefined }))
			),
			color,
		}
	})

	const rotate = (shape: string[][], dir: number) => {
		const rotatedShape = shape.map((_: any, index: number) =>
			shape.map((col: string[]) => col[index])
		)
		if (dir > 0) return rotatedShape.map((row: string[]) => row.reverse())
		return rotatedShape.reverse()
	}

	const rotatePlayer = (board: any, dir: number) => {
		const clonedPlayer = JSON.parse(JSON.stringify(player))
		clonedPlayer.shape = rotate(clonedPlayer.shape, dir)

		const pos = clonedPlayer.pos.x
		let offset = 1
		while (checkCollision(clonedPlayer, board, { x: 0, y: 0 })) {
			clonedPlayer.pos.x += offset
			offset = -(offset + (offset > 0 ? 1 : -1))
			if (offset > clonedPlayer.shape[0].length) {
				rotate(clonedPlayer.shape, -dir)
				clonedPlayer.pos.x = pos
				return
			}
		}
		setPlayer(clonedPlayer)
	}

	const updatePlayerPos = ({ x, y, collided }: any) => {
		setPlayer((prevPlayer: any) => ({
			...prevPlayer,
			pos: { x: prevPlayer.pos.x + x, y: prevPlayer.pos.y + y },
			collided,
		}))
	}

	useEffect(() => {
		console.log(newTetro)
		setPlayer({
			pos: {
				x: Math.floor(Math.random() * (BOARD_WIDTH - 3)),
				y: 0,
			},
			...newTetro,
			collided: false,
		})
	}, [newTetro])

	const resetPlayer = useCallback(() => {
		setNextTetro((prev: any) => {
			setNewTetro(prev)
			const { shape, color } = randomShape()
			return {
				shape: shape.map((row: any) =>
					row.map((value: any) => ({ value, color: value ? color : undefined }))
				),
				color,
			}
		})
	}, [])

	return [player, updatePlayerPos, resetPlayer, rotatePlayer, nextTetro]
}
