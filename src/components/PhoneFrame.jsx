// A clean vertical 9:16 frame standing in for a real video thumbnail.
// Pass `videoSrc` + `poster` once real client footage is available and it
// plays a muted preview on hover (desktop) or tap (mobile/touch) — until
// then it renders a branded placeholder so the layout is ready to go.
import { useRef, useState } from 'react'

export default function PhoneFrame({ hook, featured, badge, poster, videoSrc, style, className = '' }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const play = () => {
    if (!videoSrc) return
    setPlaying(true)
    videoRef.current?.play().catch(() => {})
  }
  const stop = () => {
    if (!videoSrc) return
    setPlaying(false)
    videoRef.current?.pause()
    if (videoRef.current) videoRef.current.currentTime = 0
  }
  const handleTap = () => {
    if (!videoSrc) return
    playing ? stop() : play()
  }

  return (
    <div
      className={`phone-frame${featured ? ' phone-frame--featured' : ''} ${className}`}
      style={{ ...style, backgroundImage: poster ? `url(${poster})` : undefined }}
      onMouseEnter={play}
      onMouseLeave={stop}
      onClick={handleTap}
    >
      {videoSrc && (
        <video
          ref={videoRef}
          className={`phone-frame__video${playing ? ' show' : ''}`}
          src={videoSrc}
          poster={poster}
          muted
          loop
          playsInline
        />
      )}
      <span className="phone-frame__notch" aria-hidden="true" />
      {!playing && (
        <span className="phone-frame__play" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="8.5" stroke="rgba(255,255,255,0.5)"/>
            <path d="M7.2 5.8l5 3.2-5 3.2V5.8z" fill="white"/>
          </svg>
        </span>
      )}
      {badge && <span className="phone-frame__badge">{badge}</span>}
      {hook && !playing && <span className="phone-frame__hook">{hook}</span>}
    </div>
  )
}
