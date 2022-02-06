import { useEffect, useState } from 'react'
import { useFrameTime } from '../hooks/useFrameTime'

const GRID_WIDTH = 10

const SHAPES = [
  [0, 1, 2, 3],
  [0, 1, 2, 1 + GRID_WIDTH],
  [0, 1, 2, 2 + GRID_WIDTH],
  [0, 1, GRID_WIDTH, 1 + GRID_WIDTH],
  [0, 1, 1 + GRID_WIDTH, 1 + 2 * GRID_WIDTH],
  [0, 10, 1 + GRID_WIDTH, 1 + 2 * GRID_WIDTH],
  [0, GRID_WIDTH, 2 * GRID_WIDTH, 3 * GRID_WIDTH],
]

// function find(needle: any, haystack: any) {
//   var results = []
//   var idx = haystack.indexOf(needle)
//   while (idx !== -1) {
//     results.push(idx)
//     idx = haystack.indexOf(needle, idx + 1)
//   }
//   return results
// }

const COLORS = ['green', 'red', 'yellow', 'purple', 'orange', 'blue']

const TetrisGame = () => {
  // const frameTime = useFrameTime()
  // const [shapes, setShapes] = useState<any>([])
  const [grid, setGrid] = useState<any[]>([
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
    { color: '', populated: false },
  ])

  const randomShape = () => {
    console.log('random')
    // const blocks = Math.floor(Math.random() * 4)
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)]
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    const xPos = shape.map((block: number) => block % GRID_WIDTH).sort()
    const width = xPos[xPos.length - 1] - xPos[0] + 1
    const left: number = Math.floor(Math.random() * (GRID_WIDTH - width + 1))
    const gridPositions = shape.map((block: number) => block + left)
    gridPositions.forEach((block: number) => {
      setGrid((prevGrid: any) => [
        ...prevGrid.slice(0, block),
        {
          pos: block,
          color,
          populated: true,
        },
        ...prevGrid.slice(block + 1, prevGrid.length),
      ])
    })
  }

  const pushDown = () => {
    const usedTiles = grid.filter((tile: any) => tile.populated).sort(() => -1)
    let newGrid = grid
    usedTiles.forEach((tile) => {
      newGrid = [
        ...newGrid.slice(0, tile.pos),
        {
          color: '',
          populated: false,
        },
        ...newGrid.slice(tile.pos + 1, tile.pos + GRID_WIDTH),
        { ...newGrid[tile.pos], pos: tile.pos + GRID_WIDTH },
        ...newGrid.slice(tile.pos + GRID_WIDTH + 1, newGrid.length),
      ]
    })
    setGrid(newGrid)
  }

  useEffect(() => {
    randomShape()
    randomShape()
    randomShape()
    // let gridInterval = setInterval(() => pushDown(), 1000)
    // return () => clearInterval(gridInterval)

    // const newShapeInterval = setInterval(() => randomShape(), 10000)
    // setInterval(() => pushDown(), 1000)
    // return () => {
    //   // clearInterval(newShapeInterval)
    //   clearInterval(gridInterval)
    // }
  }, [])
  return (
    <>
      <button onClick={pushDown}>push</button>
      <div className='game'>
        {grid.map((tile: any, index: number) => (
          <div key={index} className={tile.color}></div>
        ))}
      </div>
    </>
  )
}

export default TetrisGame
