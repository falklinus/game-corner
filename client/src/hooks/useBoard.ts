import { useState, useEffect } from 'react'
import { createBoard, randomShape } from 'games/tetris/tetrisHelpers'
import { Player } from 'interfaces/tetris'

export const useBoard = (player: Player, resetPlayer: any) => {
	const [board, setBoard] = useState<any>(createBoard())
	const [rowsCleared, setRowsCleared] = useState(0)

	useEffect(() => {
		// setRowsCleared(0)

		const sweepRows = (newBoard: any) =>
			newBoard.reduce((ack: any, row: string[]) => {
				if (row.findIndex((block: any) => !block.value) === -1) {
					setRowsCleared(prevRowsCleared => prevRowsCleared + 1)
					ack.unshift(
						new Array(newBoard[0].length).fill({ value: '', status: 'clear' })
					)
					return ack
				}
				ack.push(row)
				return ack
			}, [])

		const updateBoard = (prevBoard: any) => {
			const newBoard = prevBoard.map((row: any) =>
				row.map((block: any) =>
					block.status === 'clear' ? { value: '', status: 'clear' } : block
				)
			)
			player.shape.forEach((row: any, y: number) => {
				row.forEach((block: any, x: number) => {
					if (block.value) {
						newBoard[y + player.pos.y][x + player.pos.x] = {
							...block,
							status: player.collided ? 'merged' : 'clear',
						}
					}
				})
			})

			if (player.collided) {
				resetPlayer()
				return sweepRows(newBoard)
			}
			return newBoard
		}

		setBoard((prevBoard: any) => updateBoard(prevBoard))
	}, [player, resetPlayer])

	return [board, setBoard, rowsCleared]
}
