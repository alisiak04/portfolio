import { useMemo, useState } from 'react'

const ISE = [
  '111  00000  00000  00000  111',
  '100  11111  11111  11111  001',
  '100  00100  10000  10000  001',
  '100  00100  10000  10000  001',
  '100  00100  11111  11110  001',
  '100  00100  00001  10000  001',
  '100  00100  00001  10000  001',
  '100  11111  11111  11111  001',
  '111  00000  00000  00000  111',
]

export default function ISEPixelMark() {
  const [hovered, setHovered] = useState(false)

  const pixels = useMemo(() => {
    return ISE.flatMap((row, y) =>
      [...row].map((value, x) => {
        const index = y * row.length + x

        if (value === ' ') {
          return {
            x,
            y,
            active: false,
            offsetX: 0,
            offsetY: 0,
          }
        }

        const angle = index * 2.37
        const distance = 4 + (index % 3) * 2

        return {
          x,
          y,
          active: value === '1',
          offsetX: Math.cos(angle) * distance,
          offsetY: Math.sin(angle) * distance,
        }
      })
    )
  }, [])

  return (
    <div
      className={`ise-pixel-mark ${hovered ? 'is-hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-hidden="true"
    >
      {pixels.map((pixel, index) => (
        <span
          key={index}
          className={`ise-pixel ${pixel.active ? 'active' : ''}`}
          style={{
            '--scatter-x': `${pixel.offsetX}px`,
            '--scatter-y': `${pixel.offsetY}px`,
            '--delay': `${(index % 8) * 15}ms`,
          }}
        />
      ))}
    </div>
  )
}