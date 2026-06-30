import React from 'react'
import { motion } from 'framer-motion'
import profileImage from '../assets/profile.jpg'

const facts = [
  { label: 'Based in', value: 'Singapore' },
  { label: 'Focus', value: 'Full-Stack Web' },
  { label: 'Currently', value: 'Building & Learning' },
  { label: 'Driven by', value: 'Scalability & Performance' },
]

const fadeUpVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

const About = () => {
  return (
    <section id="about" className="py-24 px-8 sm:px-16 lg:px-24">

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-zinc-600 mb-16"
      >
        About Me
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Image — offset frame with floating accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-4 relative"
        >
          <div className="relative w-full max-w-[280px] mx-auto lg:mx-0">
            {/* Background offset card */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-gray-200 dark:border-white/10" />
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-zinc-900">
              <img
                src={profileImage}
                alt="Aye Theint Kyi Moe"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="lg:col-span-8 min-w-0">

          {/* Big pull-quote line */}
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-snug mb-8"
          >
            Code is the medium. Solving real problems is the goal
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 leading-relaxed max-w-xl mb-12"
          >
            I'm a full-stack developer who enjoys the entire build process, from system design
            down to the smallest UI detail. Outside of shipping projects, I'm usually picking up
            new tools or refining things I've already built.
          </motion.p>

          {/* Facts grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-white/8"
          >
            {facts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={fadeUpVariant}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 dark:text-zinc-600 mb-1.5">
                  {fact.label}
                </p>
                <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-zinc-200 whitespace-nowrap">
                  {fact.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About