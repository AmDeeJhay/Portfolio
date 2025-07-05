'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Users, Award, Coffee } from 'lucide-react'

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "50+ Projects",
      description: "Successfully delivered"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Community Leader",
      description: "AWS Cloud Club & GDG"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "3+ Years",
      description: "Development experience"
    },
    {
      icon: <Coffee className="w-8 h-8 text-amber-600" />,
      title: "∞ Cups",
      description: "Coffee consumed"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Section */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                    DJ
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center mb-2">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Story Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! I'm DivineJustice Samuel, a passionate Frontend Developer with over 3 years of experience creating modern, responsive web applications. My journey in tech began with a curiosity about how websites work, and it has evolved into a deep passion for crafting exceptional user experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in React, TypeScript, and modern web technologies, with a keen eye for design and user experience. When I'm not coding, you can find me leading the AWS Cloud Club community, contributing to open-source projects, or sharing knowledge at GDG events.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in continuous learning and staying up-to-date with the latest technologies. My goal is to create digital experiences that not only look great but also solve real problems and make a positive impact on users' lives.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Current Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Supabase', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About