import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart, Code } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/divinejustice',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/divinejustice',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/divinejustice',
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: 'Email',
      url: 'mailto:divinejustice@example.com',
      icon: <Mail className="w-5 h-5" />
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ]

  const techStack = [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Supabase'
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              DivineJustice
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Frontend Developer passionate about creating exceptional web experiences through modern technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Built With
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Let's Connect
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                📧 divinejustice@example.com
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                📍 Lagos, Nigeria
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                💼 Available for freelance work
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span>© {currentYear} DivineJustice Samuel. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>and</span>
              <Code className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer