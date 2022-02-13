import { Cell } from '.'
import { Grid, GridCell, GridRow } from '../types'
const Board = ({ board }: { board: Grid }) => {
  return (
    <div className='mx-auto grid w-max grid-cols-10 gap-[1px] rounded-md bg-gray-700 p-2 sm:ml-0'>
      {board.map((row: GridRow) =>
        row.map((cell: GridCell, index: number) => <Cell key={index} color={cell.color} />)
      )}
    </div>
  )
}

export default Board
