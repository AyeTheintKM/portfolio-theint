import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import React from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Education from './pages/Education'
import Contact from './pages/Contact'
import BlurBlog from './BlurBlog'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Navbar />
        <main className="pt-16 md:pt-20"> {/* ← pushes content below fixed navbar */}
          <BlurBlog 
            position={{ top: '40%', left: '20%' }}
            size={{ width: '200px', height: '200px' }}
          />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
