export const freelancers = [
  {
    id: 1,
    name: "Raihan Ahmed",
    title: "Full-Stack Web Developer",
    avatar: "RA",
    avatarBg: "from-blue-500 to-indigo-600",
    skills: ["React", "Node.js", "MongoDB", "Next.js"],
    rating: 4.9,
    reviews: 87,
    hourlyRate: 1800,
    completedJobs: 124,
    location: "Dhaka, Bangladesh",
    availability: "Available",
    verified: true,
    bio: "Building production-grade web apps for startups and SMEs across Bangladesh. Delivered 120+ projects on time.",
    badge: "Top Rated"
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    title: "Brand & UI/UX Designer",
    avatar: "NJ",
    avatarBg: "from-purple-500 to-pink-500",
    skills: ["Figma", "Adobe XD", "Branding", "Illustration"],
    rating: 5.0,
    reviews: 63,
    hourlyRate: 1500,
    completedJobs: 89,
    location: "Chittagong, Bangladesh",
    availability: "Available",
    verified: true,
    bio: "Designing identities for Bangladeshi startups that need to compete globally. Pixel-perfect, on-brand, every time.",
    badge: "Expert"
  },
  {
    id: 3,
    name: "Sabbir Hossain",
    title: "Digital Marketing Specialist",
    avatar: "SH",
    avatarBg: "from-emerald-500 to-teal-600",
    skills: ["Meta Ads", "SEO", "Google Ads", "Content"],
    rating: 4.8,
    reviews: 112,
    hourlyRate: 1200,
    completedJobs: 201,
    location: "Dhaka, Bangladesh",
    availability: "Busy until Jul 5",
    verified: true,
    bio: "Scaling Facebook and e-commerce businesses across BD with data-driven campaigns. ৳50M+ in managed ad spend.",
    badge: "Top Rated"
  },
  {
    id: 4,
    name: "Mitu Begum",
    title: "Virtual Assistant & Data Specialist",
    avatar: "MB",
    avatarBg: "from-orange-400 to-rose-500",
    skills: ["Data Entry", "Research", "Excel", "Customer Support"],
    rating: 4.7,
    reviews: 156,
    hourlyRate: 600,
    completedJobs: 318,
    location: "Sylhet, Bangladesh",
    availability: "Available",
    verified: false,
    bio: "Detail-obsessed VA helping SMEs with operations, research, and data management since 2019.",
    badge: null
  },
  {
    id: 5,
    name: "Farhan Tanvir",
    title: "Mobile App Developer (Flutter)",
    avatar: "FT",
    avatarBg: "from-cyan-500 to-blue-600",
    skills: ["Flutter", "Dart", "Firebase", "iOS/Android"],
    rating: 4.9,
    reviews: 41,
    hourlyRate: 2200,
    completedJobs: 56,
    location: "Dhaka, Bangladesh",
    availability: "Available",
    verified: true,
    bio: "Building mobile-first apps for Bangladeshi startups. Shipped 50+ apps on Play Store and App Store.",
    badge: "Rising Star"
  },
  {
    id: 6,
    name: "Lamia Sultana",
    title: "Content Writer & Copywriter",
    avatar: "LS",
    avatarBg: "from-violet-500 to-purple-600",
    skills: ["Copywriting", "Blog Writing", "Bangla/English", "SEO Content"],
    rating: 4.8,
    reviews: 94,
    hourlyRate: 800,
    completedJobs: 173,
    location: "Rajshahi, Bangladesh",
    availability: "Available",
    verified: true,
    bio: "Words that sell. Writing bilingual content for BD brands, startups, and media outlets since 2020.",
    badge: null
  }
];

export const jobs = [
  {
    id: 1,
    title: "React Developer for E-commerce Platform",
    company: "ShopBD Technologies",
    companyInitial: "S",
    companyBg: "from-blue-500 to-indigo-600",
    category: "Web Development",
    budget: "৳35,000 – ৳55,000",
    budgetType: "Fixed",
    deadline: "3 weeks",
    description: "We're building Bangladesh's next e-commerce platform and need a skilled React developer to build product listing, cart, and checkout flows. Experience with Tailwind CSS required.",
    skills: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    proposals: 8,
    posted: "2 hours ago",
    urgent: true,
    verified: true
  },
  {
    id: 2,
    title: "Logo & Brand Identity for Startup",
    company: "AgroTech BD",
    companyInitial: "A",
    companyBg: "from-emerald-500 to-green-600",
    category: "Design & Branding",
    budget: "৳12,000 – ৳20,000",
    budgetType: "Fixed",
    deadline: "1 week",
    description: "AgriTech startup needs a complete brand identity including logo, color palette, typography, and usage guidelines. We serve farmers across rural Bangladesh.",
    skills: ["Logo Design", "Branding", "Illustrator", "Figma"],
    proposals: 14,
    posted: "5 hours ago",
    urgent: false,
    verified: true
  },
  {
    id: 3,
    title: "Facebook Ads Manager for Fashion Brand",
    company: "Deshi Fashion House",
    companyInitial: "D",
    companyBg: "from-pink-500 to-rose-500",
    category: "Digital Marketing",
    budget: "৳8,000/month",
    budgetType: "Monthly",
    deadline: "Ongoing",
    description: "Manage and scale our Meta ads campaigns across Facebook and Instagram. We're a fast-growing BD fashion brand with ৳2L/month ad budget. Target ROAS: 4x.",
    skills: ["Meta Ads", "Facebook Marketing", "Analytics", "Creative Strategy"],
    proposals: 21,
    posted: "1 day ago",
    urgent: false,
    verified: true
  },
  {
    id: 4,
    title: "Flutter App for Delivery Service",
    company: "DhakaDeliver",
    companyInitial: "D",
    companyBg: "from-orange-500 to-amber-500",
    category: "Mobile Development",
    budget: "৳60,000 – ৳90,000",
    budgetType: "Fixed",
    deadline: "6 weeks",
    description: "Build a 2-sided marketplace app: customer app for ordering and rider app for deliveries. Real-time tracking, bKash payment integration, and push notifications required.",
    skills: ["Flutter", "Firebase", "Google Maps API", "bKash API"],
    proposals: 6,
    posted: "3 hours ago",
    urgent: true,
    verified: true
  },
  {
    id: 5,
    title: "Product Descriptions for 500+ SKUs",
    company: "BD Mart Online",
    companyInitial: "B",
    companyBg: "from-violet-500 to-purple-600",
    category: "Writing & Translation",
    budget: "৳15,000",
    budgetType: "Fixed",
    deadline: "2 weeks",
    description: "Write compelling Bangla and English product descriptions for our online store. SEO-optimized, 150-200 words per product. Fashion, electronics, and home goods categories.",
    skills: ["Bangla Writing", "English Copywriting", "SEO", "E-commerce"],
    proposals: 33,
    posted: "2 days ago",
    urgent: false,
    verified: false
  },
  {
    id: 6,
    title: "Excel Automation & Data Processing",
    company: "Dhaka Accounting Firm",
    companyInitial: "D",
    companyBg: "from-teal-500 to-cyan-600",
    category: "Data & Analytics",
    budget: "৳5,000 – ৳10,000",
    budgetType: "Fixed",
    deadline: "5 days",
    description: "Automate monthly financial reports using Excel macros and VBA. We process data for 40+ small businesses monthly and need to reduce manual work by 80%.",
    skills: ["Excel", "VBA", "Data Processing", "Financial Reporting"],
    proposals: 11,
    posted: "1 day ago",
    urgent: false,
    verified: true
  }
];

export const aiFeatures = [
  {
    id: 1,
    title: "AI Job Matching",
    icon: "🎯",
    gradient: "from-blue-500 to-indigo-600",
    description: "Our AI analyzes your skills, experience, and work history to instantly surface jobs with the highest match score — before you even search.",
    benefits: [
      "Match score for every listing",
      "Learns from your work history",
      "Updates daily based on market demand",
      "Filters irrelevant noise automatically"
    ],
    stat: "3.4x",
    statLabel: "higher hire rate vs manual search"
  },
  {
    id: 2,
    title: "AI CV Analyzer",
    icon: "📄",
    gradient: "from-purple-500 to-violet-600",
    description: "Upload your CV and get instant feedback on gaps, strengths, and how to position your profile for Bangladesh's highest-paying freelance categories.",
    benefits: [
      "ATS compatibility check",
      "Skill gap identification",
      "Salary benchmarking for BD market",
      "Keyword optimization for local demand"
    ],
    stat: "68%",
    statLabel: "freelancers improved earnings after analysis"
  },
  {
    id: 3,
    title: "AI Proposal Generator",
    icon: "✍️",
    gradient: "from-indigo-500 to-blue-600",
    description: "Stop staring at blank screens. Our AI generates winning, personalized proposals in seconds based on the job requirements and your portfolio.",
    benefits: [
      "Tailored to each job listing",
      "Highlights your most relevant work",
      "Optimized opening hooks",
      "Bengali and English support"
    ],
    stat: "2.8x",
    statLabel: "higher client response rate"
  },
  {
    id: 4,
    title: "AI Skill Assessment",
    icon: "🧠",
    gradient: "from-violet-500 to-purple-600",
    description: "Verify your skills with AI-powered assessments and earn badges that signal credibility to clients — increasing your chance of winning jobs by 60%.",
    benefits: [
      "Verified skill badges on profile",
      "Adaptive difficulty testing",
      "Industry-recognized certifications",
      "15+ skill categories in beta"
    ],
    stat: "60%",
    statLabel: "more likely to win jobs with badges"
  }
];

export const stats = [
  { value: "50,000+", label: "Registered Freelancers", sub: "Across 64 districts" },
  { value: "12,000+", label: "Jobs Posted Monthly", sub: "And growing 40% MoM" },
  { value: "৳2.4 Cr", label: "Paid to Freelancers", sub: "In the last 30 days" },
  { value: "4.8/5", label: "Platform Rating", sub: "Based on 8,400+ reviews" }
];

export const categories = [
  { name: "Web Development", icon: "💻", count: 1840, color: "bg-blue-50 text-blue-700" },
  { name: "Design & Branding", icon: "🎨", count: 1230, color: "bg-purple-50 text-purple-700" },
  { name: "Digital Marketing", icon: "📈", count: 980, color: "bg-emerald-50 text-emerald-700" },
  { name: "Writing & Content", icon: "✍️", count: 760, color: "bg-orange-50 text-orange-700" },
  { name: "Mobile Apps", icon: "📱", count: 620, color: "bg-cyan-50 text-cyan-700" },
  { name: "Data & Analytics", icon: "📊", count: 540, color: "bg-rose-50 text-rose-700" },
  { name: "Video & Animation", icon: "🎬", count: 430, color: "bg-amber-50 text-amber-700" },
  { name: "Virtual Assistant", icon: "🤝", count: 910, color: "bg-indigo-50 text-indigo-700" }
];

export const testimonials = [
  {
    id: 1,
    name: "Tanvir Islam",
    role: "Founder, EduBD",
    avatar: "TI",
    avatarBg: "from-blue-500 to-indigo-500",
    text: "We hired a React developer and a designer through Hire within 48 hours. bKash payments made the whole process seamless. The AI matching was scary accurate.",
    rating: 5
  },
  {
    id: 2,
    name: "Fatema Khanom",
    role: "Freelance UI Designer",
    avatar: "FK",
    avatarBg: "from-purple-500 to-pink-500",
    text: "I was earning from Fiverr but the payments were painful. Hire changed everything — instant bKash, Bangladeshi clients who understand my rates, and AI that sends me relevant jobs daily.",
    rating: 5
  },
  {
    id: 3,
    name: "Md. Karim",
    role: "Owner, Karim Traders (SME)",
    avatar: "MK",
    avatarBg: "from-emerald-500 to-teal-500",
    text: "As a small business owner, I always thought freelancers were too expensive or too risky. Hire's escrow system gave me the confidence to hire my first developer. Game changer.",
    rating: 5
  }
];
