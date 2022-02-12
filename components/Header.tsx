import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="relative flex w-full items-center justify-between border-b-2 border-gray-400 py-8">
        <div>
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-gray-700">
              Game Corner
            </span>
          </Link>
        </div>
        <div className="hidden gap-6 md:flex">
          <Link href="/games/tetris">
            <span className="cursor-pointer font-semibold text-gray-700 ">
              Tetris
            </span>
          </Link>
          <Link href="/games/mario">
            <span className="cursor-pointer font-semibold text-gray-700">
              Mario
            </span>
          </Link>
          <Link href="/games">
            <span className="cursor-pointer font-semibold text-gray-700 ">
              Browse
            </span>
          </Link>
        </div>
        <div
          onClick={() => setShowNav((prevShowNav) => !prevShowNav)}
          className="relative h-8 w-8 cursor-pointer md:hidden"
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
              showNav
                ? 'top-1/2 -translate-y-1/2 -rotate-45'
                : 'bottom-2 rotate-0'
            } absolute right-0 h-[4px] w-8 rounded-full bg-gray-700 transition duration-200`}
          />
        </div>
        <div
          className={`${
            showNav
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          } top absolute top-full right-0 -mt-4 flex min-w-[8rem] flex-col gap-4 rounded-lg bg-gray-700 py-4 px-2 uppercase text-white shadow-md transition duration-200 md:hidden`}
        >
          <div className="absolute bottom-full right-3 -mb-1 border-l-[16px] border-r-[16px] border-b-[16px] border-l-transparent border-r-transparent border-b-gray-700" />
          <Link href="/games/tetris">
            <span className="w-full cursor-pointer text-center font-semibold">
              Tetris
            </span>
          </Link>
          <Link href="/games/mario">
            <span className="w-full cursor-pointer text-center font-semibold">
              Mario
            </span>
          </Link>
          <Link href="/games">
            <span className="w-full cursor-pointer text-center font-semibold">
              Browse
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
