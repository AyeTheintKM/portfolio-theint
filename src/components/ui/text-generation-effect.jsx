import { useEffect } from "react"
import { motion, useAnimate } from "framer-motion"

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(" ")

  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      { duration: 0.3, delay: (i) => i * 0.15 }
    )
  }, [])

  return (
    <motion.div ref={scope} className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span key={word + idx} className="opacity-0">
          {word}{idx !== wordsArray.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.div>
  )
}