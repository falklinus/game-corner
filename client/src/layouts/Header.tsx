import { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, logout } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Header = () => {
  const [user, loading] = useAuthState(auth)
  const [showNav, setShowNav] = useState<boolean>(false)
  const [showProfileNav, setShowProfileNav] = useState<boolean>(false)
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
          <Link to='/games/brickbreaker'>
            <span className='cursor-pointer font-semibold flex'>BrickBreaker</span>
          </Link>
          <Link to='/games'>
            <span className='cursor-pointer font-semibold'>Browse</span>
          </Link>
          <div
            onClick={() => setShowProfileNav((prevShowNav) => !prevShowNav)}
            className='w-full cursor-pointer text-center font-semibold'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <div
            className={`${
              showProfileNav ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
            } top absolute top-full right-0 -mt-4 min-w-[8rem] flex-col gap-4 rounded-lg bg-gray-700 p-4 uppercase shadow-md transition duration-200 hidden md:flex`}
          >
            <div className='absolute bottom-full right-3 -mb-1 border-l-[16px] border-r-[16px] border-b-[16px] border-l-transparent border-r-transparent border-b-gray-700' />
            {user ? (
              <>
                <Link to='/' onClick={() => setShowProfileNav(false)}>
                  <span className='w-full cursor-pointer font-semibold text-white'>Profile</span>
                </Link>
                <span
                  onClick={() => {
                    logout()
                    setShowProfileNav(false)
                  }}
                  className='w-full cursor-pointer font-semibold text-white'
                >
                  Logout
                </span>
              </>
            ) : (
              <>
                <Link to='/login' onClick={() => setShowProfileNav(false)}>
                  <span className='w-full cursor-pointer text-center font-semibold text-white'>
                    Login
                  </span>
                </Link>
                <Link to='/register' onClick={() => setShowProfileNav(false)}>
                  <span className='w-full cursor-pointer text-center font-semibold text-white'>
                    Register
                  </span>
                </Link>
              </>
            )}
          </div>
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
          } top absolute top-full right-0 -mt-4 flex min-w-[8rem] flex-col gap-4 rounded-lg bg-gray-700 p-4 uppercase shadow-md transition duration-200 md:hidden`}
        >
          <div className='absolute bottom-full right-3 -mb-1 border-l-[16px] border-r-[16px] border-b-[16px] border-l-transparent border-r-transparent border-b-gray-700' />
          <Link to='/games/tetris' onClick={() => setShowNav(false)}>
            <span className='w-full cursor-pointer font-semibold text-white'>Tetris</span>
          </Link>
          <Link to='/games/brickbreaker' onClick={() => setShowNav(false)}>
            <span className='w-full cursor-pointer font-semibold text-white'>Brick Breaker</span>
          </Link>
          <Link to='/games' onClick={() => setShowNav(false)}>
            <span className='w-full cursor-pointer font-semibold text-white'>Browse</span>
          </Link>
          {user ? (
            <>
              <Link to='/' onClick={() => setShowNav(false)}>
                <span className='w-full cursor-pointer font-semibold text-white'>Profile</span>
              </Link>
              <span
                onClick={() => {
                  logout()
                  setShowNav(false)
                }}
                className='w-full cursor-pointer font-semibold text-white'
              >
                Logout
              </span>
            </>
          ) : (
            <>
              <Link to='/login' onClick={() => setShowNav(false)}>
                <span className='w-full cursor-pointer text-center font-semibold text-white'>
                  Login
                </span>
              </Link>
              <Link to='/register' onClick={() => setShowNav(false)}>
                <span className='w-full cursor-pointer text-center font-semibold text-white'>
                  Register
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
