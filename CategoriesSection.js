'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2, Palette, TrendingUp, PenLine, Video, Smartphone,
  Database, Languages, Layers, GraduationCap, Calculator, Camera,
  ArrowRight
} from 'lucide-react';

const categories = [
  { name: 'Web Development', icon: Code2, count: '1,240+', color: 'blue', href: '/jobs?category=web-development' },
  { name: 'Graphic Design', icon: Palette, count: '890+', color: 'pink', href: '/jobs?category=graphic-design' },
  { name: 'Digital Marketing', icon: TrendingUp, count: '670+', color: 'green', href: '/jobs?category=digital-marketing' },
  { name: 'Content Writing', icon: PenLine, count: '540+', color: 'amber', href: '/jobs?category=content-writing' },
  { name: 'Video Editing', icon: Video, count: '420+', color: 'red', href: '/jobs?category=video-editing' },
  { name: 'Mobile Dev', icon: Smartphone, count: '380+', color: 'purple', href: '/jobs?category=mobile-development' },
  { name: 'Data Entry', icon: Database, count: '750+', color: 'teal', href: '/jobs?category=data-entry' },
  { name: 'Translation', icon: Languages, count: '290+', color: 'indigo', href: '/jobs?category=translation' },
  { name: 'UI/UX Design', icon: Layers, count: '310+', color: 'violet', href: '/jobs?category=ui-ux-design' },
  { name: 'Teaching', icon: GraduationCap, count: '680+', color: 'orange', href: '/jobs?category=teaching-tutoring' },
  { name: 'Accounting', icon: Calculator, count: '230+', color: 'emerald', href: '/jobs?category=accounting-finance' },
  { name: 'Photography', icon: Camera, count: '190+', color: 'sky', href: '/jobs?category=photography' },
];

const colorClasses = {
  blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40',
  pink: 'bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 group-hover:bg-pink-100',
  green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 group-hover:bg-green-100',
  amber: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 group-hover:bg-amber-100',
  red: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 group-hover:bg-red-100',
  purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 group-hover:bg-purple-100',
  teal: 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 group-hover:bg-teal-100',
  indigo: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100',
  violet: 'bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 group-hover:bg-violet-100',
  orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 group-hover:bg-orange-100',
  emerald: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-100',
  sky: 'bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 group-hover:bg-sky-100',
};

export default function CategoriesSection() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4"
        >
          <div>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Browse by Category</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
              Find your perfect niche
            </h2>
          </div>
          <Link
            href="/jobs"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all"
          >
            View all categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <Link
                href={cat.href}
                className="group flex flex-col items-center p-4 lg:p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200 text-center"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-200 ${colorClasses[cat.color]}`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 leading-tight mb-1">
                  {cat.name}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {cat.count} jobs
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
