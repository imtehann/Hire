import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="Hire" fill className="object-contain brightness-200" />
              </div>
              <span className="text-xl font-bold text-white">Hire</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 mb-6">
              Bangladesh&apos;s AI-powered freelance marketplace. Built for local businesses, built for local talent.
            </p>
            <div className="flex gap-3">
              {["Facebook", "LinkedIn", "Twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors text-xs"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              {["Find Freelancers", "Browse Jobs", "AI Features", "How It Works", "Pricing"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Freelancers */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">For Freelancers</h4>
            <ul className="space-y-3 text-sm">
              {["Create Profile", "Find Work", "AI Skill Assessment", "Payment Guide", "Success Stories"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Blog", "Careers", "Press Kit", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 rounded-xl bg-slate-800/60 border border-slate-700">
              <p className="text-xs text-slate-400 mb-1">Payments via</p>
              <div className="flex gap-2 flex-wrap">
                {["bKash", "Nagad", "Rocket", "Bank"].map((p) => (
                  <span key={p} className="text-xs px-2 py-1 bg-slate-700 rounded text-slate-300">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2025 Hire Technologies Ltd. Registered in Bangladesh. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="hover:text-slate-300 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
