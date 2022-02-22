import { useEffect, useRef } from 'react'

export const useFrameTime = (callback: () => void, interval: number | null) => {
  const savedCallback = useRef<() => void>()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    let lastRenderTime = 0
    let frameId: number
    const frame = (time: number): void => {
      frameId = requestAnimationFrame(frame)
      const timeSinceLastRender = time - lastRenderTime
      if (timeSinceLastRender < (interval as number)) return
      lastRenderTime = time
      if (savedCallback.current) savedCallback.current()
    }

    if (interval !== null) requestAnimationFrame(frame)

    return () => cancelAnimationFrame(frameId)
  }, [interval])
}
