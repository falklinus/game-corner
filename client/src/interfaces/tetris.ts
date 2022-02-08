export interface Shape {
	shape: string[][]
	color: string
}

export interface Player {
	pos: { x: number; y: number }
	shape: { value: string; color?: string }[][]
	color?: string
	collided: boolean
}
