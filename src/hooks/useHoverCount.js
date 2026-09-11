import { useEffect, useRef, useState } from 'react'

// Animates a number up to `target` while `active` is true (e.g. on hover),
// and snaps back to the resting value when it goes false again.
export default function useHoverCount(target, active, duration = 700) {
  const [value, setValue] = useState(target)
  const rafRef = useRef()

  useEffect(() => {
    if (!target) return undefined
    cancelAnimationFrame(rafRef.current)

    if (active) {
      const from = Math.round(target * 0.55)
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(from + (target - from) * eased))
        if (progress < 1) rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    } else {
      setValue(target)
    }

    return () => cancelAnimationFrame(rafRef.current)
  }, [active, target, duration])

  return value
}
