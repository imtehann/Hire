'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, MapPin, CheckCircle, ArrowRight, Briefcase } from 'lucide-react';

// Mock data - in production this comes from Supabase
const featuredFreelancers = [
  {
    id: 1,
    name: 'Fahim Rahman',
    title: 'Full-Stack Developer',
    avatar: null,
    initials: 'FR',
    gradient: 'from-blue-500 to-cyan-500',
    rating: 4.9,
    reviews: 142,
    hourlyRate: 1500,
    location: 'Dhaka',
    isVerified: true,
    isTopRated: true,
    skills: ['React', 'Node.js', 'PostgreSQL'],
    completedJobs: 89,
    bio: '5+ years building scalable web apps. Specialized in React ecosystems and backend APIs.',
  },
  {
    id: 2,
    name: 'Nusrat Jahan',
    title: 'UI/UX & Brand Designer',
    avatar: null,
    initials: 'NJ',
    gradient: 'from-purple-500 to-pink-500',
    rating: 5.0,
    reviews: 98,
    hourlyRate: 1200,
    location: 'Chittagong',
    isVerified: true,
    isTopRated: true,
    skills: ['Figma', 'Illustrator', 'Branding'],
    completedJobs: 67,
    bio: 'Creating stunning designs that convert. Expert in UI/UX for startups and enterprises.',
  },
  {
    id: 3,
    name: 'Khalid Hossain',
    title: 'Digital Marketing Expert',
    avatar: null,
    initials: 'KH',
    gradient: 'from-green-500 to-emerald-500',
    rating: 4.8,
    reviews: 213,
    hourlyRate: 900,
    location: 'Dhaka',
    isVerified: true,
    isTopRated: false,
    skills: ['SEO', 'Facebook Ads', 'Google Analytics'],
    completedJobs: 156,
    bio: 'Grew 50+ Bangladeshi businesses online. ROI-focused campaigns that actually work.',
  },
  {
    id: 4,
    name: 'Tasnim Akter',
    title: 'Content Writer & SEO',
    avatar: null,
    initials: 'TA',
    gradient: 'from-amber-500 to-orange-500',
    rating: 4.9,
    reviews: 87,
    hourlyRate: 700,
    location: 'Sylhet',
    isVerified: true,
    isTopRated: false,
    skills: ['Content Writing', 'SEO', 'Copywriting'],
    completedJobs: 124,
    bio: 'Bengali and English content specialist. 3M+ words written for global clients.',
  },
];

function FreelancerCard({ freelancer, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/freelancers/${freelancer.id}`}
        className="group block bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-xl transition-all duration-300"
      >
        {/* Top Row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${freelancer.gradient} flex items-center justify-center text-white font-bold text-base flex-shrink-0`}>
              {freelancer.initials}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {freelancer.name}
                </h3>
                {freelancer.isVerified && (
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                )}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{freelancer.title}</p>
            </div>
          </div>

          {freelancer.isTopRated && (
            <span
              className="text-xs font-bold px-2 py-1 rounded-lg text-white"
              style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
            >
              Top Rated
            </span>
          )}
        </div>

        {/* Bio */}
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {freelancer.bio}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {freelancer.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-lg font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span className="text-sm font-bold text-gray-900 dark:text-white">{freelancer.rating}</span>
            <span className="text-xs text-gray-400">({freelancer.reviews})</span>
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <MapPin className="w-3 h-3" />
            {freelancer.location}
          </div>

          <div className="text-right">
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              ৳{freelancer.hourlyRate.toLocaleString()}
            </span>
            <span className="text-xs text-gray-400">/hr</span>
          </div>
        </div>

        <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
          <Briefcase className="w-3 h-3" />
          <span>{freelancer.completedJobs} jobs completed</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedFreelancers() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Top Talent
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
              Featured freelancers
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              Handpicked professionals ready to deliver exceptional work
            </p>
          </div>
          <Link
            href="/freelancers"
            className="hidden md:flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredFreelancers.map((freelancer, index) => (
            <FreelancerCard key={freelancer.id} freelancer={freelancer} index={index} />
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/freelancers"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:border-blue-400 transition-all"
          >
            View All Freelancers
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
