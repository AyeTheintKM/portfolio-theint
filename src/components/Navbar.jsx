import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/Theme/ThemeContext'
import { Menu, X } from 'lucide-react'
import { BsSun, BsMoon, BsGithub, BsLinkedin } from 'react-icons/bs'

const navLinks = [
    {name: "About", path: "/"},
    {name: "Skills", path: "/skills"},
    {name: "Work", path: "/work"},
    {name: "Education", path: "/education"},
    {name: "Contact", path: "/contact"}
]

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/AyeTheintKM',
        icon: BsGithub,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ayetheintkyimoe',
        icon: BsLinkedin,
    },
]

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navbarBg = 
            theme === "dark"
            ? "bg-black border-b border-blue-900/40"
            : "bg-white border-b border-blue-100";
    const linkVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.05, duration: 0.3 },
        })
    };

  return (
    <motion.nav initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl shadow-lg transition-all duration-500 ${navbarBg}`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 py-3 sm:py-4 overflow-x-hidden">
            <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer flex items-center"
            >
                <NavLink to="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-blue-500 flex items-center justify-center text-white font-bold group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                        A
                    </div>
                    <span className={`text-base sm:text-lg font-bold bg-clip-text bg-linear-to-r from-blue-500 to-blue-700 text-transparent hidden sm:inline group-hover:opacity-80 transition-opacity`}>
                        Aye Theint
                    </span>
                </NavLink>
            </motion.div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex flex-wrap gap-2 lg:gap-3">
                {navLinks.map(( {name, path}, i) => (
                    <motion.li
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={linkVariants}
                        className="relative"
                    >
                        <NavLink
                            to={path}
                            className={({ isActive }) =>
                                `px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative
                                ${isActive ? theme === "dark" 
                                    ? 'text-blue-400 bg-blue-950' 
                                    : 'text-blue-600 bg-blue-100'
                                    : theme === "dark"
                                    ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-950/40'
                                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                                }`
                            }
                        >
                            {name}
                            <motion.span
                                className="absolute left-0 bottom-0 h-0.5 bg-blue-500 rounded-full"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />
                        </NavLink>
                    </motion.li>
                ))}
            </ul>

            <div className="flex items-center gap-2 sm:gap-3 mt-2 md:mt-0">
                <div className="flex items-center gap-2">
                    {socialLinks.map(({ name, href, icon: Icon }) => (
                        <motion.a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-2 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer
                                ${theme === "dark"
                                    ? 'text-blue-300 hover:bg-blue-900'
                                    : 'text-blue-700 hover:bg-blue-100'
                                }`}
                            aria-label={name}
                        >
                            <Icon size={18} />
                        </motion.a>
                    ))}
                </div>

                <motion.button
                    onClick={toggleTheme}
                    whileTap={{ scale: 0.85, rotate: 20 }}
                    whileHover={{ scale: 1.1 }}
                    className={`p-2 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer
                        ${theme === "dark" 
                            ? 'bg-blue-900 text-white hover:shadow-blue-600/30' 
                            : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                        }`}
                >
                    <AnimatePresence mode='wait'>
                        {theme === "dark" ? (
                            <motion.div
                                key="sun"
                                initial={{ opacity: 0, rotate: -180, scale: 0 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: 180, scale: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <BsSun size={18} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="moon"
                                initial={{ opacity: 0, rotate: 180, scale: 0 }}
                                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ opacity: 0, rotate: -180, scale: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <BsMoon size={18} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>

                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileTap={{ scale: 0.85 }}
                    className={`md:hidden p-2.5 rounded-lg transition-all duration-300
                        ${theme === "dark"
                            ? 'bg-blue-950 text-blue-300 text-white hover:bg-blue-900'
                            : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        }`}
                >
                    <AnimatePresence mode='wait'>
                        {isMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                            >
                                <X size={20} />        
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                            >
                                <Menu size={20} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`md:hidden overflow-hidden border-t transition-colors duration-300 
                        ${theme === "dark" 
                            ? 'bg-black/90 border-blue-900/40' 
                            : 'bg-white/90 border-blue-100'}`}
                >
                    <ul className="flex flex-col gap-2 px-5 sm:px-6 py-4 w-full">
                        {navLinks.map(( {name, path}, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <NavLink
                                    to={path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-3 sm:px-4 py-2.5 rounded-lg text-center font-medium transition-all duration-300 
                                            ${isActive
                                                ? theme === "dark"
                                                    ? 'text-blue-400 hover:bg-blue-950'
                                                    : 'text-blue-600 hover:bg-blue-100'
                                                : theme === "dark"
                                                ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-950/40'
                                                : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                                            }`
                                    }
                                >
                                    {name}
                                </NavLink>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar