import { motion } from 'framer-motion'

const GROUPS = [
  {
    label: 'software',
    accent: 'accent-type',
    items: [
      {
        name: 'Health Work Balance',
        tag: 'Solo',
        blurb: 'PC & Fitbit monitoring system',
        bullets: [
          'Real-time monitoring system integrating Fitbit health data with PC usage metrics using Flask and WebSockets.',
          'Priority-based task scheduler, thread-safe caching and bi-directional Fitbit API integration, with SQLite for historical trend analysis.',
        ],
        stack: ['Flask', 'WebSockets', 'SQLite', 'Python'],
      },
    ],
  },
  {
    label: 'hardware / iot',
    accent: 'accent-tag',
    items: [
      {
        name: 'Lecture Engagement Pod',
        tag: 'Team',
        blurb: 'IoT classroom feedback system',
        bullets: [
          'Designed and built an IoT classroom feedback system using ESP32 microcontrollers, custom hardware and a Flask web app.',
          'Wi-Fi data transmission and a real-time dashboard, enabling anonymous student feedback and instant insight for lecturers.',
        ],
        stack: ['ESP32', 'Flask', 'Wi-Fi', 'Dashboard'],
      },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-label">
          <span className="n">03</span>
          <span className="tag">// projects</span>
        </div>

        <div style={{ display: 'grid', gap: 48 }}>
          {GROUPS.map((group) => (
            <div key={group.label}>
              <h3
                className={`mono ${group.accent}`}
                style={{ fontSize: 14, marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}
              >
                {group.label}
              </h3>

              <div style={{ display: 'grid', gap: 16 }}>
                {group.items.map((p) => (
                  <motion.article
                    key={p.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ borderColor: 'var(--keyword)' }}
                    className="window"
                    style={{ padding: 24 }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: 6,
                      }}
                    >
                      <h4 style={{ fontSize: 18 }}>
                        <span className="accent-func">{p.name}</span>
                      </h4>
                      <span
                        className="mono"
                        style={{
                          fontSize: 11,
                          padding: '3px 8px',
                          borderRadius: 20,
                          border: '1px solid var(--line)',
                          color: 'var(--ink-dim)',
                        }}
                      >
                        {p.tag}
                      </span>
                    </div>

                    <div className="mono accent-comment" style={{ fontSize: 13, marginBottom: 12 }}>
                      // {p.blurb}
                    </div>

                    <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--ink-dim)' }}>
                      {p.bullets.map((b, i) => (
                        <li key={i} style={{ marginBottom: 6, fontSize: 15 }}>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="mono accent-string"
                          style={{ fontSize: 12, border: '1px solid var(--line)', padding: '3px 8px', borderRadius: 5 }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
