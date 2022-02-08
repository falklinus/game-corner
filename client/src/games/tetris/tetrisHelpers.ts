import { Player } from 'interfaces/tetris'

export const SHAPES: any = {
	empty: [['']],
	A: [
		['A', 'A', 'A', 'A'],
		['', '', '', ''],
		['', '', '', ''],
		['', '', '', ''],
	],
	B: [
		['', 'B', '', ''],
		['', 'B', '', ''],
		['', 'B', '', ''],
		['', 'B', '', ''],
	],
	C: [
		['', 'C', ''],
		['', 'C', ''],
		['', 'C', 'C'],
	],
	D: [
		['D', 'D', 'D'],
		['', '', 'D'],
		['', '', ''],
	],
	E: [
		['E', 'E', ''],
		['', 'E', 'E'],
		['', '', ''],
	],
	F: [
		['', 'F', ''],
		['', 'F', 'F'],
		['', '', 'F'],
	],
	G: [
		['G', 'G', 'G'],
		['', 'G', ''],
		['', '', ''],
	],
	H: [
		['H', 'H'],
		['H', 'H'],
	],
}

const COLORS: string[] = [
	'122, 15, 106',
	'122, 15, 15',
	'15, 40, 122',
	'15, 122, 67',
	'171, 173, 42',
	'173, 114, 42',
	'112, 42, 173',
]

export const BOARD_WIDTH = 10
export const BOARD_HEIGHT = 20

export const createBoard = () =>
	Array.from(Array(BOARD_HEIGHT), () =>
		new Array(BOARD_WIDTH).fill({ value: '', status: 'clear', color: '' })
	)

export const randomShape = () => {
	const shapes = Object.keys(SHAPES).slice(1, SHAPES.length)
	const randomShape = shapes[Math.floor(Math.random() * shapes.length)]

	return {
		shape: SHAPES[randomShape],
		color: COLORS[Math.floor(Math.random() * COLORS.length)],
	}
}

export const checkCollision = (
	player: any,
	board: any,
	{ x: moveX, y: moveY }: any
) => {
	for (let y = 0; y < player.shape.length; y++) {
		for (let x = 0; x < player.shape[y].length; x++) {
			if (player.shape[y][x].value) {
				if (
					!board[y + player.pos.y + moveY] ||
					!board[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
					board[y + player.pos.y + moveY][x + player.pos.x + moveX].status !==
						'clear'
				)
					return true
			}
		}
	}
	return false
}
