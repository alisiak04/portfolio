const ITEMS = [
  'Johnson & Johnson WiSTEM2D 2025 scholarship recipient',
  'Equality, Diversity, and Inclusion (EDI) Transact Scholarship winner',
  'Runner-up, Generative AI for Good competition (The Open Incubator)',
]

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="section-label">
          <span className="n">04</span>
          <span className="tag">// achievements</span>
        </div>

        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 12 }}>
          {ITEMS.map((item) => (
            <li
              key={item}
              style={{
                display: 'flex',
                gap: 12,
                fontSize: 16,
                color: 'var(--ink-dim)',
              }}
            >
              <span className="accent-keyword mono">*</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
