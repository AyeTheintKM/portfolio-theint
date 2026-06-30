import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="px-8 sm:px-16 lg:px-24 py-10 border-t border-gray-200 dark:border-white/8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-400 dark:text-zinc-600">
          © {new Date().getFullYear()} Aye Theint Kyi Moe. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ayetheintkyimoe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 dark:text-zinc-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <BsLinkedin size={14} />
          </a>
          <a
            href="https://github.com/AyeTheintKM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 dark:text-zinc-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <BsGithub size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer