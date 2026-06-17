'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const footerLinks = {
  platform: {
    title: 'Platform',
    links: [
      { label: 'Find Jobs', href: '/jobs' },
      { label: 'Find Freelancers', href: '/freelancers' },
      { label: 'AI Tools', href: '/ai-tools' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'How It Works', href: '/#how-it-works' },
    ],
  },
  freelancers: {
    title: 'For Freelancers',
    links: [
      { label: 'Create Profile', href: '/register?role=freelancer' },
      { label: 'Browse Jobs', href: '/jobs' },
      { label: 'AI CV Analyzer', href: '/ai-tools#cv' },
      { label: 'AI Proposal Generator', href: '/ai-tools#proposal' },
      { label: 'Skill Assessment', href: '/ai-tools#skills' },
    ],
  },
  clients: {
    title: 'For Clients',
    links: [
      { label: 'Post a Job', href: '/register?role=client' },
      { label: 'Find Talent', href: '/freelancers' },
      { label: 'AI Job Matcher', href: '/ai-tools#matcher' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Hire a Team', href: '/teams' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

const paymentMethods = [
  { name: 'bKash', color: '#E2136E', logo: '৳' },
  { name: 'Nagad', color: '#F5811F', logo: 'N' },
  { name: 'Rocket', color: '#8B1FA8', logo: 'R' },
  { name: 'Bank', color: '#1E40AF', logo: '🏦' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 dark:bg-black text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay ahead with{' '}
                <span
                  className="text-gradient"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  HIRE updates
                </span>
              </h3>
              <p className="text-gray-400 text-sm">
                Get the latest job opportunities, freelance tips, and AI features.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-sm transition-colors"
              />
              <button
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-semibold whitespace-nowrap transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Logo size="md" className="mb-4" />
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Bangladesh&apos;s first AI-powered freelance marketplace. Connecting top talent with
              great clients across every industry.
            </p>

            {/* Payment Methods */}
            <div className="mb-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">
                Local Payments
              </p>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((pm) => (
                  <div
                    key={pm.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-xs font-semibold"
                    style={{ color: pm.color }}
                  >
                    <span>{pm.logo}</span>
                    {pm.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-blue-400" />
              </div>
              <span>Dhaka, Bangladesh 🇧🇩</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-400" />
              </div>
              <a href="mailto:hello@hire.com.bd" className="hover:text-blue-400 transition-colors">
                hello@hire.com.bd
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                <Phone className="w-4 h-4 text-blue-400" />
              </div>
              <a href="tel:+8801700000000" className="hover:text-blue-400 transition-colors">
                +880 1700-000000
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} HIRE Bangladesh. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Cookie Policy', href: '/cookies' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
