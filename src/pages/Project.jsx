import React, { useEffect, useRef } from 'react'
import { projects } from '../constants'
import { BsGithub } from 'react-icons/bs'
import { ArrowUpRight } from 'lucide-react'

const Projects = () => {
  const refs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.08 }
    )
    refs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 px-8 sm:px-16 lg:px-24">

      {/* Section eyebrow */}
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-zinc-600 mb-16">
        Selected Work
      </p>

      <div className="flex flex-col">
        {projects.map((p, idx) => (
          <div
            key={p.id}
            ref={el => (refs.current[idx] = el)}
            className="reveal group border-t border-gray-200 dark:border-white/8 last:border-b last:border-gray-200 last:dark:border-white/8 py-12 md:py-16"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 lg:gap-20">

              {/* Left */}
              <div className="flex-1 flex flex-col gap-4">
                <span className="text-[10px] font-bold tracking-[0.25em] text-gray-400 dark:text-zinc-600 font-mono">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-gray-900 dark:text-white leading-tight group-hover:opacity-70 transition-opacity duration-300"
                  style={{ letterSpacing: '-0.01em' }}>
                  {p.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed max-w-md">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {p.tags.map((tag, i) => (
                    <span key={i}
                      className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-2">
                  {p.webapp && (
                    <a href={p.webapp} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-900 dark:border-white pb-0.5 hover:opacity-50 transition-opacity duration-200">
                      View Project <ArrowUpRight size={13} />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-400 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                      <BsGithub size={14} /> GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Right — image */}
              <div className="w-full md:w-[45%] lg:w-[460px] flex-shrink-0">
                <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/8 aspect-video bg-gray-100 dark:bg-zinc-900">
                  <img src={p.image} alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects