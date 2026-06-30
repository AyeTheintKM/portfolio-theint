import React from 'react'
import { motion } from 'framer-motion'
import { education } from '../constants'

const Education = () => {
  return (
    <section id="education" className="py-24 px-8 sm:px-16 lg:px-24">

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-zinc-600 mb-16"
      >
        Education
      </motion.p>

      <div className="flex flex-col">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
            className="grid gap-0"
            style={{ gridTemplateColumns: '88px 24px 1fr' }}
          >
            {/* Year label */}
            <div className="flex items-start justify-end pt-6 pr-3">
              <span className="text-xs font-bold text-gray-400 dark:text-zinc-600 font-mono tracking-wider text-right leading-snug">
                {edu.date}
              </span>
            </div>

            {/* Spine */}
            <div className="flex flex-col items-center pt-6">
              <div className="w-[11px] h-[11px] rounded-full bg-white dark:bg-black border-[2.5px] border-gray-400 dark:border-zinc-600 z-10 flex-shrink-0" />
              {index < education.length - 1 && (
                <div className="w-[1.5px] flex-1 min-h-[30px] bg-gray-200 dark:bg-white/10" />
              )}
            </div>

            {/* Card */}
            <div className="pb-10 pl-4">
              <div className="border-t border-gray-200 dark:border-white/8 pt-6">

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg overflow-hidden border border-gray-200 dark:border-white/10 flex-shrink-0 bg-gray-50 dark:bg-white/5 flex items-center justify-center">
                    {edu.img ? (
                      <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-base font-bold text-gray-700 dark:text-zinc-300">
                        {edu.school?.[0]}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-zinc-400 font-medium">
                      {edu.school}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-zinc-600 mt-0.5 font-mono">
                      {edu.grade}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
                  {edu.desc}
                </p>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Education