export default function About() {
  return (
    <section id="about" className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="section-label">
          <span className="n">01</span>
          <span className="tag">// about</span>
        </div>

        <p style={{ fontSize: 18, color: 'var(--ink)', maxWidth: 640 }}>
          I'm a First Class Honours graduate in{' '}
          <span className="accent-func mono">Immersive Software Engineering</span> from
          the University of Limerick — a course built around industry placement, so my
          degree alternated between college terms and internships. That meant{' '}
          <span className="accent-string mono">four internships</span> across my time in
          college, and a set of{' '}
          <span className="accent-tag mono">solo and team projects</span> built in the
          terms between them.
        </p>

        <p style={{ marginTop: 20, fontSize: 18, color: 'var(--ink-dim)', maxWidth: 640 }}>
          That rhythm shaped how I work: I'm comfortable dropping into an existing
          codebase and shipping fast (the internships), and just as comfortable owning
          something from a blank page (the projects) — whether that's a web interface
          or a piece of custom hardware.
        </p>
      </div>
    </section>
  )
}
