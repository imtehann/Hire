import Link from "next/link";

function AiFeatureCard({ badge, icon, title, description, features, status, statusColor, statusBg }) {
  return (
    <div className="card" style={{ padding: "32px", position: "relative", overflow: "hidden", transition: "all 0.2s ease" }}>
      <div aria-hidden style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: "linear-gradient(135deg, transparent 60%, #7C3AED08 100%)", pointerEvents: "none" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", flexWrap: "wrap", gap: "8px" }}>
        <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "var(--secondary-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
          {icon}
        </div>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <span className="badge-ai">{badge}</span>
          <span style={{ background: statusBg, color: statusColor, fontSize: "0.7rem", fontWeight: 600, padding: "2px 8px", borderRadius: "100px" }}>
            {status}
          </span>
        </div>
      </div>

      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", margin: "0 0 10px", letterSpacing: "-0.02em" }}>{title}</h3>
      <p style={{ fontSize: "0.9375rem", color: "var(--muted)", lineHeight: 1.6, margin: "0 0 24px" }}>{description}</p>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {features.map((f) => (
          <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.875rem", color: "var(--text)" }}>
            <span style={{ width: "18px", height: "18px", borderRadius: "50%", background: "var(--secondary-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth={3}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      <button style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1.5px solid var(--secondary)", background: "transparent", color: "var(--secondary)", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer" }}>
        Join Waitlist
      </button>
    </div>
  );
}

export default function AiPage() {
  const aiFeatures = [
    {
      badge: "AI",
      icon: "🎯",
      title: "AI Job Matching",
      description: "Our model analyzes your skill profile, past work, and market demand to surface the jobs most likely to result in a hire — before you apply.",
      features: [
        "Skill-to-job relevance scoring in real time",
        "Bangladeshi market salary benchmarking",
        "Smart notifications when a perfect match posts",
        "Bias-reduced matching based on merit, not connections",
      ],
      status: "Beta",
      statusColor: "#92400E",
      statusBg: "#FEF3C7",
    },
    {
      badge: "AI",
      icon: "📄",
      title: "AI CV Analyzer",
      description: "Upload your CV and get instant, actionable feedback tailored to what Bangladeshi clients actually look for — not generic global advice.",
      features: [
        "Structural and formatting assessment",
        "Keyword gap analysis vs. active job listings",
        "Clarity score with plain-language rewrites",
        "Section-by-section improvement suggestions",
      ],
      status: "Coming Soon",
      statusColor: "#6B7280",
      statusBg: "#F3F4F6",
    },
    {
      badge: "AI",
      icon: "✍️",
      title: "AI Proposal Generator",
      description: "Write winning proposals in 30 seconds. Paste the job description, and our AI generates a tailored pitch that feels personal, not templated.",
      features: [
        "Context-aware proposal from job description",
        "Tone calibration: formal, friendly, technical",
        "Bengali or English output toggle",
        "Editable draft — you always have the final word",
      ],
      status: "Coming Soon",
      statusColor: "#6B7280",
      statusBg: "#F3F4F6",
    },
  ];

  return (
    <>
      {/* Hero */}
      <div style={{ background: "linear-gradient(145deg, #1E1B4B 0%, #1E3A8A 60%, #1E293B 100%)", padding: "72px 24px 80px", borderBottom: "1px solid #1E293B", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, #7C3AED20, transparent)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", bottom: "-40px", left: "10%", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, #2563EB15, transparent)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <span className="badge-ai">AI Features</span>
            <span style={{ color: "#A78BFA", fontSize: "0.8125rem" }}>Built for Bangladesh&apos;s freelance economy</span>
          </div>

          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "white", letterSpacing: "-0.03em", margin: "0 0 20px", lineHeight: 1.15, maxWidth: "680px" }}>
            AI tools that actually
            <span style={{ color: "#A5B4FC" }}> understand</span> the local market
          </h1>

          <p style={{ color: "#94A3B8", fontSize: "1.0625rem", lineHeight: 1.65, maxWidth: "560px", margin: "0 0 40px" }}>
            Three AI-powered features designed specifically for Bangladeshi freelancers — not re-skinned Western tools, but built ground-up for our market.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {[
              { label: "Job Matching", icon: "🎯", status: "Beta" },
              { label: "CV Analyzer", icon: "📄", status: "Soon" },
              { label: "Proposal AI", icon: "✍️", status: "Soon" },
            ].map((f) => (
              <div key={f.label} style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", padding: "8px 16px", borderRadius: "100px" }}>
                <span style={{ fontSize: "1rem" }}>{f.icon}</span>
                <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "white" }}>{f.label}</span>
                <span style={{ fontSize: "0.65rem", fontWeight: 600, color: f.status === "Beta" ? "#FCD34D" : "#94A3B8", background: f.status === "Beta" ? "rgba(252,211,77,0.15)" : "rgba(255,255,255,0.08)", padding: "1px 7px", borderRadius: "100px" }}>
                  {f.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px", marginBottom: "80px" }}>
          {aiFeatures.map((f) => <AiFeatureCard key={f.title} {...f} />)}
        </div>

        {/* How AI works */}
        <div style={{ background: "var(--secondary-light)", border: "1px solid #DDD6FE", borderRadius: "20px", padding: "48px", marginBottom: "64px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="badge-ai" style={{ display: "inline-block", marginBottom: "12px" }}>Under the Hood</span>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", margin: 0 }}>How the AI works</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {[
              { num: "1", title: "Ingest", body: "We index all job listings and freelancer profiles across the platform continuously." },
              { num: "2", title: "Embed", body: "A language model converts skills, job descriptions, and CVs into semantic vectors." },
              { num: "3", title: "Match", body: "Cosine similarity + local market signals surface the highest-relevance pairings." },
              { num: "4", title: "Refine", body: "User feedback signals retrain the model weekly to improve local accuracy over time." },
            ].map((step) => (
              <div key={step.num} style={{ textAlign: "center" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--secondary)", color: "white", fontWeight: 700, fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text)", margin: "0 0 8px" }}>{step.title}</h4>
                <p style={{ fontSize: "0.8125rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investor section */}
        <div style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)", borderRadius: "20px", padding: "clamp(32px, 5vw, 56px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "48px", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A78BFA", display: "block", marginBottom: "12px" }}>
              For Investors
            </span>
            <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", fontWeight: 700, color: "white", letterSpacing: "-0.02em", margin: "0 0 16px", lineHeight: 1.3 }}>
              The AI layer makes Hire defensible
            </h2>
            <p style={{ color: "#94A3B8", fontSize: "0.9375rem", lineHeight: 1.65, margin: "0 0 28px" }}>
              Generic job boards compete on traffic. We compete on intelligence. Our data flywheel — more matches → more data → better matches — builds a moat that compounds with every transaction.
            </p>
            <Link href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#A5B4FC", fontSize: "0.9375rem", fontWeight: 600, textDecoration: "none" }}>
              Request investor deck →
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { label: "Bangladeshi freelancers (2024)", value: "650K+", color: "#60A5FA" },
              { label: "Market growing YoY", value: "28%", color: "#A78BFA" },
              { label: "Local payment penetration (bKash/Nagad)", value: "91%", color: "#34D399" },
              { label: "Target GMV Year 1", value: "৳12Cr", color: "#FCD34D" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "0.875rem", color: "#94A3B8" }}>{stat.label}</span>
                <span style={{ fontSize: "1.25rem", fontWeight: 700, color: stat.color, whiteSpace: "nowrap" }}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Waitlist CTA */}
      <div style={{ background: "var(--secondary-light)", borderTop: "1px solid #DDD6FE", padding: "64px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", margin: "0 0 12px" }}>
          Be first when AI features launch
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "0.9375rem", margin: "0 0 28px" }}>
          Join 840 freelancers on the early access waitlist.
        </p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", maxWidth: "400px", margin: "0 auto", flexWrap: "wrap" }}>
          <input type="email" placeholder="your@email.com" style={{ flex: 1, minWidth: "200px", padding: "10px 14px", border: "1.5px solid #DDD6FE", borderRadius: "8px", fontSize: "0.875rem", color: "var(--text)", background: "white", outline: "none" }} />
          <button style={{ background: "var(--secondary)", color: "white", padding: "10px 20px", borderRadius: "8px", fontWeight: 600, fontSize: "0.875rem", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}>
            Join Waitlist
          </button>
        </div>
      </div>
    </>
  );
}
