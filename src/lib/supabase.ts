import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Project {
  id: string
  title: string
  description: string
  image: string
  tech_stack: string[]
  category: string
  demo_url?: string
  github_url?: string
  featured: boolean
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  published: boolean
  published_date: string
  read_time: number
  category: string
  created_at: string
  updated_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  read: boolean
  created_at: string
}

export interface Skill {
  id: string
  name: string
  category: string
  level: number
  icon?: string
  order_index: number
  created_at: string
}

// API functions
export const projectsApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Project[]
  },

  getFeatured: async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Project[]
  },

  getByCategory: async (category: string) => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as Project[]
  }
}

export const blogApi = {
  getPublished: async (limit?: number) => {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_date', { ascending: false })
    
    if (limit) {
      query = query.limit(limit)
    }
    
    const { data, error } = await query
    
    if (error) throw error
    return data as BlogPost[]
  },

  getBySlug: async (slug: string) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()
    
    if (error) throw error
    return data as BlogPost
  }
}

export const skillsApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('category', { ascending: true })
      .order('order_index', { ascending: true })
    
    if (error) throw error
    return data as Skill[]
  },

  getByCategory: async (category: string) => {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .eq('category', category)
      .order('order_index', { ascending: true })
    
    if (error) throw error
    return data as Skill[]
  }
}

export const contactApi = {
  sendMessage: async (message: Omit<ContactMessage, 'id' | 'read' | 'created_at'>) => {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([message])
      .select()
      .single()
    
    if (error) throw error
    return data as ContactMessage
  }
}