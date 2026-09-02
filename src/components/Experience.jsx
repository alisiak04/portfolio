import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ROLES = [
  {
    company: 'Intercom',
    dates: 'Jan 2026 — May 2026',
    title: 'Software Engineer Intern',
    image: '/experience/intercom.jpg',
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
    image: '/experience/aws.png',
    bullets: [
      'Spearheaded automation of the services benchmarking process, eliminating manual workflows and improving deployment efficiency.',
      'Designed and implemented a benchmark pipeline that triggers on feature deployment, providing real-time latency and performance metrics.',
    ],
  },
  {
    company: 'Carelon Global Solutions',
    dates: 'Sep 2024 — Dec 2024',
    title: 'Software Engineer Intern',
    image: '/experience/carelon.jpeg',
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
    image: '/experience/fiserv.jpeg',
    bullets: [
      'Contributed to a design system used across multiple teams and products, implementing new UI components in TypeScript and Storybook.',
      'Refactored Angular components for maintainability and wrote Confluence documentation to support future developers.',
      'Led sprint review presentations and participated in Agile ceremonies using Jira for project tracking.'
    ],
  },
]

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  const role = ROLES[activeIndex]

  return (
    <section id="experience" className="section">
      <div className="container">
      <div className="experience-panel">
        <div className="section-label">
          <span className="n">02</span>
          <span className="tag">// experience</span>
        </div>

        <div className="experience-layout">

          {/* Company tabs */}
          <nav className="experience-tabs" aria-label="Experience">
            {ROLES.map((item, index) => (
              <button
                key={item.company}
                className={`experience-tab ${
                  index === activeIndex ? 'active' : ''
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.company}
              </button>
            ))}
          </nav>

          {/* Experience content */}
          <div className="experience-content">

            <AnimatePresence mode="wait">
              <motion.div
                key={role.company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="experience-heading">
                  <h3>
                    {role.title}{' '}
                    <span className="accent-func">@ {role.company}</span>
                  </h3>

                  <div className="experience-dates mono">
                    {role.dates}
                  </div>
                </div>

                <ul className="experience-bullets">
                  {role.bullets.map((bullet, index) => (
                    <li key={index}>
                      <span className="bullet-arrow">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Photo */}
          <div className="experience-photo">
            <AnimatePresence mode="wait">
              <motion.img
                key={role.image}
                src={role.image}
                className={role.company === 'Intercom' ? 'intercom-photo' : ''}
                alt={`${role.company} internship`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            <div className="photo-caption mono">
              {role.company}
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  )
}