import React from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import { SkillsInfo } from '../constants'
import { RoleAnimator } from '../components/RoleAnimator'
import Resume from '../assets/AyeTheintKyiMoe-software-developer.pdf'

const allSkills = []
const seen = new Set()
SkillsInfo.forEach(cat =>
  cat.skills.forEach(s => {
    if (!seen.has(s.name)) { seen.add(s.name); allSkills.push(s) }
  })
)
const marqueeSkills = [...allSkills, ...allSkills]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const Home = () => {
  const scrollDown = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="min-h-[100svh] sm:min-h-screen flex flex-col justify-center sm:justify-between px-8 sm:px-16 lg:px-24"
    >
      <motion.div
        className="sm:flex-1 flex flex-col justify-start sm:justify-center pt-0 sm:py-20"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Availability badge */}
        {/* <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 w-fit px-3 py-1.5 mb-8 rounded-full border border-gray-200 dark:border-white/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-zinc-400">
            Open to opportunities
          </span>
        </motion.div> */}

        {/* Name */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-xs sm:text-base font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gray-500 dark:text-zinc-500 mb-2 sm:mb-5"
        >
          Aye Theint Kyi Moe
        </motion.p>

        {/* Role */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-2 sm:mb-6"
        >
          <RoleAnimator />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-xs sm:text-lg text-gray-500 dark:text-zinc-400 font-light max-w-xl leading-relaxed mb-3 sm:mb-10"
        >
          I build scalable, full-stack web applications with performance and clean UX at the core.
        </motion.p>

        {/* Stat strip — hidden on mobile to save vertical space */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="hidden sm:flex flex-wrap items-center gap-8 sm:gap-12 mb-10 pb-10 border-b border-gray-200 dark:border-white/8 max-w-xl"
        >
          {[
            { value: '5+', label: 'Projects Shipped' },
            { value: '1+', label: 'Years Experience' },
            { value: '15+', label: 'Technologies' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 dark:text-zinc-600 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CV button */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-3 sm:mb-0"
        >
          <motion.a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-black text-xs sm:text-sm font-semibold rounded-full hover:opacity-85 transition-all duration-300"
          >
            <Download size={13} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Marquee — shorter and tighter on mobile */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="overflow-hidden -mx-8 sm:-mx-16 lg:-mx-24 px-8 sm:px-16 lg:px-24 mt-3 sm:mt-14"
        >
          <div className="flex items-center gap-5 sm:gap-8 marquee-track w-max">
            {marqueeSkills.map((skill, i) => (
              <img
                key={i}
                src={skill.logo}
                alt={skill.name}
                title={skill.name}
                className="w-6 h-6 sm:w-10 sm:h-10 object-contain opacity-40 hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-col items-center pt-6 pb-2 sm:pb-10 sm:pt-0 gap-1 sm:gap-2 mb-6 sm:mb-0"
      >
        <button
          onClick={scrollDown}
          className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400 dark:text-zinc-600 hover:text-gray-700 dark:hover:text-zinc-400 transition-colors duration-200"
        >
          <span className="text-[8px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={13} className="sm:hidden" />
            <ArrowDown size={16} className="hidden sm:block" />
          </motion.span>
        </button>
      </motion.div>
    </section>
  )
}

export default Home