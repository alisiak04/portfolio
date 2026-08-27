import ISEPixelMark from './ISEPixelMark'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-layout">

        <div className="about-content">

          <div className="section-label">
            <span className="n">01</span>
            <span className="tag">// about</span>
          </div>

          <p className="about-primary">
            I'm a First Class Honours graduate in{' '}
            <a
              href="https://software-engineering.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-func mono course-link"
            >
              Immersive Software Engineering
            </a>{' '}
            from the University of Limerick — a course built around industry
            placement, so my degree alternated between college terms and
            internships. That meant{' '}
            <span className="accent-string mono">
              four internships
            </span>{' '}
            across my time in college, and a set of{' '}
            <span className="accent-tag mono">
              solo and team projects
            </span>{' '}
            built in the terms between them.
          </p>

          <p className="about-secondary">
            That rhythm shaped how I work: I'm comfortable dropping into an
            existing codebase and shipping fast (the internships) or taking a
            project from a blank page to a working product.
          </p>

        </div>

        <div className="ise-container">
          <a
            href="https://software-engineering.ie"
            target="_blank"
            rel="noopener noreferrer"
            className="ise-link"
            aria-label="Immersive Software Engineering at the University of Limerick"
          >
            <ISEPixelMark />

            <div className="ise-label">
              <span>[ISE]</span>
              <span>University of Limerick</span>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}