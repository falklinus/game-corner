export default {}
// import { useEffect, useState, useRef } from 'react'
// import { useFrameTime } from 'hooks'
// import { usePaddle } from '../hooks'
// import { Position } from '../types'

// const Canvas = () => {
// const canvasRef = useRef<HTMLCanvasElement>(null)
// const [canvasContext, setCanvasContext] = useState<CanvasRenderingContext2D | null | undefined>(
//   null
// )
// const [canvasPosition, setCanvasPosition] = useState<Position>({
//   pos: {
//     x: canvasRef.current?.getBoundingClientRect().left as number,
//     y: canvasRef.current?.getBoundingClientRect().top as number,
//   },
//   width: window.innerWidth - 80,
//   height: (window.innerWidth - 80) / 2,
// })
// const [drawPaddle] = usePaddle(canvasPosition, canvasContext)

// const handleResize = () => {
//   setCanvasPosition((prevCanvasPosition) => ({
//     ...prevCanvasPosition,
//     width: window.innerWidth - 80,
//     height: (window.innerWidth - 80) / 2,
//   }))
// }

// useEffect(() => {
//   if (!canvasRef.current) return
//   setCanvasContext(canvasRef.current.getContext('2d'))
// }, [canvasRef])

// useEffect(() => {
//   window.addEventListener('resize', handleResize)
//   return () => window.removeEventListener('resize', handleResize)
// }, [])

// useFrameTime(() => {
//   if (!(canvasContext && canvasPosition)) return
//   canvasContext.clearRect(0, 0, canvasPosition.width as number, canvasPosition.height as number)
//   drawPaddle()
// }, 1000 / 30)

// return (
// <canvas
//   ref={canvasRef}
//   width={canvasPosition.width}
//   height={canvasPosition.height}
//   className='border-4 border-gray-700 bg-black bg-opacity-10 mx-auto rounded-lg'
// />
//   )
// }

// export default Canvas
