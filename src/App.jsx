import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import { ThemeProvider } from './context/Theme/ThemeContext'
import SideLayout from './components/SideLayout'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Education from './pages/Education'
import Project from './pages/Project'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="dot-grid min-h-screen text-gray-900 dark:text-zinc-100 transition-colors duration-300">
          <SideLayout>
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="projects"><Project /></section>
            <section id="skills"><Skills /></section>
            <section id="work"><Work /></section>
            <section id="education"><Education /></section>
            <section id="contact"><Contact /></section>
            <Footer />
          </SideLayout>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App