import { Dispatch, SetStateAction } from 'react'

export type UseTetris = [
	tetris: Tetris,
	updatePosition: ({
		pos: { x, y },
		collided,
	}: {
		pos: Position
		collided: boolean
	}) => void,
	resetTetris: () => void,
	rotateTetris: (board: Grid, dir: number) => void,
	nextTetris: Tetris
]

export type Position = {
	x: number
	y: number
}

export type Tetris = {
	pos: Position
	shape: Grid
	collided: boolean
}

export type GridCell = {
	color: string
	fixed: boolean
}

export type GridRow = GridCell[]

export type Grid = GridRow[]

export type UseBoard = [
	board: Grid,
	setBoard: Dispatch<SetStateAction<Grid>>,
	rowsCleared: number
]

export type UseGameStats = [
	score: number,
	setScore: Dispatch<SetStateAction<number>>,
	rows: number,
	setRows: Dispatch<SetStateAction<number>>,
	level: number,
	setLevel: Dispatch<SetStateAction<number>>
]
