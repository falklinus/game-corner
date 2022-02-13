import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <div className='mx-auto mb-4 px-10'>
      <div className='relative flex w-full items-center justify-between border-b-2 border-gray-400 py-8'>
        <div>
          <Link to='/'>
            <span className='cursor-pointer text-xl font-bold sm:text-4xl'>Game Corner</span>
          </Link>
        </div>
        <div className='hidden gap-6 md:flex'>
          <Link to='/games/tetris'>
            <span className='cursor-pointer font-semibold'>Tetris</span>
          </Link>
          <Link to='/games/mario'>
            <span className='cursor-pointer font-semibold'>Mario</span>
          </Link>
          <Link to='/games'>
            <span className='cursor-pointer font-semibold'>Browse</span>
          </Link>
        </div>
        <div
          onClick={() => setShowNav((prevShowNav) => !prevShowNav)}
          className='relative h-8 w-8 cursor-pointer md:hidden'
        >
          <div
            className={`${
              showNav ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-2 rotate-0'
            } absolute  right-0 h-[4px] w-8 rounded-full bg-gray-700 transition duration-200`}
          />
          <div
            className={`${
              showNav ? 'hidden' : 'block'
            } absolute top-1/2 right-0 h-[4px] w-6 -translate-y-1/2 rounded-full bg-gray-700`}
          />
          <div
            className={`${
              showNav ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-2 rotate-0'
            } absolute right-0 h-[4px] w-8 rounded-full bg-gray-700 transition duration-200`}
          />
        </div>
        <div
          className={`${
            showNav ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          } top absolute top-full right-0 -mt-4 flex min-w-[8rem] flex-col gap-4 rounded-lg bg-gray-700 py-4 px-2 uppercase shadow-md transition duration-200 md:hidden`}
        >
          <div className='absolute bottom-full right-3 -mb-1 border-l-[16px] border-r-[16px] border-b-[16px] border-l-transparent border-r-transparent border-b-gray-700' />
          <Link to='/games/tetris'>
            <span className='w-full cursor-pointer text-center font-semibold text-white'>
              Tetris
            </span>
          </Link>
          <Link to='/games/mario'>
            <span className='w-full cursor-pointer text-center font-semibold text-white'>
              Mario
            </span>
          </Link>
          <Link to='/games'>
            <span className='w-full cursor-pointer text-center font-semibold text-white'>
              Browse
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
