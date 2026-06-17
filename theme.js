// HIRE - Bangladesh's AI-Powered Freelance Marketplace
// Theme Configuration

export const theme = {
  brand: {
    name: 'HIRE',
    tagline: "Bangladesh's AI-Powered Freelance Marketplace",
    description:
      'Connect with top freelancers, find your next project, or grow your business with AI-powered matching.',
    url: 'https://hire.com.bd',
    email: 'hello@hire.com.bd',
    phone: '+880 1700-000000',
    address: 'Dhaka, Bangladesh',
    social: {
      facebook: 'https://facebook.com/hirebd',
      twitter: 'https://twitter.com/hirebd',
      linkedin: 'https://linkedin.com/company/hirebd',
      instagram: 'https://instagram.com/hirebd',
    },
  },

  colors: {
    light: {
      primary: '#2563EB',
      primaryHover: '#1D4ED8',
      primaryLight: '#EFF6FF',
      secondary: '#7C3AED',
      secondaryHover: '#6D28D9',
      secondaryLight: '#F5F3FF',
      background: '#F8FAFC',
      card: '#FFFFFF',
      text: '#0F172A',
      textSecondary: '#334155',
      muted: '#64748B',
      border: '#E2E8F0',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      accent: '#06B6D4',
    },
    dark: {
      primary: '#3B82F6',
      primaryHover: '#2563EB',
      primaryLight: '#1E3A5F',
      secondary: '#8B5CF6',
      secondaryHover: '#7C3AED',
      secondaryLight: '#2E1B5E',
      background: '#0F172A',
      card: '#1E293B',
      text: '#F8FAFC',
      textSecondary: '#CBD5E1',
      muted: '#94A3B8',
      border: '#334155',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      accent: '#06B6D4',
    },
  },

  typography: {
    fontFamily: {
      sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      display: "'Plus Jakarta Sans', 'Inter', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace",
    },
    scale: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
  },

  spacing: {
    container: '1280px',
    section: '5rem',
    card: '1.5rem',
  },

  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    glow: '0 0 30px rgba(37, 99, 235, 0.3)',
    glowPurple: '0 0 30px rgba(124, 58, 237, 0.3)',
  },
};

export const gradients = {
  primary: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
  primarySoft: 'linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)',
  hero: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
  card: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
  logo: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
};

export const categories = [
  { id: 'web-dev', name: 'Web Development', icon: 'Code2', count: 1240 },
  { id: 'graphic-design', name: 'Graphic Design', icon: 'Palette', count: 890 },
  { id: 'digital-marketing', name: 'Digital Marketing', icon: 'TrendingUp', count: 670 },
  { id: 'content-writing', name: 'Content Writing', icon: 'PenLine', count: 540 },
  { id: 'video-editing', name: 'Video Editing', icon: 'Video', count: 420 },
  { id: 'mobile-dev', name: 'Mobile Development', icon: 'Smartphone', count: 380 },
  { id: 'data-entry', name: 'Data Entry', icon: 'Database', count: 750 },
  { id: 'translation', name: 'Translation', icon: 'Languages', count: 290 },
  { id: 'ui-ux', name: 'UI/UX Design', icon: 'Layers', count: 310 },
  { id: 'seo', name: 'SEO & SEM', icon: 'Search', count: 450 },
  { id: 'accounting', name: 'Accounting', icon: 'Calculator', count: 230 },
  { id: 'teaching', name: 'Teaching & Tutoring', icon: 'GraduationCap', count: 680 },
];

export const skills = [
  'React', 'Next.js', 'Vue.js', 'Node.js', 'Python', 'Django', 'Laravel', 'PHP',
  'WordPress', 'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'After Effects',
  'SEO', 'Facebook Ads', 'Google Ads', 'Content Writing', 'Copywriting', 'Data Entry',
  'Excel', 'SQL', 'MongoDB', 'Firebase', 'AWS', 'Docker', 'Flutter', 'React Native',
  'iOS Development', 'Android Development', 'Machine Learning', 'Data Analysis',
];

export default theme;
