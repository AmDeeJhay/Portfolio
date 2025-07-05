import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App