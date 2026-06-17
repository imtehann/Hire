'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, CreditCard, Bot, Star, Globe, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Matching',
    description: 'Our AI analyzes skills, experience, and project requirements to connect you with perfect matches instantly.',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CreditCard,
    title: 'Local Payment Support',
    description: 'Pay and receive money through bKash, Nagad, Rocket, or direct bank transfer — no international fees.',
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Verified Profiles',
    description: 'Every freelancer goes through our verification process. Your security and project success guaranteed.',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: Zap,
    title: 'AI Proposal Generator',
    description: 'Generate winning proposals in seconds. Let AI craft personalized pitches that get you hired faster.',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Star,
    title: 'Quality Guarantee',
    description: 'Milestone-based payments, revision guarantees, and dispute resolution ensure quality work every time.',
    color: 'pink',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Globe,
    title: 'Work Locally & Globally',
    description: 'Access local Bangladesh talent or connect with international clients. Your opportunity, your choice.',
    color: 'indigo',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Real-time chat, project tracking, and deadline management keep projects moving and on schedule.',
    color: 'teal',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Student Opportunities',
    description: 'Dedicated section for students to find tuition, part-time, and beginner freelance opportunities.',
    color: 'violet',
    gradient: 'from-violet-500 to-purple-500',
  },
];

const colorMap = {
  blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
  amber: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
  pink: 'bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400',
  indigo: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
  teal: 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400',
  violet: 'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400',
};

export default function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            Why HIRE?
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Everything you need to{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              succeed
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Built specifically for Bangladesh&apos;s growing freelance economy with the tools,
            payments, and AI features that actually matter.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${colorMap[feature.color]}`}
              >
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
