import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Wrench, Globe, Database, Cloud } from 'lucide-react'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="w-8 h-8 text-blue-600" />,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 92 },
        { name: 'Next.js', level: 88 }
      ]
    },
    {
      title: 'Styling & Design',
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Sass/SCSS', level: 85 },
        { name: 'Styled Components', level: 80 },
        { name: 'Figma', level: 75 },
        { name: 'Responsive Design', level: 92 },
        { name: 'UI/UX Design', level: 78 }
      ]
    },
    {
      title: 'Tools & Platform',
      icon: <Wrench className="w-8 h-8 text-green-600" />,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'Vercel', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'AWS', level: 70 },
        { name: 'Docker', level: 65 },
        { name: 'VS Code', level: 95 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { name: 'React', icon: <Globe className="w-6 h-6" /> },
            { name: 'Node.js', icon: <Database className="w-6 h-6" /> },
            { name: 'AWS', icon: <Cloud className="w-6 h-6" /> },
            { name: 'Git', icon: <Code className="w-6 h-6" /> },
            { name: 'Figma', icon: <Palette className="w-6 h-6" /> },
            { name: 'Docker', icon: <Wrench className="w-6 h-6" /> }
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 dark:text-blue-400 mb-2">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills