import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { supabase } from '../../lib/supabase'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  published_date: string
  read_time: number
  category: string
  slug: string
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data for demo - replace with Supabase data
  const mockPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Building Modern React Applications with TypeScript',
      excerpt: 'Learn how to leverage TypeScript in React applications for better type safety, improved developer experience, and maintainable code.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      published_date: '2024-01-15',
      read_time: 8,
      category: 'React',
      slug: 'building-modern-react-applications-typescript'
    },
    {
      id: '2',
      title: 'Mastering CSS Grid and Flexbox in 2024',
      excerpt: 'A comprehensive guide to modern CSS layout techniques. Understand when to use Grid vs Flexbox and how to create responsive layouts.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      published_date: '2024-01-10',
      read_time: 6,
      category: 'CSS',
      slug: 'mastering-css-grid-flexbox-2024'
    },
    {
      id: '3',
      title: 'State Management in React: Redux vs Context API',
      excerpt: 'Compare different state management solutions in React and learn when to use each approach for optimal application architecture.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      published_date: '2024-01-05',
      read_time: 12,
      category: 'React',
      slug: 'state-management-react-redux-context-api'
    }
  ]

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      // For demo, we'll use mock data
      // In production, uncomment the Supabase query below
      
      // const { data, error } = await supabase
      //   .from('blog_posts')
      //   .select('*')
      //   .eq('published', true)
      //   .order('published_date', { ascending: false })
      //   .limit(3)
      
      // if (error) throw error
      
      setPosts(mockPosts)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading blog posts...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.published_date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.read_time} min read
                    </div>
                  </div>
                </div>

                <motion.a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="w-5 h-5" />
            View All Posts
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog