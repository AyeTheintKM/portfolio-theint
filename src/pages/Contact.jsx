import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'

const contactMethods = [
  {
    label: 'Email',
    value: 'ayetheintkyimoe01@gmail.com',
    href: 'mailto:ayetheintkyimoe01@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+65 90533299',
    href: 'tel:+6590533299',
    icon: Phone,
  },
  {
    label: 'Whatsapp',
    value: '+65 90533299',
    href: 'https://wa.me/6590533299',
    icon: FaWhatsapp, 
  },
  {
    label: 'LinkedIn',
    value: 'ayetheintkyimoe',
    href: 'https://www.linkedin.com/in/ayetheintkyimoe',
    icon: BsLinkedin,
  },
  {
    label: 'GitHub',
    value: 'AyeTheintKM',
    href: 'https://github.com/AyeTheintKM',
    icon: BsGithub,
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-8 sm:px-16 lg:px-24">

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-zinc-600 mb-16"
      >
        Get In Touch
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4 max-w-2xl"
      >
        Let's build something together.
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 max-w-xl mb-14"
      >
        Reach out through any of these — happy to talk about projects, roles, or anything in between.
      </motion.p>

      <div className="flex flex-col">
        {contactMethods.map(({ label, value, href, icon: Icon }, idx) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
            className="group flex items-center justify-between gap-6 border-t border-gray-200 dark:border-white/8 last:border-b last:border-gray-200 last:dark:border-white/8 py-6 transition-colors duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-400 dark:text-zinc-500 group-hover:border-gray-900 dark:group-hover:border-white group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                <Icon size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 dark:text-zinc-600">
                  {label}
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-zinc-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {value}
                </p>
              </div>
            </div>
            <span className="text-gray-300 dark:text-zinc-700 group-hover:translate-x-1 group-hover:text-gray-900 dark:group-hover:text-white transition-all duration-300">
              →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Contact