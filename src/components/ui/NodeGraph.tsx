import { motion } from 'framer-motion'

type Node = { id: string; label: string; x: number; y: number; primary?: boolean }

const nodes: Node[] = [
  { id: 'it', label: 'IT', x: 90, y: 60 },
  { id: 'cloud', label: 'CLOUD', x: 90, y: 340 },
  { id: 'security', label: 'SECURITY', x: 480, y: 40 },
  { id: 'ai', label: 'AI', x: 480, y: 360 },
  { id: 'qa', label: 'QA', x: 290, y: 380 },
  { id: 'core', label: 'BUSINESS\nOUTCOME', x: 290, y: 200, primary: true },
]

const edges: [string, string][] = [
  ['it', 'core'], ['cloud', 'core'], ['security', 'core'], ['ai', 'core'], ['qa', 'core'],
]

function get(id: string) { return nodes.find((n) => n.id === id)! }

export default function NodeGraph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 580 420" className={className} role="img" aria-label="Ascent connects IT, Cloud, Security, AI and QA into one business outcome">
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1FE0A8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1FE0A8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const na = get(a); const nb = get(b)
        return (
          <motion.line
            key={a + b}
            x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
            stroke="#3A4666"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.15 * i, ease: 'easeInOut' }}
          />
        )
      })}

      {edges.map(([a, b], i) => {
        const na = get(a); const nb = get(b)
        return (
          <motion.circle
            key={'pulse-' + a}
            r="3"
            fill="#1FE0A8"
            initial={{ cx: na.x, cy: na.y, opacity: 0 }}
            animate={{ cx: [na.x, nb.x], cy: [na.y, nb.y], opacity: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 1 + i * 0.5, ease: 'easeInOut' }}
          />
        )
      })}

      <circle cx={get('core').x} cy={get('core').y} r="70" fill="url(#coreGlow)" />

      {nodes.filter((n) => !n.primary).map((n, i) => (
        <motion.g
          key={n.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 * i }}
        >
          <circle cx={n.x} cy={n.y} r="34" fill="#101A33" stroke="#3A4666" strokeWidth="1" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#C7CEDD" letterSpacing="0.5">
            {n.label}
          </text>
        </motion.g>
      ))}

      <motion.g
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <circle cx={get('core').x} cy={get('core').y} r="52" fill="#0A0F1D" stroke="#1FE0A8" strokeWidth="1.5" />
        {get('core').label.split('\n').map((line, i) => (
          <text
            key={line}
            x={get('core').x}
            y={get('core').y - 6 + i * 14}
            textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="10.5"
            fill="#1FE0A8"
            letterSpacing="0.5"
          >
            {line}
          </text>
        ))}
      </motion.g>
    </svg>
  )
}
