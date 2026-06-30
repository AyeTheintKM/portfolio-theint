import React, { useState, useRef, useEffect } from 'react'
import { SkillsInfo } from '../constants'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null)
  const [visibleRows, setVisibleRows] = useState(new Set())
  const rowRefs = useRef([])

  const uniqueCategories = SkillsInfo.filter((cat, idx, arr) => {
    const key = cat.skills.map(s => s.name).join(',')
    return arr.findIndex(c => c.skills.map(s => s.name).join(',') === key) === idx
  })

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx)
            setVisibleRows(prev => new Set([...prev, idx]))
          }
        })
      },
      { threshold: 0.15 }
    )
    rowRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [uniqueCategories.length])

  return (
    <section id="skills" className="py-24 px-8 sm:px-16 lg:px-24">

      {/* Section eyebrow — matches Projects/Work style */}
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-zinc-600 mb-16">
        What I Work With
      </p>

      {/* Skill rows */}
      <div className="flex flex-col">
        {uniqueCategories.map((category, idx) => {
          const isActive = activeCategory === idx
          const isVisible = visibleRows.has(idx)

          return (
            <div
              key={category.title}
              ref={el => (rowRefs.current[idx] = el)}
              data-idx={idx}
              className={`
                group relative flex flex-col md:flex-row md:items-start gap-4 md:gap-12 lg:gap-20
                border-t border-gray-200 dark:border-white/8
                last:border-b last:border-gray-200 last:dark:border-white/8
                py-10 md:py-12
                transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{ transitionDelay: `${idx * 80}ms` }}
              onMouseEnter={() => setActiveCategory(idx)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Left: index + category label */}
              <div className="md:w-52 flex-shrink-0 flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 dark:text-zinc-600 font-mono">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3
                  className={`font-display text-xl sm:text-2xl font-bold transition-colors duration-300
                    ${isActive
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-zinc-500'
                    }`}
                >
                  {category.title}
                </h3>
              </div>

              {/* Right: skills */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`
                        flex items-center gap-2 px-3 py-2 rounded-full
                        border transition-all duration-300 cursor-default
                        ${isActive
                          ? 'border-gray-300 dark:border-white/15 bg-white dark:bg-white/5'
                          : 'border-gray-200 dark:border-white/8'
                        }
                      `}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-4 h-4 object-contain flex-shrink-0"
                      />
                      <span className="text-xs font-medium whitespace-nowrap text-gray-600 dark:text-zinc-400">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills