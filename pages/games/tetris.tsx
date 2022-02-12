import { Board, Display } from '../../games/tetris/components'

const tetris = () => {
  return (
    <div className="mx-auto grid grid-cols-1 px-8 sm:grid-cols-3 sm:gap-8">
      <div className="col-span-1">
        <h1 className="text-base font-bold sm:text-2xl">Tetris</h1>
        <p className="text-xs sm:text-base">
          Score points by completing entire rows!
        </p>
        <div className="mt-4 grid gap-2 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <Display text="score" value={0} />
          </div>
          <Display text="rows" value={0} />
          <Display text="level" value={0} />
        </div>
      </div>
      <div className="col-span-1 mt-4 sm:col-span-2 sm:mt-0">
        <Board />
        {/* <div className="grid grid-cols-10">
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
          <div>hej</div>
        </div> */}
      </div>
    </div>
  )
}

export default tetris
