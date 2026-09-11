// Renders a stat that counts up from 0 to `display` when scrolled into view.
// `display` is the exact, editable target string (e.g. "4.13M", "10,975",
// "+50.0%", "~224.8K") — it's parsed to animate, then the literal string is
// shown on completion so the final value always matches the source of truth.
import { useEffect, useRef, useState } from 'react'

function parseDisplay(display) {
  const m = String(display).match(/^([+~]?)([\d,]+(?:\.\d+)?)(K|M|%)?(\+)?$/)
  if (!m) return null
  const [, prefix, numStr, unit, plusSuffix] = m
  const number = parseFloat(numStr.replace(/,/g, ''))
  const decimals = (numStr.split('.')[1] || '').length
  const hasCommas = numStr.includes(',')
  return { prefix: prefix || '', number, decimals, unit: unit || '', plusSuffix: plusSuffix || '', hasCommas }
}

function formatValue(value, parsed) {
  let numOut = parsed.decimals ? value.toFixed(parsed.decimals) : String(Math.round(value))
  if (parsed.hasCommas) {
    numOut = Number(numOut).toLocaleString(undefined, {
      minimumFractionDigits: parsed.decimals,
      maximumFractionDigits: parsed.decimals,
    })
  }
  return `${parsed.prefix}${numOut}${parsed.unit}${parsed.plusSuffix}`
}

export default function CountStat({ display, label, sublabel, delta, emphasize, duration = 1300, className = '' }) {
  const ref = useRef(null)
  const [text, setText] = useState(null)

  useEffect(() => {
    const parsed = parseDisplay(display)
    if (!parsed || !ref.current) { setText(display); return undefined }
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setText(progress >= 1 ? display : formatValue(parsed.number * eased, parsed))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [display, duration])

  return (
    <div ref={ref} className={`count-stat${emphasize ? ' count-stat--emphasize' : ''} ${className}`}>
      <div className="count-stat__value">{text ?? '0'}</div>
      <div className="count-stat__label">{label}</div>
      {sublabel && <div className="count-stat__sublabel">{sublabel}</div>}
      {delta && <div className="count-stat__delta">{delta}</div>}
    </div>
  )
}
