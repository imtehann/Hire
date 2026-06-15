import Link from "next/link";
import Image from "next/image";
import { freelancers } from "@/lib/freelancers";
import { jobs } from "@/lib/jobs";
import FreelancerCard from "@/components/FreelancerCard";
import JobCard from "@/components/JobCard";

export default function HomePage() {
  const featuredFreelancers = freelancers.slice(0, 3);
  const featuredJobs = jobs.slice(0, 3);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(145deg, #F0F7FF 0%, #F5F0FF 50%, #F8F9FB 100%)",
          padding: "80px 24px 100px",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #2563EB10 0%, transparent 70%)",
            top: "-100px",
            right: "-100px",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #7C3AED08 0%, transparent 70%)",
            bottom: "-80px",
            left: "-80px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <span className="badge-ai">AI-Powered</span>
              <span style={{ fontSize: "0.8125rem", color: "var(--muted)", borderLeft: "1px solid var(--border)", paddingLeft: "10px" }}>
                Bangladesh&apos;s first AI freelance marketplace
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                fontWeight: 800,
                color: "var(--text)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                margin: "0 0 24px",
              }}
            >
              Find freelancers.{" "}
              <span className="gradient-text">Get work done.</span>
              <br />
              Pay your way.
            </h1>

            <p style={{ fontSize: "1.0625rem", color: "var(--muted)", lineHeight: 1.65, maxWidth: "480px", margin: "0 0 36px" }}>
              Hire connects Bangladesh&apos;s best freelancers with businesses that need them. Secure payments via bKash &amp; Nagad. AI-matched in seconds.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
              <Link href="/freelancers" className="btn-primary" style={{ padding: "12px 24px", fontSize: "0.9375rem" }}>
                Find Freelancers
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/jobs" className="btn-secondary" style={{ padding: "12px 24px", fontSize: "0.9375rem" }}>
                Post a Job
              </Link>
            </div>

            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {[
                { icon: "💳", label: "bKash & Nagad" },
                { icon: "🤖", label: "AI Matching" },
                { icon: "🎓", label: "Student Friendly" },
                { icon: "🔐", label: "Secure Payments" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--muted)" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "32px",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 40px rgba(37,99,235,0.10), 0 2px 8px rgba(0,0,0,0.04)",
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
                <Image src="/logo.png" alt="Hire" width={40} height={40} style={{ objectFit: "contain" }} />
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text)" }}>Hire Marketplace</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>Live · Bangladesh</div>
                </div>
              </div>

              {[
                { label: "Freelancers Registered", value: "2,400+", color: "var(--primary)" },
                { label: "Jobs Completed", value: "8,100+", color: "var(--secondary)" },
                { label: "Avg. Project Value", value: "৳4,500", color: "#059669" },
                { label: "Student Freelancers", value: "41%", color: "#D97706" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span style={{ fontSize: "0.875rem", color: "var(--muted)" }}>{stat.label}</span>
                  <span style={{ fontSize: "1rem", fontWeight: 700, color: stat.color }}>{stat.value}</span>
                </div>
              ))}

              <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <div style={{ flex: 1, background: "var(--primary-light)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 600 }}>bKash</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: "2px" }}>Instant payment</div>
                </div>
                <div style={{ flex: 1, background: "var(--secondary-light)", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--secondary)", fontWeight: 600 }}>Nagad</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: "2px" }}>Zero fees</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>How It Works</span>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>
            Hire in three simple steps
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {[
            { step: "1", icon: "🔍", title: "Describe your project", body: "Tell us what you need — our AI matches you with the right freelancers within seconds.", color: "var(--primary)", bg: "var(--primary-light)" },
            { step: "2", icon: "🤝", title: "Connect & agree", body: "Review profiles, chat directly, and agree on scope, timeline, and price — no middleman fees.", color: "var(--secondary)", bg: "var(--secondary-light)" },
            { step: "3", icon: "💳", title: "Pay securely", body: "Release payment via bKash or Nagad once the work is delivered and you're satisfied.", color: "#059669", bg: "#F0FDF4" },
          ].map((item) => (
            <div key={item.step} className="card" style={{ padding: "28px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "16px" }}>
                {item.icon}
              </div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: item.color, marginBottom: "8px", letterSpacing: "0.06em" }}>STEP {item.step}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text)", margin: "0 0 8px" }}>{item.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED FREELANCERS ─────────────────────────────── */}
      <section style={{ padding: "0 24px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <div>
            <span className="section-label" style={{ display: "block", marginBottom: "6px" }}>Top Talent</span>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>Featured Freelancers</h2>
          </div>
          <Link href="/freelancers" style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--primary)", textDecoration: "none" }}>View all →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {featuredFreelancers.map((f) => <FreelancerCard key={f.id} freelancer={f} />)}
        </div>
      </section>

      {/* ── FEATURED JOBS ────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, #F8F9FB 0%, #F0F7FF 100%)", padding: "80px 24px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
            <div>
              <span className="section-label" style={{ display: "block", marginBottom: "6px" }}>Open Positions</span>
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>Latest Jobs</h2>
            </div>
            <Link href="/jobs" style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--primary)", textDecoration: "none" }}>Browse all →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
            {featuredJobs.map((job) => <JobCard key={job.id} job={job} />)}
          </div>
        </div>
      </section>

      {/* ── AI TEASER ─────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", background: "linear-gradient(135deg, #1E1B4B 0%, #1E3A8A 100%)", borderRadius: "24px", padding: "clamp(40px, 6vw, 64px)", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", top: "-40px", right: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, #7C3AED30, transparent)", pointerEvents: "none" }} />
          <span className="badge-ai" style={{ display: "inline-block", marginBottom: "20px" }}>AI Features</span>
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 700, color: "white", letterSpacing: "-0.02em", margin: "0 0 16px", lineHeight: 1.2 }}>
            AI does the heavy lifting,<br />
            <span style={{ color: "#A5B4FC" }}>so you don&apos;t have to.</span>
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "1rem", lineHeight: 1.65, maxWidth: "540px", margin: "0 0 36px" }}>
            Job matching, CV analysis, and proposal drafting — all powered by AI, built specifically for the Bangladeshi freelance market.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/ai" style={{ background: "var(--secondary)", color: "white", padding: "11px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
              Explore AI Features →
            </Link>
            <span style={{ alignSelf: "center", fontSize: "0.8125rem", color: "#94A3B8" }}>Beta · Free during launch</span>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section style={{ padding: "0 24px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>Community</span>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>
            Trusted by freelancers across Bangladesh
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {[
            { quote: "Hire made it possible to land my first client at 19 while still studying at BUET. bKash integration is perfect.", name: "Arif R.", role: "Student Developer, Dhaka", initials: "AR", color: "#2563EB" },
            { quote: "Within a week I had three ongoing clients. The AI matching actually understands what Bangladeshi businesses need.", name: "Sumi A.", role: "Freelance Designer, Chittagong", initials: "SA", color: "#7C3AED" },
            { quote: "Payments through Nagad are instant and I never have to chase anyone. This is the platform I always wanted.", name: "Rafi H.", role: "Content Creator, Rajshahi", initials: "RH", color: "#059669" },
          ].map((t) => (
            <div key={t.name} className="card" style={{ padding: "28px" }}>
              <p style={{ fontSize: "0.9375rem", color: "var(--text)", lineHeight: 1.6, margin: "0 0 20px", fontStyle: "italic" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: t.color + "20", color: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)" }}>{t.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section style={{ background: "var(--primary-light)", borderTop: "1px solid var(--border)", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", margin: "0 0 16px" }}>
          Ready to get started?
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1rem", margin: "0 0 32px" }}>
          Join 2,400+ freelancers and businesses already using Hire.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/freelancers" className="btn-primary" style={{ padding: "12px 28px", fontSize: "0.9375rem" }}>Find a Freelancer</Link>
          <Link href="/jobs" className="btn-secondary" style={{ padding: "12px 28px", fontSize: "0.9375rem" }}>Post Your Job</Link>
        </div>
      </section>
    </>
  );
}
