import { useState, useCallback } from 'react'
import { Grid, GridRow, Position, Tetris, UseTetris } from '../types'
import { checkCollision, getRandomTetris } from '../util'

export const useTetris = (): UseTetris => {
	const [tetris, setTetris] = useState<Tetris>({
		pos: { x: 0, y: 0 },
		shape: [[{ color: '', fixed: false }]],
		collided: false,
	})
	const [nextTetris, setNextTetris] = useState<Tetris>(getRandomTetris())

	const updatePosition = ({
		pos: { x, y },
		collided,
	}: {
		pos: Position
		collided: boolean
	}) => {
		setTetris(prevTetris => ({
			...prevTetris,
			pos: {
				x: prevTetris.pos.x + x,
				y: prevTetris.pos.y + y,
			},
			collided,
		}))
	}

	const rotate = (shape: Grid, dir: number): Grid => {
		const rotatedShape = shape.map((_: GridRow, index: number) =>
			shape.map((col: GridRow) => col[index])
		)
		if (dir > 0) return rotatedShape.map((row: GridRow) => row.reverse())
		return rotatedShape.reverse()
	}

	const rotateTetris = (board: Grid, dir: number): void => {
		const clonedTetris: Tetris = JSON.parse(JSON.stringify(tetris))
		clonedTetris.shape = rotate(clonedTetris.shape, dir)

		const pos = clonedTetris.pos.x
		let offset = 1
		while (checkCollision(board, clonedTetris, { x: 0, y: 0 })) {
			clonedTetris.pos.x += offset
			offset = -(offset + (offset > 0 ? 1 : -1))
			if (offset > clonedTetris.shape[0].length) {
				rotate(clonedTetris.shape, -dir)
				clonedTetris.pos.x = pos
				return
			}
		}
		setTetris(clonedTetris)
	}

	const resetTetris = useCallback(() => {
		setNextTetris(nextTetris => {
			setTetris(nextTetris)
			return getRandomTetris()
		})
	}, [])

	return [tetris, updatePosition, resetTetris, rotateTetris, nextTetris]
}
