export interface Shape {
	shape: string[][]
	color: string
}

export interface Player {
	pos: { x: number; y: number }
	shape: Shape
	collided: boolean
}
