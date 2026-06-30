import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from '../context/Theme/ThemeContext'
import { BsGithub, BsLinkedin, BsMoon, BsSun } from 'react-icons/bs'
import { ExternalLink } from 'lucide-react'

const navItems = [
  { label: 'ABOUT',     id: 'about'     },
  { label: 'PROJECTS',  id: 'projects'  },
  { label: 'SKILLS',    id: 'skills'    },
  { label: 'WORK',      id: 'work'      },
  { label: 'EDUCATION', id: 'education' },
  { label: 'CONTACT',   id: 'contact'   },
]

const SideLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef(null)
  const visibleSectionsRef = useRef(new Map())

  useEffect(() => {
    const observers = []

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSectionsRef.current.set(id, entry.intersectionRatio)
          } else {
            visibleSectionsRef.current.delete(id)
          }

          if (isScrollingRef.current) return

          if (visibleSectionsRef.current.size > 0) {
            const dominant = [...visibleSectionsRef.current.entries()].reduce((a, b) =>
              a[1] > b[1] ? a : b
            )
            setActiveSection(dominant[0])
          } else {
            setActiveSection('')
          }
        },
        {
          threshold: Array.from({ length: 101 }, (_, i) => i / 100),
          rootMargin: '-45% 0px -45% 0px',
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id) => {
    isScrollingRef.current = true
    setActiveSection(navItems.some(n => n.id === id) ? id : '')

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)

    clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false
      if (visibleSectionsRef.current.size > 0) {
        const dominant = [...visibleSectionsRef.current.entries()].reduce((a, b) =>
          a[1] > b[1] ? a : b
        )
        setActiveSection(dominant[0])
      } else {
        setActiveSection('')
      }
    }, 1000)
  }

  return (
    <div className="relative min-h-screen">

      {/* ── LEFT SIDEBAR ── */}
      <aside className="fixed left-0 top-0 h-full w-16 z-50 hidden md:flex flex-col items-center justify-between py-6 border-r border-black/8 dark:border-white/6 bg-[#f0eeea]/80 dark:bg-[#0e0e0e]/80 backdrop-blur-sm">

        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="font-black text-lg text-gray-900 dark:text-white hover:opacity-50 transition-opacity leading-none"
          style={{ letterSpacing: '-0.05em' }}
        >
          <span className="block text-2xl">A</span>
        </button>

        {/* Vertical nav links */}
        <nav className="flex flex-col items-center gap-8">
          {navItems.map(({ label, id }) => {
            const isActive = activeSection === id
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-2 py-3 rounded-full rotate-nav text-[10px] font-bold tracking-[0.2em] transition-all duration-300
                  ${isActive
                    ? 'text-white bg-gray-600'
                    : 'text-gray-400 dark:text-zinc-600 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/70 dark:hover:bg-white/10'
                  }`}
              >
                {label}
              </button>
            )
          })}
        </nav>

        {/* Theme toggle bottom-left */}
        <button
          onClick={toggleTheme}
          className="text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <BsSun size={15} /> : <BsMoon size={15} />}
        </button>
      </aside>

      {/* ── RIGHT SIDEBAR ── */}
      <aside className="fixed right-0 top-0 h-full w-16 z-50 hidden md:flex flex-col items-center justify-between py-6 border-l border-black/8 dark:border-white/6 bg-[#f0eeea]/80 dark:bg-[#0e0e0e]/80 backdrop-blur-sm">

        {/* Download CV */}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[10px] font-semibold tracking-widest text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 rotate-nav"
        >
          <ExternalLink size={10} />
          Download CV
        </a>

        {/* Social icons */}
        <div className="flex flex-col items-center gap-5">
          <a
            href="https://www.linkedin.com/in/ayetheintkyimoe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 dark:text-zinc-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <BsLinkedin size={15} />
          </a>
          <a
            href="https://github.com/AyeTheintKM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 dark:text-zinc-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <BsGithub size={15} />
          </a>
        </div>

        {/* Empty bottom spacer to balance */}
        <div className="w-4 h-4" />
      </aside>

      {/* ── MOBILE TOP BAR ── */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-[#f0eeea]/90 dark:bg-[#0e0e0e]/90 backdrop-blur-sm border-b border-black/8 dark:border-white/6">
        <button
          onClick={() => scrollTo('home')}
          className="font-black text-xl text-gray-900 dark:text-white"
        >
          ATKM<span className="text-blue-500">.</span>
        </button>
        <div className="flex items-center gap-3.5">
          <a
            href="https://www.linkedin.com/in/ayetheintkyimoe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 dark:text-zinc-400"
          >
            <BsLinkedin size={16} />
          </a>
          <a
            href="https://github.com/AyeTheintKM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 dark:text-zinc-400"
          >
            <BsGithub size={16} />
          </a>
          <button onClick={toggleTheme} className="text-gray-500 dark:text-zinc-400">
            {theme === 'dark' ? <BsSun size={16} /> : <BsMoon size={16} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xs font-bold tracking-widest text-gray-600 dark:text-zinc-400"
          >
            {mobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 z-40 bg-[#f0eeea]/98 dark:bg-[#0e0e0e]/98 backdrop-blur-sm border-b border-black/8 dark:border-white/6 px-5 py-6 flex flex-col gap-5">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-sm font-bold tracking-[0.18em] text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {label}
            </button>
          ))}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold tracking-[0.18em] text-gray-400 dark:text-zinc-600 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            DOWNLOAD CV ↗
          </a>
        </div>
      )}

      {/* ── MAIN CONTENT — padded for sidebars ── */}
      <main className="md:ml-16 md:mr-16 pt-14 md:pt-0">
        {children}
      </main>
    </div>
  )
}

export default SideLayout