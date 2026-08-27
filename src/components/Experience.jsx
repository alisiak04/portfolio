import { motion } from 'framer-motion'

const ROLES = [
  {
    company: 'Intercom',
    dates: 'Jan 2026 — May 2026',
    title: 'Software Engineer Intern',
    bullets: [
      'Resolved 21 UI/UX issues across Procedures & Simulations, improving layout, consistency, usability and permission-state handling.',
      'Led the Ember → React migration of the Guidance page, achieving feature parity while introducing a new slide-out guidelines component.',
      'Refined the centralised simulations page with search, filtering and "stop all" controls, improving the testing workflow.',
    ],
  },
  {
    company: 'Amazon Web Services',
    dates: 'Jun 2025 — Aug 2025',
    title: 'Software Engineer Intern',
    bullets: [
      'Spearheaded automation of the services benchmarking process, eliminating manual workflows and improving deployment efficiency.',
      'Designed and implemented a benchmark pipeline that triggers on feature deployment, providing real-time latency and performance metrics.',
    ],
  },
  {
    company: 'Carelon Global Solutions',
    dates: 'Sep 2024 — Dec 2024',
    title: 'Software Engineer Intern',
    bullets: [
      'Analysed and documented an existing UI as part of a modernisation initiative, prototyping a new React + Material UI framework.',
      'Built AI-driven comparison tool POCs using LLMs and Python libraries, documenting findings and technical approaches.',
      'Implemented dynamic HTML templates and automated PDF generation with Spring Boot and Thymeleaf, supporting multilingual letters.',
    ],
  },
  {
    company: 'Fiserv',
    dates: 'Jun 2024 — Aug 2024',
    title: 'Software Engineer Intern',
    bullets: [
      'Contributed to a design system used across multiple teams and products, implementing new UI components in TypeScript and Storybook.',
      'Refactored Angular components for maintainability and wrote Confluence documentation to support future developers.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-label">
          <span className="n">02</span>
          <span className="tag">// experience</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {ROLES.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                gap: 24,
                padding: '28px 0',
                borderBottom:
                  i < ROLES.length - 1 ? '1px solid var(--line-soft)' : 'none',
              }}
            >
              <div className="mono" style={{ color: 'var(--ink-faint)', fontSize: 13 }}>
                {role.dates}
              </div>

              <div>
                <h3 style={{ fontSize: 18, marginBottom: 4 }}>
                  <span className="accent-func">{role.company}</span>
                </h3>
                <div
                  className="mono accent-comment"
                  style={{ fontSize: 13, marginBottom: 14 }}
                >
                  // {role.title}
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--ink-dim)' }}>
                  {role.bullets.map((b, j) => (
                    <li key={j} style={{ marginBottom: 8, fontSize: 15 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
