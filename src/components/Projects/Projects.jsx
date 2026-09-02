import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './Projects.css'

import PROJECTS from '../../data/projects.json'

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
                  scale: 0.96,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: 12,
                }}
                transition={{
                  duration: 0.25,
                  ease: 'easeOut',
                }}
                onClick={(event) => event.stopPropagation()}
              >

                {/* Window header */}
                <div className="projects-modal-header">
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
                      className={filter === item.id ? 'active' : ''}
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
                      transition={{
                        duration: 0.2,
                      }}
                    >

                      {/* Left side */}
                      <div className="projects-modal-info">

                        <h3>
                          {project.name}
                        </h3>

                        <div className="projects-project-blurb-row">
                          <div className="projects-project-blurb">
                            // {project.blurb}
                          </div>

                          <span className="projects-project-tag">
                            {project.tag}
                          </span>
                        </div>

                        <p>
                          {project.description}
                        </p>

                        <div className="projects-stack">
                          {project.stack.map((technology, i) => (
                            <span
                              key={technology}
                              className={`tag-color-${i % 6}`}
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        {project.github && project.github !== '#' && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projects-github"
                          >
                            <span>View on GitHub</span>
                            <img src="/github.png" alt="GitHub" className="projects-github-icon"/>
                          </a>
                        )}

                      </div>

                      {/* Right side */}
                      <div className="projects-project-image">
                        <img
                          src={project.image}
                          alt={`${project.name} project`}
                          style={{
                            objectFit: project.imageFit || 'contain',
                            objectPosition: project.imagePosition || 'center',
                          }}
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

                  <span className="projects-navigation-label">
                    {String(projectIndex + 1).padStart(2, '0')}
                    {' / '}
                    {String(filteredProjects.length).padStart(2, '0')}
                  </span>

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