import React from 'react'
import { experiences } from '../constants'

const Work = () => {
  return (
    <section id="work" className="py-24 px-8 sm:px-16 lg:px-24">

      {/* Section eyebrow — matches Projects/Skills style */}
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-zinc-600 mb-16">
        Experience
      </p>

      {/* Runway Timeline */}
      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="grid gap-0"
            style={{ gridTemplateColumns: '88px 24px 1fr' }}
          >
            {/* Year label */}
            <div className="flex items-start justify-end pt-6 pr-3">
              <span className="text-xs font-bold text-gray-400 dark:text-zinc-600 font-mono tracking-wider text-right leading-snug">
                {experience.date}
              </span>
            </div>

            {/* Spine — dot + line */}
            <div className="flex flex-col items-center pt-6">
              <div className="w-[11px] h-[11px] rounded-full bg-white dark:bg-black border-[2.5px] border-gray-400 dark:border-zinc-600 z-10 flex-shrink-0" />
              {index < experiences.length - 1 && (
                <div
                  className="w-[1.5px] flex-1 min-h-[30px] bg-gray-200 dark:bg-white/10"
                />
              )}
            </div>

            {/* Card */}
            <div className="pb-10 pl-4">
              <div className="group border-t border-gray-200 dark:border-white/8 pt-6 transition-all duration-300">

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg overflow-hidden border border-gray-200 dark:border-white/10 flex-shrink-0 bg-gray-50 dark:bg-white/5 flex items-center justify-center">
                    {experience.img ? (
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-base font-bold text-gray-700 dark:text-zinc-300">
                        {experience.company?.[0]}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {experience.role}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-zinc-400 font-medium">
                      {experience.company}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-zinc-600 mt-0.5 font-mono">
                      {experience.location}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed mb-4 max-w-2xl">
                  {experience.desc}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-zinc-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work