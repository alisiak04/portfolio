import { useEffect, useRef } from 'react'

// A faint PCB-style grid sits behind the whole page. Nodes near the cursor
// light up in syntax-highlight colors and draw short traces to their
// nearest neighbours — a quiet nod to the hardware/IoT side of the work,
// without competing with the content on top of it.

const NODE_COLORS = ['#7dabf8', '#5fd9c4', '#f2d675', '#f0a97a', '#d888e8']
const SPACING = 64
const RADIUS = 150 // activation radius around the cursor, in px

export default function CircuitField() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const nodesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    function resize() {
      canvas.width = window.innerWidth * devicePixelRatio
      canvas.height = window.innerHeight * devicePixelRatio
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
      buildGrid()
    }

    function buildGrid() {
      const cols = Math.ceil(window.innerWidth / SPACING) + 1
      const rows = Math.ceil(window.innerHeight / SPACING) + 1
      const nodes = []
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          nodes.push({
            x: x * SPACING,
            y: y * SPACING,
            color: NODE_COLORS[(x + y) % NODE_COLORS.length],
            activation: 0,
          })
        }
      }
      nodesRef.current = nodes
    }

    function onMouseMove(e) {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    function onMouseLeave() {
      mouse.current.x = -9999
      mouse.current.y = -9999
    }

    function draw() {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width / devicePixelRatio, height / devicePixelRatio)

      const nodes = nodesRef.current
      const m = mouse.current

      for (const node of nodes) {
        const d = Math.hypot(node.x - m.x, node.y - m.y)
        const target = d < RADIUS ? 1 - d / RADIUS : 0
        node.activation += (target - node.activation) * 0.12
      }

      // faint static grid traces
      ctx.strokeStyle = 'rgba(255,255,255,0.025)'
      ctx.lineWidth = 1
      for (const node of nodes) {
        ctx.beginPath()
        ctx.moveTo(node.x, node.y)
        ctx.lineTo(node.x + SPACING, node.y)
        ctx.moveTo(node.x, node.y)
        ctx.lineTo(node.x, node.y + SPACING)
        ctx.stroke()
      }

      // activated traces + nodes
      for (const node of nodes) {
        if (node.activation < 0.02) continue

        ctx.strokeStyle = node.color
        ctx.globalAlpha = node.activation * 0.5
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(node.x, node.y)
        ctx.lineTo(node.x + SPACING, node.y)
        ctx.moveTo(node.x, node.y)
        ctx.lineTo(node.x, node.y + SPACING)
        ctx.stroke()

        ctx.globalAlpha = Math.min(node.activation, 1)
        ctx.fillStyle = node.color
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2 + node.activation * 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
