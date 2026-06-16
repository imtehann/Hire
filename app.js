const page = window.HIRE_PAGE || "home";
const base = window.HIRE_BASE || ".";
const assetBase = base;

const navItems = [
  { id: "home", label: "Home", href: `${base}/` },
  { id: "freelancers", label: "Talent", href: `${base}/freelancers/` },
  { id: "jobs", label: "Jobs", href: `${base}/jobs/` },
  { id: "ai", label: "AI Core", href: `${base}/ai-features/` }
];

const metrics = [
  {
    value: "৳1.8T",
    label: "Domestic services TAM mapped",
    copy: "Corporate ops, retail automation, F-Commerce performance, content, finance workflows, and SME software demand unified into BDT-denominated work graphs."
  },
  {
    value: "8 sec",
    label: "Median local escrow release",
    copy: "bKash and Nagad rails modeled for milestone settlement, dispute holds, payout windows, and ledger-grade reconciliation."
  },
  {
    value: "94.2%",
    label: "AI match precision target",
    copy: "Scope semantics, NID-backed trust signals, delivery history, timezone density, and sector fluency scored before a tender reaches applicants."
  }
];

const proofs = [
  {
    icon: "MFS",
    badge: "Local rails",
    title: "Escrow built around bKash and Nagad behavior",
    copy: "Hire models wallet limits, corporate disbursement flows, milestone locks, VAT documentation, and instant release events for Bangladeshi finance teams.",
    tags: ["Milestone escrow", "Ledger export", "Dispute hold"]
  },
  {
    icon: "NID",
    badge: "Identity",
    title: "NID-first trust instead of generic profile claims",
    copy: "Freelancers carry NID verification, device integrity, payment ownership, and enterprise-safe work records without exposing sensitive identifiers to clients.",
    tags: ["KYC posture", "Zero-trust sessions", "Verified payout"]
  },
  {
    icon: "AI",
    badge: "Translation",
    title: "Bangla project intent converted into global-quality briefs",
    copy: "Informal Bangla, Banglish, voice-note style requirements, and F-Commerce campaign language are converted into structured English scopes and acceptance criteria.",
    tags: ["Semantic scopes", "Tender scoring", "Bilingual QA"]
  }
];

const freelancers = [
  {
    initials: "AR",
    name: "Arif Rahman",
    role: "Senior Next.js Developer",
    city: "Dhanmondi, Dhaka",
    rate: "৳2,850",
    availability: "32 hrs/week",
    verified: true,
    score: "97% match",
    bio: "Builds high-traffic dashboards for logistics, edtech, and export manufacturers. Strong in Next.js, Postgres, server actions, and bKash checkout integration.",
    skills: ["Next.js", "Postgres", "bKash API", "ERP dashboards"],
    sectors: "Logistics, SaaS, manufacturing",
    payout: "bKash merchant-linked"
  },
  {
    initials: "TS",
    name: "Tanjila Sultana",
    role: "F-Commerce Growth Marketer",
    city: "Agrabad, Chittagong",
    rate: "৳1,650",
    availability: "24 hrs/week",
    verified: true,
    score: "95% match",
    bio: "Runs Meta catalog campaigns for apparel sellers, Ramadan bundles, and live-sale funnels. Known for Bangla copy tests and COD-to-MFS conversion lifts.",
    skills: ["Meta Ads", "Catalog ops", "Bangla copy", "ROAS analytics"],
    sectors: "Fashion, beauty, local retail",
    payout: "Nagad instant payout"
  },
  {
    initials: "NH",
    name: "Nusrat Hossain",
    role: "AI Operations Analyst",
    city: "Uttara, Dhaka",
    rate: "৳2,250",
    availability: "28 hrs/week",
    verified: true,
    score: "96% match",
    bio: "Turns messy product, order, and support data into AI-ready taxonomies. Experienced with Bangla intent labeling and SME reporting workflows.",
    skills: ["LLM evals", "Data labeling", "Bangla NLP", "Looker Studio"],
    sectors: "Retail ops, support, marketplaces",
    payout: "Bank and bKash hybrid"
  },
  {
    initials: "MR",
    name: "Mahmudul Rafi",
    role: "Shopify and Inventory Engineer",
    city: "Zindabazar, Sylhet",
    rate: "৳2,100",
    availability: "20 hrs/week",
    verified: true,
    score: "92% match",
    bio: "Rebuilds stock, SKU, and fulfillment systems for Facebook-first sellers moving into owned storefronts. Practical with courier APIs and MFS reconciliation.",
    skills: ["Shopify", "Courier APIs", "Inventory sync", "Nagad"],
    sectors: "F-Commerce, electronics, FMCG",
    payout: "Nagad merchant-linked"
  },
  {
    initials: "FM",
    name: "Farzana Mitu",
    role: "Product Designer for Fintech",
    city: "Banani, Dhaka",
    rate: "৳2,700",
    availability: "18 hrs/week",
    verified: true,
    score: "94% match",
    bio: "Designs high-trust onboarding, payment, and KYC flows for finance teams. Comfortable with Bangla microcopy and enterprise approval states.",
    skills: ["Fintech UX", "Design systems", "KYC flows", "Figma"],
    sectors: "Fintech, HR tech, B2B SaaS",
    payout: "Bank transfer verified"
  },
  {
    initials: "SI",
    name: "Sabbir Islam",
    role: "Performance Content Producer",
    city: "Mirpur DOHS, Dhaka",
    rate: "৳1,450",
    availability: "36 hrs/week",
    verified: true,
    score: "91% match",
    bio: "Creates product reels, catalog crops, and offer creatives for F-Commerce launches. Optimizes assets for mobile shoppers and flash-sale windows.",
    skills: ["Motion ads", "Catalog images", "Canva systems", "A/B testing"],
    sectors: "Home goods, food, apparel",
    payout: "bKash personal verified"
  }
];

const jobs = [
  {
    title: "Eid Campaign Performance Optimization",
    client: "Aarong Digital Growth Studio",
    budget: "৳620,000",
    timeline: "21 days",
    escrow: "৳620,000 confirmed",
    location: "Dhaka hybrid",
    summary: "Audit Meta, Google, and catalog conversion data for a nationwide Eid retail push. Deliver creative testing matrix, Bangla offer copy variants, and live ROAS reporting.",
    tags: ["F-Commerce", "Meta Ads", "Bangla creative", "Retail analytics"]
  },
  {
    title: "Inventory System Rebuild",
    client: "Chaldal Supplier Operations",
    budget: "৳1,450,000",
    timeline: "8 weeks",
    escrow: "৳870,000 first milestone",
    location: "Dhaka remote-first",
    summary: "Modernize supplier stock intake, warehouse exception handling, and SKU reconciliation for perishable inventory with role-based approvals and audit logs.",
    tags: ["Next.js", "Postgres", "ERP", "Audit trails"]
  },
  {
    title: "Nagad Escrow Reconciliation Layer",
    client: "BD SME Commerce Consortium",
    budget: "৳980,000",
    timeline: "6 weeks",
    escrow: "৳490,000 first milestone",
    location: "Chittagong and remote",
    summary: "Build a reconciliation workflow for merchant payouts, order holds, partial refunds, and finance exports across high-volume F-Commerce sellers.",
    tags: ["Nagad", "Payments", "Finance ops", "APIs"]
  },
  {
    title: "Bangla Support Intent Classifier",
    client: "Pathao Merchant Services",
    budget: "৳760,000",
    timeline: "5 weeks",
    escrow: "৳380,000 first milestone",
    location: "Remote",
    summary: "Classify Bangla and Banglish seller support tickets into refund, delivery, product, payment, and fraud categories with measurable QA thresholds.",
    tags: ["Bangla NLP", "LLM evals", "Support ops", "Dashboards"]
  },
  {
    title: "Factory Attendance and Payroll Dashboard",
    client: "Gazipur Apparel Holdings",
    budget: "৳1,180,000",
    timeline: "7 weeks",
    escrow: "৳590,000 first milestone",
    location: "Gazipur onsite kickoff",
    summary: "Create a shift attendance, overtime, mobile approval, and payroll export dashboard for a multi-line garment manufacturer preparing for digital audit readiness.",
    tags: ["HRIS", "Dashboards", "Mobile approvals", "Compliance"]
  }
];

const aiFeatures = [
  {
    icon: "PTA",
    title: "Predictive Talent Allocation",
    copy: "Scores local availability, delivery reliability, NID verification depth, domain fluency, dispute history, and budget fit before a corporate tender opens.",
    tags: ["Match graph", "Risk scoring", "Capacity forecast"]
  },
  {
    icon: "EVA",
    title: "E-Commerce Visual Asset Optimization",
    copy: "Ranks product photos, offer tiles, thumbnails, and short-form creative against category norms for Bangladeshi mobile shoppers and F-Commerce feeds.",
    tags: ["Catalog QA", "Creative score", "Mobile commerce"]
  },
  {
    icon: "BSC",
    title: "Bangla-to-English Semantic Scope Converters",
    copy: "Turns Bangla notes, Banglish briefs, voice-style fragments, and stakeholder comments into structured English scopes, milestones, and acceptance criteria.",
    tags: ["Bangla NLP", "Scope graph", "Acceptance tests"]
  }
];

const layers = [
  {
    title: "Identity and payment trust layer",
    copy: "NID-backed account status, payout ownership, MFS rail compatibility, and milestone ledger health combine into one risk posture."
  },
  {
    title: "Scope intelligence layer",
    copy: "Project text is normalized across Bangla, English, and Banglish, then mapped to skill ontology, budget bands, timelines, and deliverables."
  },
  {
    title: "Execution telemetry layer",
    copy: "Time, task, file, approval, and dispute events become evidence for quality scoring without exposing private workspaces to unrelated clients."
  },
  {
    title: "Market liquidity layer",
    copy: "Supply density, sector demand, escrow utilization, and conversion history guide pricing and tender distribution across Bangladesh."
  }
];

const marketLanes = [
  { label: "Dhaka corporate digital ops", note: "SaaS, fintech, logistics, HRIS", size: "91%" },
  { label: "Chittagong F-Commerce growth", note: "Retail, apparel, consumer goods", size: "76%" },
  { label: "Sylhet remote service supply", note: "Engineering, support, design", size: "64%" },
  { label: "Gazipur industrial workflows", note: "Manufacturing, payroll, compliance", size: "58%" }
];

function pathTo(route) {
  return `${base}${route}`;
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderShell(content) {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="site-shell">
      <header class="nav">
        <div class="nav-inner">
          <a class="brand" href="${pathTo("/")}">
            <span class="brand-mark"><img src="${assetBase}/assets/hire-mark.png" alt="Hire mark"></span>
            <span class="brand-type">
              <span class="brand-name">Hire</span>
              <span class="brand-subline">Bangladesh work graph</span>
            </span>
          </a>
          <nav class="nav-links" aria-label="Primary">
            ${navItems
              .map(
                (item) => `
                  <a class="nav-link ${item.id === page ? "is-active" : ""}" href="${item.href}">
                    ${item.label}
                  </a>
                `
              )
              .join("")}
          </nav>
          <div class="nav-actions">
            <a class="button small ghost" href="${pathTo("/jobs/")}">View tenders</a>
            <a class="button small primary" href="${pathTo("/freelancers/")}">Source talent</a>
          </div>
        </div>
      </header>
      <main id="main" class="page-main">
        ${content}
      </main>
      ${renderFooter()}
      ${renderApplyModal()}
    </div>
  `;
  attachInteractions();
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-copy">
          <strong>Active seed round expansion parameters:</strong> Dhaka corporate pilots, Chittagong F-Commerce liquidity, Sylhet verified remote supply, bKash/Nagad escrow coverage, and NID-backed trust infrastructure.
        </div>
        <div class="footer-meta">
          <span class="badge">Seed-ready MVP</span>
          <span class="badge">BDT marketplace</span>
          <span class="badge">Bangla AI layer</span>
        </div>
      </div>
    </footer>
  `;
}

function renderHome() {
  return `
    <section class="section hero">
      <div>
        <span class="eyebrow">Domestic digital labor infrastructure</span>
        <h1>The Future of Professional Work in Bangladesh.</h1>
        <p class="lead">
          Hire unlocks Bangladesh's corporate and F-Commerce market with verified local talent, escrow-ready MFS payments, and AI that turns Bangla business intent into production scopes.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="${pathTo("/freelancers/")}">Explore verified talent <span class="button-icon">→</span></a>
          <a class="button" href="${pathTo("/ai-features/")}">View AI core</a>
        </div>
        <div class="hero-note">
          <span class="status-dot"></span>
          <span>Design-partner capacity open for banks, retailers, marketplaces, and F-Commerce operators.</span>
        </div>
      </div>
      <div class="hero-visual" aria-label="Hire marketplace operating console">
        ${renderProductPanel()}
      </div>
    </section>
    <section class="section">
      <div class="metrics-grid">
        ${metrics.map(renderMetric).join("")}
      </div>
    </section>
    <section class="section">
      ${renderSectionHeader(
        "Localized moat",
        "Trust primitives generic freelance platforms cannot copy from a landing page.",
        "Hire connects payment settlement, identity assurance, and bilingual scope intelligence to make domestic digital work investable."
      )}
      <div class="proof-grid">
        ${proofs.map(renderProof).join("")}
      </div>
    </section>
    <section class="section">
      <div class="market-map">
        <div class="map-panel">
          <div class="section-kicker">Market liquidity</div>
          <h3>Bangladesh demand vectors tracked by city, sector, and payment readiness.</h3>
          <p class="card-copy">The MVP treats local demand as a living supply chain: corporate tenders, F-Commerce launches, SME systems work, verified freelancers, and escrow utilization move together.</p>
          <div class="map-lanes">
            ${marketLanes
              .map(
                (lane) => `
                  <div class="map-lane">
                    <div>
                      <strong>${lane.label}</strong>
                      <span>${lane.note}</span>
                    </div>
                    <div class="bar-track" aria-label="${lane.size} liquidity index">
                      <div class="bar-fill" style="--size: ${lane.size}"></div>
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="network-panel" aria-label="Hire infrastructure network">
          <div class="network-node">Corporate tenders</div>
          <div class="network-node">F-Commerce briefs</div>
          <div class="network-node">Verified talent</div>
          <div class="network-node">MFS escrow</div>
          <div class="network-core">Hire AI Work Graph</div>
        </div>
      </div>
    </section>
  `;
}

function renderProductPanel() {
  const topMatches = freelancers.slice(0, 3);
  return `
    <div class="product-panel">
      <div class="terminal-head">
        <div class="window-lights"><span></span><span></span><span></span></div>
        <span>Live tender allocation</span>
      </div>
      <div class="terminal-body">
        <div class="deal-card">
          <div class="deal-row">
            <div>
              <span class="deal-label">Corporate project</span>
              <span class="deal-title">Inventory System Rebuild</span>
            </div>
            <span class="deal-value">৳1,450,000</span>
          </div>
          <div class="deal-row">
            <div>
              <span class="deal-label">Scope conversion</span>
              <span class="deal-title">Bangla brief to 18 acceptance criteria</span>
            </div>
            <span class="deal-value">2.4 min</span>
          </div>
        </div>
        <div class="match-stack">
          ${topMatches
            .map(
              (talent) => `
                <div class="match-card">
                  <div class="avatar">${talent.initials}</div>
                  <div>
                    <div class="match-name">${talent.name}</div>
                    <div class="match-role">${talent.role} · ${talent.city}</div>
                  </div>
                  <div class="match-score">${talent.score}</div>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="escrow-rail">
          <div class="rail-node">MFS</div>
          <div class="rail-copy">
            <strong>bKash/Nagad milestone escrow</strong>
            <span>Confirmed funds, payout ownership, and dispute holds reconciled for finance teams.</span>
          </div>
          <div class="rail-amount">৳870,000 locked</div>
        </div>
      </div>
    </div>
  `;
}

function renderMetric(metric) {
  return `
    <article class="metric-card">
      <div class="metric-value">${metric.value}</div>
      <div class="metric-label">${metric.label}</div>
      <p class="metric-copy">${metric.copy}</p>
    </article>
  `;
}

function renderProof(proof) {
  return `
    <article class="proof-card">
      <div class="proof-topline">
        <span class="icon-tile">${proof.icon}</span>
        <span class="status-badge">${proof.badge}</span>
      </div>
      <div>
        <h3>${proof.title}</h3>
        <p class="card-copy">${proof.copy}</p>
      </div>
      <div class="tag-list">
        ${proof.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderSectionHeader(kicker, title, copy) {
  return `
    <div class="section-header">
      <div>
        <div class="section-kicker">${kicker}</div>
        <h2>${title}</h2>
      </div>
      <p>${copy}</p>
    </div>
  `;
}

function renderPageHero(kicker, title, copy, stats) {
  return `
    <section class="section page-hero">
      <div class="page-hero-inner">
        <div>
          <span class="eyebrow">${kicker}</span>
          <h1 class="page-title">${title}</h1>
          <p class="lead">${copy}</p>
        </div>
        <aside class="page-aside" aria-label="Page metrics">
          ${stats
            .map(
              (stat) => `
                <div class="aside-stat">
                  <span class="aside-value">${stat.value}</span>
                  <span class="aside-label">${stat.label}</span>
                </div>
              `
            )
            .join("")}
        </aside>
      </div>
    </section>
  `;
}

function renderFreelancers() {
  return `
    ${renderPageHero(
      "Verified supply",
      "Local talent cards with enterprise-grade trust signals.",
      "Hire surfaces Bangladesh-native operators who understand domestic workflows: MFS reconciliation, F-Commerce growth, Bangla copy, courier dependencies, and corporate approval rhythms.",
      [
        { value: "100%", label: "Rendered profiles carry NID-verified status." },
        { value: "৳1,450-৳2,850", label: "Exact hourly BDT rates with payout readiness." },
        { value: "6 sectors", label: "Engineering, growth, fintech UX, AI ops, inventory, and creative." }
      ]
    )}
    <section class="section">
      <div class="filters">
        <div class="filter-tabs" aria-label="Talent filters">
          <button class="filter-chip is-active" type="button" data-filter="all">All verified</button>
          <button class="filter-chip" type="button" data-filter="engineering">Engineering</button>
          <button class="filter-chip" type="button" data-filter="growth">Growth</button>
          <button class="filter-chip" type="button" data-filter="ai">AI ops</button>
          <button class="filter-chip" type="button" data-filter="design">Design</button>
        </div>
        <label class="search-box">
          <input type="search" data-search placeholder="Search talent, city, skill">
        </label>
      </div>
      <div class="talent-grid" data-talent-grid>
        ${freelancers.map(renderTalentCard).join("")}
      </div>
      <div class="empty-state" data-empty>No verified profiles match the current view.</div>
    </section>
  `;
}

function renderTalentCard(talent) {
  const categories = talent.skills.join(" ").toLowerCase();
  const filterGroup = categories.includes("meta") || categories.includes("copy") || categories.includes("catalog")
    ? "growth"
    : categories.includes("llm") || categories.includes("nlp")
      ? "ai"
      : categories.includes("ux") || categories.includes("figma")
        ? "design"
        : "engineering";
  return `
    <article class="talent-card" data-filter-group="${filterGroup}" data-search-text="${[
      talent.name,
      talent.role,
      talent.city,
      talent.bio,
      talent.skills.join(" "),
      talent.sectors
    ]
      .join(" ")
      .toLowerCase()}">
      <div class="talent-head">
        <div class="avatar">${talent.initials || initials(talent.name)}</div>
        <div>
          <div class="talent-name-row">
            <h3 class="talent-name">${talent.name}</h3>
            <span class="status-badge green">NID verified</span>
          </div>
          <div class="talent-role">${talent.role} · ${talent.city}</div>
        </div>
      </div>
      <div class="rate-row">
        <div class="rate">${talent.rate} <small>/ hour</small></div>
        <div class="availability">${talent.availability}</div>
      </div>
      <p class="bio">${talent.bio}</p>
      <div class="tag-list">${talent.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div>
      <div class="talent-meta">
        <div class="meta-line"><span>Operating sectors</span><strong>${talent.sectors}</strong></div>
        <div class="meta-line"><span>Payout rail</span><strong>${talent.payout}</strong></div>
        <div class="meta-line"><span>Allocation score</span><strong>${talent.score}</strong></div>
      </div>
    </article>
  `;
}

function renderJobs() {
  return `
    ${renderPageHero(
      "Escrow-backed demand",
      "Corporate projects with confirmed BDT funds.",
      "Hire gives verified freelancers a cleaner demand surface: real budgets, known timelines, MFS-aware escrow status, and project summaries converted into execution-ready scopes.",
      [
        { value: "৳4.99M", label: "Total active tender value displayed in this MVP." },
        { value: "5 tenders", label: "Corporate and F-Commerce projects across Bangladesh." },
        { value: "100%", label: "Every project includes confirmed escrow status." }
      ]
    )}
    <section class="section">
      <div class="jobs-board">
        ${jobs.map(renderJobCard).join("")}
      </div>
    </section>
  `;
}

function renderJobCard(job) {
  return `
    <article class="job-card">
      <div class="job-main">
        <div class="job-top">
          <div>
            <h3 class="job-title">${job.title}</h3>
            <div class="job-client">${job.client} · ${job.location}</div>
          </div>
          <span class="escrow-chip">${job.escrow}</span>
        </div>
        <p class="job-summary">${job.summary}</p>
        <div class="tag-list">${job.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
      <aside class="job-side">
        <div>
          <div class="deal-label">Project budget</div>
          <div class="budget">${job.budget}</div>
          <div class="timeline">${job.timeline} delivery window</div>
        </div>
        <button class="button primary" type="button" data-apply="${job.title}">Apply <span class="button-icon">→</span></button>
      </aside>
    </article>
  `;
}

function renderAi() {
  return `
    ${renderPageHero(
      "Defensible IP",
      "The automated platform layers beneath Hire.",
      "The AI core is designed for the local market reality: informal Bangla scopes, payment-risk constraints, uneven vendor histories, and the need to make corporate tenders executable fast.",
      [
        { value: "4 layers", label: "Identity, scope, execution telemetry, and market liquidity." },
        { value: "3 modules", label: "Talent allocation, visual optimization, and semantic scope conversion." },
        { value: "BD-first", label: "Models tuned to domestic workflows rather than generic global profiles." }
      ]
    )}
    <section class="section">
      <div class="feature-grid">
        ${aiFeatures.map(renderFeature).join("")}
      </div>
    </section>
    <section class="section">
      <div class="module-diagram">
        <div class="layer-stack">
          ${layers
            .map(
              (layer, index) => `
                <article class="layer-card">
                  <div class="layer-title">
                    <h3>${layer.title}</h3>
                    <span class="layer-index">L${index + 1}</span>
                  </div>
                  <p class="layer-copy">${layer.copy}</p>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="pipeline-panel">
          <div class="section-kicker">Scope intelligence pipeline</div>
          <h3>From Bangla brief to funded, measurable execution.</h3>
          <p class="card-copy">The converter turns loosely written buyer intent into milestones that can be priced, matched, escrowed, and audited.</p>
          <div class="pipeline">
            ${[
              ["01", "Bangla or Banglish intent", "Campaign, software, creative, support, or operations language accepted.", "Normalize"],
              ["02", "Semantic scope graph", "Deliverables, constraints, stakeholders, acceptance rules, and risks extracted.", "Structure"],
              ["03", "Talent and escrow mapping", "Skills, rate bands, timeline, payment holds, and dispute posture generated.", "Allocate"],
              ["04", "Execution telemetry", "Progress evidence, approval events, and quality signals update the work graph.", "Learn"]
            ]
              .map(
                ([num, title, copy, signal]) => `
                  <div class="pipeline-step">
                    <div class="step-number">${num}</div>
                    <div class="step-copy"><strong>${title}</strong><span>${copy}</span></div>
                    <div class="step-signal">${signal}</div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="insight-strip">
        ${[
          ["71%", "Faster scope normalization for Bangla briefs."],
          ["38%", "Lower tender leakage from unclear acceptance criteria."],
          ["2.1x", "Higher qualified applicant density per corporate project."],
          ["0 PII", "Sensitive NID values hidden from client-facing views."]
        ]
          .map(
            ([value, copy]) => `
              <article class="insight-card">
                <div class="insight-value">${value}</div>
                <p class="insight-copy">${copy}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFeature(feature) {
  return `
    <article class="feature-card">
      <span class="icon-tile">${feature.icon}</span>
      <h3>${feature.title}</h3>
      <p class="feature-copy">${feature.copy}</p>
      <div class="tag-list">${feature.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    </article>
  `;
}

function renderApplyModal() {
  return `
    <div class="modal-backdrop" data-modal aria-hidden="true">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="apply-title">
        <div class="modal-head">
          <h3 id="apply-title">Application packet opened</h3>
          <button class="icon-button" type="button" data-close aria-label="Close application packet">×</button>
        </div>
        <div class="modal-body">
          <p data-modal-copy></p>
          <div class="tag-list">
            <span class="tag">NID verified profile</span>
            <span class="tag">BDT rate card</span>
            <span class="tag">Escrow milestone fit</span>
          </div>
        </div>
        <div class="modal-actions">
          <button class="button ghost" type="button" data-close>Close</button>
          <a class="button primary" href="${pathTo("/freelancers/")}">Review profile fit</a>
        </div>
      </div>
    </div>
  `;
}

function attachInteractions() {
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const searchInput = document.querySelector("[data-search]");
  const talentCards = [...document.querySelectorAll("[data-filter-group]")];
  const empty = document.querySelector("[data-empty]");
  let activeFilter = "all";

  function applyTalentFilters() {
    if (!talentCards.length) return;
    const query = (searchInput?.value || "").trim().toLowerCase();
    let visibleCount = 0;
    talentCards.forEach((card) => {
      const matchesFilter = activeFilter === "all" || card.dataset.filterGroup === activeFilter;
      const matchesSearch = !query || card.dataset.searchText.includes(query);
      const isVisible = matchesFilter && matchesSearch;
      card.style.display = isVisible ? "" : "none";
      if (isVisible) visibleCount += 1;
    });
    if (empty) {
      empty.classList.toggle("is-visible", visibleCount === 0);
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      activeFilter = button.dataset.filter;
      applyTalentFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyTalentFilters);
  }

  const modal = document.querySelector("[data-modal]");
  const modalCopy = document.querySelector("[data-modal-copy]");
  const applyButtons = [...document.querySelectorAll("[data-apply]")];
  const closeButtons = [...document.querySelectorAll("[data-close]")];

  function closeModal() {
    modal?.classList.remove("is-open");
    modal?.setAttribute("aria-hidden", "true");
  }

  applyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.dataset.apply;
      if (modalCopy) {
        modalCopy.textContent = `${title} is ready for a verified application packet with rate card, work history, and escrow milestone fit.`;
      }
      modal?.classList.add("is-open");
      modal?.setAttribute("aria-hidden", "false");
    });
  });

  closeButtons.forEach((button) => button.addEventListener("click", closeModal));
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

const renderers = {
  home: renderHome,
  freelancers: renderFreelancers,
  jobs: renderJobs,
  ai: renderAi
};

renderShell((renderers[page] || renderHome)());
