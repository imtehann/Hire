'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserPlus, Search, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const freelancerSteps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Create Your Profile',
    description: 'Build a compelling profile with your skills, portfolio, and experience. Let AI optimize your profile for better visibility.',
    color: 'blue',
  },
  {
    step: '02',
    icon: Search,
    title: 'Discover Opportunities',
    description: 'Browse thousands of jobs or let our AI match you with perfect opportunities based on your skills and goals.',
    color: 'purple',
  },
  {
    step: '03',
    icon: MessageSquare,
    title: 'Apply & Connect',
    description: 'Send AI-powered proposals, chat with clients, and showcase your work to win your dream projects.',
    color: 'cyan',
  },
  {
    step: '04',
    icon: CheckCircle,
    title: 'Get Paid Locally',
    description: 'Complete projects and receive payment through bKash, Nagad, Rocket, or bank transfer. Simple and fast.',
    color: 'green',
  },
];

const clientSteps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Post Your Job',
    description: 'Describe your project, set budget, and required skills. Our AI helps write the perfect job description.',
    color: 'blue',
  },
  {
    step: '02',
    icon: Search,
    title: 'Review AI Matches',
    description: 'Get matched with the top freelancers instantly. Browse profiles, portfolios, and reviews to find the right fit.',
    color: 'purple',
  },
  {
    step: '03',
    icon: MessageSquare,
    title: 'Hire & Collaborate',
    description: 'Interview candidates, review proposals, and hire with confidence. Use our tools to manage your project effectively.',
    color: 'cyan',
  },
  {
    step: '04',
    icon: CheckCircle,
    title: 'Approve & Pay',
    description: 'Review the delivered work and approve payment. Funds are held safely until you approve the final deliverable.',
    color: 'green',
  },
];

const colorMap = {
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    line: 'from-blue-400 to-purple-400',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
    line: 'from-purple-400 to-cyan-400',
  },
  cyan: {
    bg: 'bg-cyan-100 dark:bg-cyan-900/30',
    text: 'text-cyan-600 dark:text-cyan-400',
    border: 'border-cyan-200 dark:border-cyan-800',
    line: 'from-cyan-400 to-green-400',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
    line: 'from-green-400 to-emerald-400',
  },
};

function StepCard({ step, isLast }) {
  const colors = colorMap[step.color];
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step Number */}
      <div className={`relative w-16 h-16 rounded-2xl ${colors.bg} ${colors.border} border-2 flex items-center justify-center mb-4 z-10`}>
        <step.icon className={`w-7 h-7 ${colors.text}`} />
        <span
          className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold text-white flex items-center justify-center shadow-lg`}
          style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)', fontSize: '10px' }}
        >
          {step.step}
        </span>
      </div>

      {/* Connector Line */}
      {!isLast && (
        <div className={`hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r ${colors.line} opacity-30`}
          style={{ left: '60%', width: 'calc(100% - 30px)' }}
        />
      )}

      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
        {step.title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-48">
        {step.description}
      </p>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            How HIRE works
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Get started in minutes. Our streamlined process makes hiring and finding work
            easier than ever before.
          </p>
        </motion.div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Freelancers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <UserPlus className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">For Freelancers</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Start earning from day one</p>
              </div>
            </div>

            <div className="space-y-6">
              {freelancerSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${colorMap[step.color].bg} flex items-center justify-center`}>
                    <step.icon className={`w-5 h-5 ${colorMap[step.color].text}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-400">{step.step}</span>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">{step.title}</h4>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/register?role=freelancer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
            >
              Join as Freelancer
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* For Clients */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">For Clients</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Hire top talent in 24 hours</p>
              </div>
            </div>

            <div className="space-y-6">
              {clientSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${colorMap[step.color].bg} flex items-center justify-center`}>
                    <step.icon className={`w-5 h-5 ${colorMap[step.color].text}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-400">{step.step}</span>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">{step.title}</h4>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/register?role=client"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm hover:opacity-90 transition-all"
            >
              Hire Talent Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
