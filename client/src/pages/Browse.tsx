import React from 'react'
import { Link } from 'react-router-dom'

const Browse = () => {
  return (
    <div className='px-10 mx-auto grid gap-4' style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <Link to='/games/tetris'>
        <div className='cursor-pointer font-semibold p-8 bg-white shadow hover:shadow-lg transition duration-200 rounded-lg'>
          Tetris
        </div>
      </Link>
      <Link to='/games/brickbreaker'>
        <div className='cursor-pointer font-semibold p-8 bg-white shadow hover:shadow-lg transition duration-200 rounded-lg'>
          BrickBreaker
        </div>
      </Link>
    </div>
  )
}

export default Browse
