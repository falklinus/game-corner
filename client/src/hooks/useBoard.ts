import { useState, useEffect } from 'react'
import { createBoard } from 'games/tetris/tetrisHelpers'
import { Player } from 'interfaces/tetris'

export const useBoard = (player: Player, resetPlayer: any) => {
	const [board, setBoard] = useState<any>(createBoard())
	useEffect(() => {
		const updateBoard = (prevBoard: any) => {
			const newBoard = prevBoard.map((row: any) =>
				row.map((block: any) =>
					block.status === 'clear' ? { value: '', status: 'clear' } : block
				)
			)
			player.shape.shape.forEach((row: string[], y: number) => {
				row.forEach((value: string, x: number) => {
					if (value) {
						newBoard[y + player.pos.y][x + player.pos.x] = {
							value,
							status: player.collided ? 'merged' : 'clear',
							color: player.shape.color,
						}
					}
				})
			})
			return newBoard
		}

		setBoard((prevBoard: any) => updateBoard(prevBoard))
	}, [player])

	return [board, setBoard]
}
