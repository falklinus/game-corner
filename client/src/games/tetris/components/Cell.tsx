import { useState, useEffect, memo } from 'react'
const Cell = ({ color }: { color: string }) => {
  const [colorStyle, setColorStyle] = useState('')

  useEffect(() => {
    switch (color) {
      case 'blue':
        setColorStyle(
          'bg-blue-400 border-2 border-t-blue-300 border-r-blue-300 border-b-blue-500 border-l-blue-500'
        )
        break
      case 'orange':
        setColorStyle(
          'bg-orange-400 border-2 border-t-orange-300 border-r-orange-300 border-b-orange-500 border-l-orange-500'
        )
        break
      case 'red':
        setColorStyle(
          'bg-red-400 border-2 border-t-red-300 border-r-red-300 border-b-red-500 border-l-red-500'
        )
        break
      case 'yellow':
        setColorStyle(
          'bg-yellow-400 border-2 border-t-yellow-300 border-r-yellow-300 border-b-yellow-500 border-l-yellow-500'
        )
        break
      case 'green':
        setColorStyle(
          'bg-green-400 border-2 border-t-green-300 border-r-green-300 border-b-green-500 border-l-green-500'
        )
        break
      case 'pink':
        setColorStyle(
          'bg-pink-400 border-2 border-t-pink-300 border-r-pink-300 border-b-pink-500 border-l-pink-500'
        )
        break
      case 'purple':
        setColorStyle(
          'bg-purple-400 border-2 border-t-purple-300 border-r-purple-300 border-b-purple-500 border-l-purple-500'
        )
        break
      default:
        setColorStyle('bg-white')
        break
    }
  }, [color])

  return <span className={'h-6 w-6 ' + colorStyle} />
}

export default memo(Cell)
