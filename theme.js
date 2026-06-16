// =============================================
// HIRE Platform - Central Theme & Branding
// lib/theme.js
// =============================================

export const BRAND = {
  name: 'HIRE',
  tagline: "Bangladesh's AI-Powered Freelance Marketplace",
  description:
    'Find top freelancers, post jobs, and grow your business with AI-powered matching. Built for Bangladesh.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://hire.com.bd',
  email: 'hello@hire.com.bd',
  support: 'support@hire.com.bd',
  social: {
    facebook: 'https://facebook.com/hirebd',
    linkedin: 'https://linkedin.com/company/hirebd',
    twitter: 'https://twitter.com/hire_bd',
    instagram: 'https://instagram.com/hire.bd',
    youtube: 'https://youtube.com/@hirebd',
  },
}

// =============================================
// COLOR SYSTEM
// =============================================

export const COLORS = {
  light: {
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    primaryLight: '#EFF6FF',
    secondary: '#7C3AED',
    secondaryHover: '#6D28D9',
    secondaryLight: '#F5F3FF',
    background: '#F8FAFC',
    surface: '#F1F5F9',
    card: '#FFFFFF',
    border: '#E2E8F0',
    borderLight: '#F1F5F9',
    text: '#0F172A',
    textSecondary: '#334155',
    muted: '#64748B',
    mutedLight: '#94A3B8',
    success: '#059669',
    successLight: '#ECFDF5',
    warning: '#D97706',
    warningLight: '#FFFBEB',
    error: '#DC2626',
    errorLight: '#FEF2F2',
    info: '#0EA5E9',
    infoLight: '#F0F9FF',
  },
  dark: {
    primary: '#3B82F6',
    primaryHover: '#2563EB',
    primaryLight: '#1E3A5F',
    secondary: '#8B5CF6',
    secondaryHover: '#7C3AED',
    secondaryLight: '#2D1B5E',
    background: '#0F172A',
    surface: '#162032',
    card: '#1E293B',
    border: '#334155',
    borderLight: '#1E293B',
    text: '#F8FAFC',
    textSecondary: '#CBD5E1',
    muted: '#94A3B8',
    mutedLight: '#64748B',
    success: '#10B981',
    successLight: '#064E3B',
    warning: '#F59E0B',
    warningLight: '#451A03',
    error: '#EF4444',
    errorLight: '#450A0A',
    info: '#38BDF8',
    infoLight: '#0C2A3E',
  },
  gradient: {
    primary: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
    primaryHover: 'linear-gradient(135deg, #1D4ED8 0%, #6D28D9 100%)',
    soft: 'linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)',
    hero: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)',
    card: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
    glow: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
    mesh: `
      radial-gradient(at 40% 20%, rgba(37, 99, 235, 0.3) 0px, transparent 50%),
      radial-gradient(at 80% 0%, rgba(124, 58, 237, 0.2) 0px, transparent 50%),
      radial-gradient(at 0% 50%, rgba(37, 99, 235, 0.2) 0px, transparent 50%),
      radial-gradient(at 80% 50%, rgba(124, 58, 237, 0.15) 0px, transparent 50%)
    `,
  },
}

// =============================================
// TYPOGRAPHY
// =============================================

export const TYPOGRAPHY = {
  fonts: {
    display: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  sizes: {
    '2xs': '0.625rem',  // 10px
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
}

// =============================================
// SPACING
// =============================================

export const SPACING = {
  section: {
    xs: 'py-8',
    sm: 'py-12',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-28',
    xl: 'py-24 md:py-32',
  },
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  containerNarrow: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
  containerWide: 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8',
}

// =============================================
// COMPONENT VARIANTS
// =============================================

export const BUTTON_VARIANTS = {
  primary:
    'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-hire hover:shadow-hire-lg',
  secondary:
    'bg-white dark:bg-card-dark text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/20',
  outline:
    'border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800',
  ghost:
    'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100',
  danger:
    'bg-red-600 hover:bg-red-700 text-white',
  success:
    'bg-emerald-600 hover:bg-emerald-700 text-white',
}

export const BADGE_VARIANTS = {
  primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
  secondary: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300',
  success: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
  warning: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
  error: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
  neutral: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
}

// =============================================
// CATEGORIES WITH ICONS (Maps to Lucide icons)
// =============================================

export const CATEGORIES = [
  {
    id: 'cat-01-0000-0000-0000-000000000001',
    name: 'Web Development',
    slug: 'web-development',
    icon: 'Globe',
    color: '#2563EB',
    bgColor: '#EFF6FF',
  },
  {
    id: 'cat-02-0000-0000-0000-000000000002',
    name: 'Mobile Development',
    slug: 'mobile-development',
    icon: 'Smartphone',
    color: '#7C3AED',
    bgColor: '#F5F3FF',
  },
  {
    id: 'cat-03-0000-0000-0000-000000000003',
    name: 'Graphic Design',
    slug: 'graphic-design',
    icon: 'Palette',
    color: '#DB2777',
    bgColor: '#FDF2F8',
  },
  {
    id: 'cat-04-0000-0000-0000-000000000004',
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    icon: 'TrendingUp',
    color: '#059669',
    bgColor: '#ECFDF5',
  },
  {
    id: 'cat-05-0000-0000-0000-000000000005',
    name: 'Content Writing',
    slug: 'content-writing',
    icon: 'FileText',
    color: '#D97706',
    bgColor: '#FFFBEB',
  },
  {
    id: 'cat-06-0000-0000-0000-000000000006',
    name: 'Video & Animation',
    slug: 'video-animation',
    icon: 'Video',
    color: '#DC2626',
    bgColor: '#FEF2F2',
  },
  {
    id: 'cat-07-0000-0000-0000-000000000007',
    name: 'Data Science & AI',
    slug: 'data-science-ai',
    icon: 'Brain',
    color: '#0EA5E9',
    bgColor: '#F0F9FF',
  },
  {
    id: 'cat-08-0000-0000-0000-000000000008',
    name: 'UI/UX Design',
    slug: 'ui-ux-design',
    icon: 'Layout',
    color: '#8B5CF6',
    bgColor: '#F5F3FF',
  },
  {
    id: 'cat-09-0000-0000-0000-000000000009',
    name: 'Tuition & Teaching',
    slug: 'tuition-teaching',
    icon: 'GraduationCap',
    color: '#16A34A',
    bgColor: '#F0FDF4',
  },
  {
    id: 'cat-10-0000-0000-0000-000000000010',
    name: 'Data Entry',
    slug: 'data-entry',
    icon: 'Database',
    color: '#64748B',
    bgColor: '#F8FAFC',
  },
  {
    id: 'cat-11-0000-0000-0000-000000000011',
    name: 'Virtual Assistant',
    slug: 'virtual-assistant',
    icon: 'Headphones',
    color: '#F59E0B',
    bgColor: '#FFFBEB',
  },
  {
    id: 'cat-12-0000-0000-0000-000000000012',
    name: 'Accounting & Finance',
    slug: 'accounting-finance',
    icon: 'Calculator',
    color: '#0F766E',
    bgColor: '#F0FDFA',
  },
]

// =============================================
// NAVIGATION LINKS
// =============================================

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/freelancers', label: 'Find Talent' },
  { href: '/jobs', label: 'Find Jobs' },
  { href: '/ai-tools', label: 'AI Tools' },
  { href: '/pricing', label: 'Pricing' },
]

export const FOOTER_LINKS = {
  platform: [
    { href: '/jobs', label: 'Find Jobs' },
    { href: '/freelancers', label: 'Find Talent' },
    { href: '/ai-tools', label: 'AI Tools' },
    { href: '/pricing', label: 'Pricing' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ],
  resources: [
    { href: '/faq', label: 'FAQ' },
    { href: '/help', label: 'Help Center' },
    { href: '/blog', label: 'Blog' },
    { href: '/community', label: 'Community' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/cookies', label: 'Cookie Policy' },
  ],
}

// =============================================
// PLATFORM STATS (For homepage)
// =============================================

export const PLATFORM_STATS = [
  { value: '50,000+', label: 'Active Freelancers', icon: 'Users' },
  { value: '12,000+', label: 'Jobs Posted', icon: 'Briefcase' },
  { value: '৳2.5 Crore+', label: 'Earned by Freelancers', icon: 'TrendingUp' },
  { value: '95%', label: 'Client Satisfaction', icon: 'Star' },
]

// =============================================
// PRICING PLANS
// =============================================

export const PRICING_PLANS = {
  freelancer: [
    {
      name: 'Free',
      price: 0,
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '5 job applications per month',
        'Basic profile',
        '2 portfolio projects',
        'Standard search visibility',
        'Community support',
      ],
      cta: 'Get Started Free',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: 299,
      period: 'month',
      currency: '৳',
      description: 'For serious freelancers',
      features: [
        'Unlimited job applications',
        'Pro badge on profile',
        'Unlimited portfolio projects',
        'Priority search ranking',
        'AI proposal generator',
        'AI profile optimizer',
        'Advanced analytics',
        'Priority support',
      ],
      cta: 'Start Pro Trial',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Elite',
      price: 699,
      period: 'month',
      currency: '৳',
      description: 'Maximum visibility & features',
      features: [
        'Everything in Pro',
        'Featured profile placement',
        'Custom profile URL',
        'Video introduction',
        'Early access to jobs',
        'Dedicated account manager',
        'Revenue analytics',
      ],
      cta: 'Go Elite',
      highlighted: false,
    },
  ],
  client: [
    {
      name: 'Starter',
      price: 0,
      period: 'forever',
      description: 'Post your first job',
      features: [
        '2 active job posts',
        'Basic applicant filtering',
        'Standard messaging',
        'Community support',
      ],
      cta: 'Post a Job',
      highlighted: false,
    },
    {
      name: 'Business',
      price: 999,
      period: 'month',
      currency: '৳',
      description: 'For growing businesses',
      features: [
        '20 active job posts',
        'AI freelancer matching',
        'Advanced applicant screening',
        'Priority job featuring',
        'Team collaboration',
        'Analytics dashboard',
        'Priority support',
      ],
      cta: 'Start Business',
      highlighted: true,
      badge: 'Best Value',
    },
    {
      name: 'Enterprise',
      price: null,
      period: 'custom',
      description: 'For large organizations',
      features: [
        'Unlimited job posts',
        'Dedicated account manager',
        'Custom AI screening',
        'API access',
        'White-label options',
        'SLA guarantee',
        'Custom contracts',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ],
}

// =============================================
// PAYMENT METHODS (Bangladesh)
// =============================================

export const PAYMENT_METHODS = [
  {
    id: 'bkash',
    name: 'bKash',
    logo: '/assets/payments/bkash.svg',
    color: '#E2136E',
    description: 'Pay with your bKash account',
    available: false,
    comingSoon: true,
  },
  {
    id: 'nagad',
    name: 'Nagad',
    logo: '/assets/payments/nagad.svg',
    color: '#F55A00',
    description: 'Pay with Nagad mobile banking',
    available: false,
    comingSoon: true,
  },
  {
    id: 'rocket',
    name: 'Rocket',
    logo: '/assets/payments/rocket.svg',
    color: '#8B2FC9',
    description: 'Pay with Dutch-Bangla Rocket',
    available: false,
    comingSoon: true,
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    logo: '/assets/payments/bank.svg',
    color: '#1E40AF',
    description: 'Direct bank account transfer',
    available: false,
    comingSoon: true,
  },
]

// =============================================
// FAQ DATA
// =============================================

export const FAQ_DATA = [
  {
    question: 'How does HIRE work?',
    answer:
      'HIRE connects skilled freelancers with clients who need work done. Freelancers create profiles showcasing their skills and portfolio. Clients post jobs describing what they need. Our AI matches the best freelancers to each job, and both parties can communicate, collaborate, and complete projects through our platform.',
  },
  {
    question: 'Is HIRE free to use?',
    answer:
      'HIRE offers a free tier for both freelancers and clients. Freelancers can apply to 5 jobs per month and clients can post 2 jobs for free. For more features and higher limits, we offer Pro and Business plans starting at ৳299/month.',
  },
  {
    question: 'How does payment work in Bangladesh?',
    answer:
      'We\'re building native support for bKash, Nagad, Rocket, and direct bank transfers. Currently, payments are arranged directly between freelancers and clients. Our secure escrow system (coming soon) will protect both parties.',
  },
  {
    question: 'Can students join HIRE?',
    answer:
      'Absolutely! HIRE has a dedicated Student Economy section with entry-level jobs, tuition opportunities, campus ambassador positions, and beginner-friendly projects. Students can build their portfolio and earn while studying.',
  },
  {
    question: 'How does the AI matching work?',
    answer:
      'Our AI analyzes job requirements, freelancer skills, past work, ratings, and availability to suggest the best matches. The AI also helps freelancers write proposals, optimize profiles, and identifies the best-fit jobs.',
  },
  {
    question: 'How do I verify my freelancer profile?',
    answer:
      'Verification involves submitting your NID/passport, completing skill assessments, and having at least 3 positive reviews. Verified freelancers get a verification badge and appear higher in search results.',
  },
  {
    question: 'What categories does HIRE support?',
    answer:
      'HIRE supports 16+ categories including Web Development, Mobile Apps, Graphic Design, Digital Marketing, Content Writing, Video & Animation, Data Science, UI/UX, Tuition & Teaching, Data Entry, Virtual Assistance, and more.',
  },
  {
    question: 'Is my data secure on HIRE?',
    answer:
      'Yes. We use Supabase with Row Level Security ensuring your data is only accessible to you. All communications are encrypted. We never share your personal information with third parties without consent.',
  },
]
