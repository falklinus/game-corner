import { useEffect, useState } from 'react'
import { Cell } from '.'
const Board = ({ board }: { board: { color: string; fixed: boolean }[][] }) => {
  // const [board, setBoard] = useState(
  //   Array.from(Array(20), () => [...Array.from(Array(10), () => '')])
  // )
  // useEffect(() => {
  //   console.log(tetris)
  //   for (let y = 0; y < tetris.shape.length; y++) {
  //     for (let x = 0; x < tetris.shape[0].length; x++) {
  //       setBoard((prevBoard) => [
  //         ...prevBoard.slice(0, y + tetris.pos.y),
  //         [
  //           ...prevBoard[y].slice(0, x + tetris.pos.x),
  //           tetris.shape[y][x],
  //           ...prevBoard[y].slice(x + tetris.pos.x + 1, prevBoard[y].length),
  //         ],
  //         ...prevBoard.slice(y + tetris.pos.y + 1, prevBoard.length),
  //       ])
  //     }
  //   }
  // }, [tetris])
  return (
    <div className="mx-auto grid w-max grid-cols-10 gap-[1px] rounded-md bg-gray-700 p-2 sm:ml-0">
      {board.map((row: { color: string; fixed: boolean }[]) =>
        row.map((cell: { color: string; fixed: boolean }, index: number) => (
          <Cell key={index} color={cell.color} />
        ))
      )}
    </div>
  )
}

export default Board
