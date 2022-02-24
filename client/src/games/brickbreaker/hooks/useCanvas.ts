import { useState, useEffect, useCallback } from 'react'

export const useCanvas = (ref: React.RefObject<HTMLCanvasElement>) => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)

  const [width, setWidth] = useState<number>(window.innerWidth - 80)
  const [height, setHeight] = useState<number>((window.innerWidth - 80) / 2)
  const [left, setLeft] = useState<number>(0)

  const handleResize = useCallback(() => {
    if (ref.current) setLeft(ref.current.getBoundingClientRect().left)
    setWidth(window.innerWidth - 80)
    setHeight((window.innerWidth - 80) / 2)
  }, [ref])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  useEffect(() => {
    if (!ref.current) return
    setCtx(ref.current.getContext('2d'))
    setLeft(ref.current.getBoundingClientRect().left)
  }, [ref])

  return { ctx, width, height, left }
}
