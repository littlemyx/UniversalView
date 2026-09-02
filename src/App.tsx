import { NavLink, Route, Routes } from 'react-router-dom'

import styles from './App.module.css'

function HomePage() {
  return (
    <section>
      <h1>UniversalView</h1>
      <p>Vite + React + React Router + TypeScript + CSS Modules</p>
    </section>
  )
}

function AboutPage() {
  return (
    <section>
      <h1>About</h1>
      <p>This starter includes ESLint, Prettier, and Playwright.</p>
    </section>
  )
}

function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.nav} aria-label="Primary">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          About
        </NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
