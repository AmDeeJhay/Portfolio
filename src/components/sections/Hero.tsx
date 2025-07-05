import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Eye } from 'lucide-react'

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'DivineJustice Samuel'
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setIsTypingComplete(true)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 min-h-[80px] md:min-h-[120px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {displayText}
            <motion.span
              className="text-blue-600 dark:text-blue-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            >
              |
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTypingComplete ? 1 : 0, y: isTypingComplete ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTypingComplete ? 1 : 0, y: isTypingComplete ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Crafting seamless web experiences through modern technology
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTypingComplete ? 1 : 0, y: isTypingComplete ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.button
              onClick={handleScrollToProjects}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5" />
              View Projects
            </motion.button>

            <motion.button
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>

            <motion.button
              onClick={handleScrollToContact}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          className="text-gray-600 dark:text-gray-400 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero