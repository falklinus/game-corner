import { useState, useEffect } from 'react'

export const useFrameTime = () => {
  const [frameTime, setFrameTime] = useState<number>()
  useEffect(() => {
    let frameId: number
    const frame = (time: number) => {
      setFrameTime(time)
      frameId = requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
    return () => cancelAnimationFrame(frameId)
  }, [])
  return frameTime
}
