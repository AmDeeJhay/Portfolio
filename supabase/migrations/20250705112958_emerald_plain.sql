/*
  # Seed Initial Portfolio Data

  1. Sample Projects
  2. Sample Blog Posts
  3. Sample Skills
  4. Sample Categories
*/

-- Insert sample projects
INSERT INTO projects (title, description, image, tech_stack, category, demo_url, github_url, featured) VALUES
(
  'E-Commerce Platform',
  'A full-featured e-commerce platform with React, TypeScript, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.',
  'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
  ARRAY['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Stripe', 'Supabase'],
  'web',
  'https://demo.example.com',
  'https://github.com/example',
  true
),
(
  'Task Management App',
  'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
  'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
  ARRAY['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
  'web',
  'https://demo.example.com',
  'https://github.com/example',
  true
),
(
  'Weather Dashboard',
  'A beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
  'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
  ARRAY['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
  'web',
  'https://demo.example.com',
  'https://github.com/example',
  false
),
(
  'Mobile Banking App',
  'A secure mobile banking application with biometric authentication, transaction history, and financial analytics.',
  'https://images.pexels.com/photos/4968631/pexels-photo-4968631.jpeg?auto=compress&cs=tinysrgb&w=600',
  ARRAY['React Native', 'Firebase', 'Biometric Auth', 'Redux'],
  'mobile',
  'https://demo.example.com',
  'https://github.com/example',
  true
),
(
  'AI Chat Interface',
  'An intelligent chat interface with natural language processing, sentiment analysis, and conversational AI capabilities.',
  'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
  ARRAY['React', 'OpenAI API', 'WebSocket', 'Python', 'FastAPI'],
  'ai',
  'https://demo.example.com',
  'https://github.com/example',
  true
),
(
  'Portfolio Website',
  'A modern, responsive portfolio website built with Next.js and Framer Motion, featuring smooth animations and dark mode.',
  'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
  ARRAY['Next.js', 'Framer Motion', 'Tailwind CSS', 'Supabase'],
  'web',
  'https://demo.example.com',
  'https://github.com/example',
  false
);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, image, published, published_date, read_time, category) VALUES
(
  'Building Modern React Applications with TypeScript',
  'building-modern-react-applications-typescript',
  'Learn how to leverage TypeScript in React applications for better type safety, improved developer experience, and maintainable code.',
  'TypeScript has become an essential tool for React developers. In this comprehensive guide, we''ll explore how to set up a React project with TypeScript, configure your development environment, and implement best practices for type-safe React applications...',
  'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
  true,
  '2024-01-15'::timestamptz,
  8,
  'React'
),
(
  'Mastering CSS Grid and Flexbox in 2024',
  'mastering-css-grid-flexbox-2024',
  'A comprehensive guide to modern CSS layout techniques. Understand when to use Grid vs Flexbox and how to create responsive layouts.',
  'CSS Grid and Flexbox are powerful layout systems that have revolutionized how we build responsive web layouts. In this article, we''ll dive deep into both technologies, compare their strengths, and learn when to use each one...',
  'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
  true,
  '2024-01-10'::timestamptz,
  6,
  'CSS'
),
(
  'State Management in React: Redux vs Context API',
  'state-management-react-redux-context-api',
  'Compare different state management solutions in React and learn when to use each approach for optimal application architecture.',
  'State management is a crucial aspect of React applications. As your app grows, choosing the right state management solution becomes increasingly important. In this detailed comparison, we''ll examine Redux and Context API...',
  'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
  true,
  '2024-01-05'::timestamptz,
  12,
  'React'
),
(
  'Getting Started with Next.js 14 and App Router',
  'getting-started-nextjs-14-app-router',
  'Explore the new App Router in Next.js 14 and learn how to build modern, performant web applications with the latest features.',
  'Next.js 14 introduces significant improvements to the App Router, making it easier than ever to build full-stack React applications. In this tutorial, we''ll explore the new features and build a complete application...',
  'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
  true,
  '2024-01-20'::timestamptz,
  10,
  'Next.js'
);

-- Insert sample skills
INSERT INTO skills (name, category, level, order_index) VALUES
-- Frontend Skills
('HTML5', 'Frontend', 95, 1),
('CSS3', 'Frontend', 90, 2),
('JavaScript', 'Frontend', 90, 3),
('TypeScript', 'Frontend', 85, 4),
('React', 'Frontend', 92, 5),
('Next.js', 'Frontend', 88, 6),

-- Styling & Design Skills
('Tailwind CSS', 'Styling & Design', 95, 1),
('Sass/SCSS', 'Styling & Design', 85, 2),
('Styled Components', 'Styling & Design', 80, 3),
('Figma', 'Styling & Design', 75, 4),
('Responsive Design', 'Styling & Design', 92, 5),
('UI/UX Design', 'Styling & Design', 78, 6),

-- Tools & Platform Skills
('Git & GitHub', 'Tools & Platform', 88, 1),
('Vercel', 'Tools & Platform', 85, 2),
('Supabase', 'Tools & Platform', 80, 3),
('AWS', 'Tools & Platform', 70, 4),
('Docker', 'Tools & Platform', 65, 5),
('VS Code', 'Tools & Platform', 95, 6);