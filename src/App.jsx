import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects/Projects.jsx'
import Footer from './components/Footer.jsx'
import CircuitField from './components/CircuitField.jsx'

export default function App() {
  return (
    <>
      {/* Ambient cursor-reactive art layer, sits behind everything */}
      <CircuitField />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  )
}
