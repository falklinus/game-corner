import { Cell } from '.'

const board = Array.from(Array(20), () => [
  ...Array.from(Array(8), () => ''),
  ...Array.from(Array(2), () => 'orange'),
])
const Board = () => {
  return (
    <div className="mx-auto grid w-max grid-cols-10 gap-[1px] bg-white sm:ml-0">
      {board.map((row: string[]) =>
        row.map((cell: string, index: number) => (
          <Cell key={index} cell={cell} />
        ))
      )}
    </div>
  )
}

export default Board
