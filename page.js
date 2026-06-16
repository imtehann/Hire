import Link from "next/link";
import Image from "next/image";
import FreelancerCard from "@/components/FreelancerCard";
import JobCard from "@/components/JobCard";
import { freelancers, jobs, stats, categories, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center mesh-bg overflow-hidden pt-16">
        {/* Decorative orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-blue-100 rounded-full text-xs font-medium text-blue-700 mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                Backed by Bangladesh Tech Council
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                The future of{" "}
                <span className="gradient-text">freelancing</span>{" "}
                in Bangladesh.
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Hire connects Bangladesh&apos;s best freelancers with local businesses. AI-powered matching, instant bKash payments, and an escrow system that protects everyone.
              </p>

              {/* Search bar */}
              <div className="bg-white rounded-xl border border-slate-200 p-1.5 flex gap-2 mb-8 shadow-sm max-w-xl">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for a skill or service..."
                    className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent py-1.5"
                  />
                </div>
                <Link href="/freelancers" className="gradient-bg text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                  Find Talent
                </Link>
              </div>

              {/* Popular searches */}
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="text-xs text-slate-400 self-center">Popular:</span>
                {["React Developer", "Logo Design", "Meta Ads", "Flutter App", "SEO"].map((tag) => (
                  <Link
                    key={tag}
                    href="/jobs"
                    className="text-xs px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              {/* Trust row */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {["RA", "NJ", "SH", "MB", "FT"].map((init, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {init[0]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-400 text-xs">★★★★★</div>
                  <p className="text-xs text-slate-500">50,000+ freelancers across BD</p>
                </div>
                <div className="hidden sm:block w-px h-8 bg-slate-200" />
                <div className="hidden sm:block">
                  <p className="text-xs font-semibold text-slate-900">৳2.4 Crore</p>
                  <p className="text-xs text-slate-500">paid last month</p>
                </div>
              </div>
            </div>

            {/* Right: Floating cards */}
            <div className="hidden lg:flex relative h-[500px] items-center justify-center">
              {/* Main profile card */}
              <div className="absolute top-12 right-12 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 w-64 float-anim">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">RA</div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-sm font-semibold text-slate-900">Raihan Ahmed</p>
                      <svg className="w-3 h-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xs text-slate-500">Full-Stack Developer</p>
                  </div>
                </div>
                <div className="flex gap-1.5 flex-wrap mb-3">
                  {["React", "Node.js", "Next.js"].map(s => (
                    <span key={s} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">{s}</span>
                  ))}
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">★ 4.9 (87 reviews)</span>
                  <span className="font-bold text-slate-900">৳1,800/hr</span>
                </div>
              </div>

              {/* AI match card */}
              <div className="absolute top-8 left-0 bg-white rounded-2xl shadow-lg border border-slate-100 p-4 w-52 float-anim-delay">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-lg gradient-bg flex items-center justify-center text-white text-xs">AI</div>
                  <span className="text-xs font-semibold text-slate-900">Job Match Found</span>
                </div>
                <p className="text-xs text-slate-600 mb-2">React Developer for ShopBD</p>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mb-1">
                  <div className="gradient-bg h-1.5 rounded-full" style={{width: "94%"}} />
                </div>
                <p className="text-xs font-semibold text-blue-700">94% Match</p>
              </div>

              {/* Payment card */}
              <div className="absolute bottom-16 left-4 bg-white rounded-2xl shadow-lg border border-slate-100 p-4 w-52">
                <p className="text-xs text-slate-500 mb-1">Payment Released</p>
                <p className="text-xl font-bold text-slate-900 mb-1">৳35,000</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded font-medium">via bKash</span>
                  <span className="text-xs text-slate-400">Instant ✓</span>
                </div>
              </div>

              {/* Job posted card */}
              <div className="absolute bottom-8 right-4 bg-white rounded-2xl shadow-lg border border-slate-100 p-4 w-56">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-900">New Job Posted</span>
                  <span className="text-xs bg-red-50 text-red-600 px-1.5 py-0.5 rounded font-medium">Urgent</span>
                </div>
                <p className="text-xs text-slate-700 font-medium mb-1">Flutter App Developer</p>
                <p className="text-xs text-slate-500">৳60,000 – ৳90,000 · 6 weeks</p>
                <p className="text-xs text-blue-600 mt-1.5 font-medium">6 proposals →</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-white mb-0.5">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire is Different */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Why Hire</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Built for Bangladesh.<br />Not adapted for it.
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Fiverr and Upwork weren&apos;t designed for our market. Hire is built from the ground up for Bangladeshi freelancers and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏦",
                title: "Local Payments, Finally",
                desc: "Receive and send payments via bKash, Nagad, Rocket, and bank transfer. No dollar conversion headaches. Money in your account in minutes.",
                highlight: "bKash · Nagad · Rocket"
              },
              {
                icon: "🤖",
                title: "AI That Understands BD",
                desc: "Our matching AI is trained on Bangladesh's job market, salary benchmarks, and skill demand curves — not Silicon Valley's.",
                highlight: "94% match accuracy"
              },
              {
                icon: "🛡️",
                title: "Escrow Protection",
                desc: "Clients lock payment before work begins. Freelancers work with confidence. Disputes resolved within 48 hours by our local team.",
                highlight: "৳0 in disputed losses"
              },
              {
                icon: "🇧🇩",
                title: "Local Language Support",
                desc: "Full platform support in Bangla. Browse jobs, write proposals, and message clients in your language.",
                highlight: "বাংলা support"
              },
              {
                icon: "⚡",
                title: "48-Hour Hiring",
                desc: "Our AI pre-qualifies freelancers so businesses don't waste time. Post a job, get matched, hire — in under 2 days.",
                highlight: "Average time to hire"
              },
              {
                icon: "📊",
                title: "Transparent Pricing",
                desc: "Know exactly what you pay. No hidden charges, no surprise fees. Our 10% platform fee is among the lowest in the market.",
                highlight: "10% flat fee"
              }
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-6 hover:bg-blue-50/50 transition-colors group">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                  {item.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Categories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Categories</p>
              <h2 className="text-3xl font-bold text-slate-900">Browse by skill</h2>
            </div>
            <Link href="/jobs" className="text-sm font-medium text-blue-700 hover:underline hidden sm:block">
              View all categories →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link key={cat.name} href="/jobs" className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group cursor-pointer">
                <div className="text-2xl mb-3">{cat.icon}</div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{cat.name}</h3>
                <p className="text-xs text-slate-400">{cat.count.toLocaleString()} freelancers</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Freelancers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Top Talent</p>
              <h2 className="text-3xl font-bold text-slate-900">Hire the best in Bangladesh</h2>
            </div>
            <Link href="/freelancers" className="text-sm font-medium text-blue-700 hover:underline hidden sm:block">
              Browse all freelancers →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {freelancers.slice(0, 3).map((f) => (
              <FreelancerCard key={f.id} freelancer={f} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/freelancers" className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 border border-slate-200 px-5 py-2.5 rounded-xl hover:border-blue-300 hover:text-blue-700 transition-colors">
              View all 50,000+ freelancers
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* AI features teaser */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-blue-300 mb-6">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              Powered by AI
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Intelligence built into<br />every interaction
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Four AI tools that reduce friction, increase earnings, and make freelancing feel effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: "🎯", title: "AI Job Matching", desc: "Surfaces the right jobs before you even search" },
              { icon: "📄", title: "AI CV Analyzer", desc: "Identifies gaps and opportunities in your profile" },
              { icon: "✍️", title: "AI Proposal Generator", desc: "Writes winning proposals in 30 seconds" },
              { icon: "🧠", title: "AI Skill Assessment", desc: "Verifies your expertise with certified badges" }
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/ai-features" className="inline-flex items-center gap-2 gradient-bg text-white text-sm font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg">
              Explore all AI features
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Opportunities</p>
              <h2 className="text-3xl font-bold text-slate-900">Latest jobs in Bangladesh</h2>
            </div>
            <Link href="/jobs" className="text-sm font-medium text-blue-700 hover:underline hidden sm:block">
              Browse all jobs →
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {jobs.slice(0, 4).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 border border-slate-200 px-5 py-2.5 rounded-xl hover:border-blue-300 hover:text-blue-700 transition-colors">
              View all 12,000+ jobs
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Social Proof</p>
            <h2 className="text-3xl font-bold text-slate-900">Real people, real results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-slate-50 rounded-2xl p-6">
                <div className="flex text-amber-400 text-sm mb-4">{"★".repeat(t.rating)}</div>
                <p className="text-sm text-slate-700 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white text-xs font-bold`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to join Bangladesh&apos;s fastest-growing freelance platform?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Whether you&apos;re a freelancer looking for your next client or a business ready to hire — Hire makes it simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/freelancers" className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              I&apos;m a Freelancer →
            </Link>
            <Link href="/jobs" className="bg-white/15 backdrop-blur border border-white/25 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors">
              I want to Hire →
            </Link>
          </div>
          <p className="text-blue-200 text-xs mt-6">Free to sign up · No credit card required · bKash accepted</p>
        </div>
      </section>
    </div>
  );
}
