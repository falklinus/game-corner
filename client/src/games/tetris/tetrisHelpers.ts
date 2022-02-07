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
		['', 'H', 'H'],
		['', 'H', 'H'],
		['', '', ''],
	],
}

const COLORS: string[] = [
	'0, 175, 0',
	'175, 175, 0',
	'175, 0, 0',
	'175, 0, 175',
	'90, 0, 175',
	'0, 0, 175',
	'175, 90, 0',
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
