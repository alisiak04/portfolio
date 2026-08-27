import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Each line is pre-tokenized so we can type it out while keeping
// syntax-style coloring on individual words.
const LINES = [
  [
    { t: 'const ', c: 'accent-keyword' },
    { t: 'engineer ', c: '' },
    { t: '= ', c: '' },
    { t: '{', c: 'accent-ink' },
  ],
  [
    { t: '  name: ', c: 'accent-type' },
    { t: "'Alisia Kazimierek'", c: 'accent-string' },
    { t: ',', c: '' },
  ],
  [
    { t: '  role: ', c: 'accent-type' },
    { t: "'Software Engineer'", c: 'accent-string' },
    { t: ',', c: '' },
  ],
  [
    { t: '  based: ', c: 'accent-type' },
    { t: "'Ireland'", c: 'accent-string' },
    { t: ',', c: '' },
  ],
  [
    { t: '  interests: ', c: 'accent-type' },
    { t: '[', c: '' },
    { t: "'Frontend'", c: 'accent-string' },
    { t: ', ', c: '' },
    { t: "'IoT'", c: 'accent-string' },
    { t: ', ', c: '' },
    { t: "'AI tooling'", c: 'accent-string' },
    { t: ']', c: '' },
  ],
  [{ t: '}', c: '' }],
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= LINES.length) return
    const delay = visibleLines === 0 ? 300 : 220
    const id = setTimeout(() => setVisibleLines((v) => v + 1), delay)
    return () => clearTimeout(id)
  }, [visibleLines])

  return (
    <section id="top" className="container" style={{ paddingTop: 88, paddingBottom: 64 }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="window"
        style={{ maxWidth: 620 }}
      >
        <div className="window-titlebar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span style={{ marginLeft: 8 }}>about.js</span>
        </div>

        <div style={{ padding: '22px 24px', fontFamily: 'var(--font-mono)', fontSize: 15 }}>
          {LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} style={{ whiteSpace: 'pre', color: 'var(--ink)' }}>
              {line.map((tok, j) => (
                <span key={j} className={tok.c}>
                  {tok.t}
                </span>
              ))}
              {i === visibleLines - 1 && visibleLines < LINES.length && (
                <span className="blink-cursor" />
              )}
            </div>
          ))}
          {visibleLines >= LINES.length && <span className="blink-cursor" />}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        style={{ marginTop: 28, color: 'var(--ink-dim)', maxWidth: 520, fontSize: 16 }}
      >
        Software engineer with experience across{' '}
        <span className="accent-func mono">full-stack development</span> ,{' '}
        <span className="accent-tag mono">frontend technologies</span> and {' '}
        <span className="accent-comment mono">Agile team projects</span>. I enjoy turning complex ideas into intuitive, user-focused software.
      </motion.p>

      <div className="skill-tags" aria-label="Technologies">
      {[
        'Java',
        'Python',
        'TypeScript',
        'JavaScript',
        'C++',
        'React',
        'Angular',
        'Git',
        'AWS',
      ].map((skill) => (
        <span key={skill} className="skill-tag">
          {skill}
        </span>
      ))}
    </div>
    </section>
  )
}
