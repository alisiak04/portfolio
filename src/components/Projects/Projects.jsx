import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './Projects.css'

const PROJECTS = [
  {
    name: 'Health Work Balance',
    category: 'software',
    tag: 'Solo',
    blurb: 'PC & Fitbit monitoring system',
    description:
      'Real-time monitoring system integrating Fitbit health data with PC usage metrics using Flask and WebSockets.',
    stack: ['Python', 'Flask', 'WebSockets', 'SQLite'],
    image: '/projects/health-work-balance.png',
    github: '#',
  },

  {
    name: 'Lecture Engagement Pod',
    category: 'hardware',
    tag: 'Team',
    blurb: 'IoT classroom feedback system',
    description:
      'IoT classroom feedback system using ESP32 microcontrollers, custom hardware and a Flask web application for real-time anonymous feedback.',
    stack: ['ESP32', 'Flask', 'Wi-Fi', 'IoT'],
    image: '/projects/lecture-engagement-pod.png',
    github: '#',
  },

  // Add the rest of your projects here.
]

const FILTERS = [
  { id: 'all', label: 'ALL' },
  { id: 'software', label: 'SOFTWARE' },
  { id: 'hardware', label: 'HARDWARE / IoT' },
]

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState('all')
  const [projectIndex, setProjectIndex] = useState(0)

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return PROJECTS

    return PROJECTS.filter(
      (project) => project.category === filter
    )
  }, [filter])

  const project = filteredProjects[projectIndex]

  const changeFilter = (newFilter) => {
    setFilter(newFilter)
    setProjectIndex(0)
  }

  const nextProject = () => {
    setProjectIndex((current) =>
      current === filteredProjects.length - 1 ? 0 : current + 1
    )
  }

  const previousProject = () => {
    setProjectIndex((current) =>
      current === 0 ? filteredProjects.length - 1 : current - 1
    )
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container">

        <div className="section-label">
          <span className="n">03</span>
          <span className="tag">// projects</span>
        </div>
      </div>
        <div className="projects-scene">

          {/* Background video */}
          <video
            className="projects-scene-video"
            src="/projects_background.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />

          {/* Slight darkening so the scene feels integrated */}
          <div className="projects-scene-overlay" />

          {/* Clickable computer */}
          <button
            type="button"
            className="projects-computer-hotspot"
            onClick={() => setIsOpen(true)}
            aria-label="Open projects"
          >
            <span className="projects-computer-label">
              VIEW PROJECTS
            </span>
          </button>

          {/* Project popup */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="projects-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  className="projects-modal"
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.94,
                    y: 20,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                  onClick={(event) => event.stopPropagation()}
                >

                  {/* Window header */}
                  <div className="projects-modal-header">

                    <div className="projects-window-dots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <span className="projects-window-title">
                      projects.exe
                    </span>

                    <button
                      type="button"
                      className="projects-close"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close projects"
                    >
                      ×
                    </button>

                  </div>

                  {/* Filters */}
                  <div className="projects-filters">
                    {FILTERS.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={
                          filter === item.id
                            ? 'active'
                            : ''
                        }
                        onClick={() => changeFilter(item.id)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* Project */}
                  {project && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={project.name}
                        className="projects-modal-content"
                        initial={{
                          opacity: 0,
                          x: 12,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: -12,
                        }}
                        transition={{ duration: 0.2 }}
                      >

                        <div className="projects-modal-info">

                          <div className="projects-project-meta">
                            <span>
                              {String(projectIndex + 1).padStart(2, '0')}
                            </span>

                            <span>/</span>

                            <span>
                              {String(filteredProjects.length).padStart(2, '0')}
                            </span>
                          </div>

                          <span className="projects-project-tag">
                            {project.tag}
                          </span>

                          <h3>
                            {project.name}
                          </h3>

                          <div className="projects-project-blurb">
                            // {project.blurb}
                          </div>

                          <p>
                            {project.description}
                          </p>

                          <div className="projects-stack">
                            {project.stack.map((technology) => (
                              <span key={technology}>
                                {technology}
                              </span>
                            ))}
                          </div>

                          {project.github !== '#' && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="projects-github"
                            >
                              View on GitHub ↗
                            </a>
                          )}

                        </div>

                        <div className="projects-project-image">
                          <img
                            src={project.image}
                            alt={project.name}
                          />
                        </div>

                      </motion.div>
                    </AnimatePresence>
                  )}

                  {/* Navigation */}
                  <div className="projects-modal-navigation">

                    <button
                      type="button"
                      onClick={previousProject}
                      disabled={filteredProjects.length <= 1}
                    >
                      ← Previous
                    </button>

                    <div className="projects-project-dots">
                      {filteredProjects.map((item, index) => (
                        <button
                          key={item.name}
                          type="button"
                          aria-label={`View ${item.name}`}
                          className={
                            index === projectIndex
                              ? 'active'
                              : ''
                          }
                          onClick={() =>
                            setProjectIndex(index)
                          }
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={nextProject}
                      disabled={filteredProjects.length <= 1}
                    >
                      Next →
                    </button>

                  </div>

                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      
    </section>
  )
}