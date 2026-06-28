import { Download } from 'lucide-react'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import profileImage from '../assets/profile.jpg'

const About = () => {
  return (
    <section className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-2/3 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight text-gray-900 dark:text-white">
            Hello, I am
          </h1>
          <h5 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            Aye Theint Kyi Moe
          </h5>
          {/* Skills heading with typing effect */}
          <h6 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300 leading-tight">
            <span className="text-gray-700 dark:text-gray-300">
              I am a&nbsp; 
            </span>
            <Typewriter
              words={["Software Engineer", "Full Stack Developer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={500}
              deleteDelay={2000}
              cursorRenderer={cursor => <span className="text-[#8245ec]">{cursor}</span>}
            ></Typewriter>
          </h6>
          {/* Add a brief description or tagline about yourself here */}
          <p className="text-gray-400 dark:text-gray-300 text-base sm:text-lg md:text-lg mb-10 mt-8 leading-relaxed">
            I am a passionate software engineer with a strong background in full-stack development. 
            I enjoy creating innovative solutions and building applications that make a difference. 
            My expertise lies in developing scalable web applications, and I am always eager to learn 
            new technologies and improve my skills.
          </p>
          <a href="" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-700 dark:bg-blue-500 text-white dark:text-gray-900 transform font-bold py-3 px-8 rounded-full shadow-md hover:bg-blue-800 hover:scale-105 dark:hover:scale-105 dark:hover:bg-blue-600 transition duration-300">
            <Download className="inline-block mr-2" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img src= {profileImage} alt="Profile" 
          className="w-48 h-48 sm:w-56 sm:h-56 drop-shadow-[0_10px_20px_rgba(29,78,216,0.5)] rounded-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default About