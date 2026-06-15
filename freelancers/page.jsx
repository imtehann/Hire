"use client";

import { useState } from "react";
import { freelancers, categories } from "@/lib/freelancers";
import FreelancerCard from "@/components/FreelancerCard";

export default function FreelancersPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = freelancers.filter((f) => {
    const matchesCategory = activeCategory === "All" || f.category === activeCategory;
    const matchesSearch =
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Page header */}
      <div
        style={{
          background: "linear-gradient(135deg, #F0F7FF 0%, #F8F9FB 100%)",
          padding: "56px 24px 48px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>
            Talent Marketplace
          </span>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.03em",
              margin: "0 0 12px",
            }}
          >
            Find skilled freelancers
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1rem", margin: "0 0 32px" }}>
            Browse {freelancers.length} vetted professionals across Bangladesh. Ready to start today.
          </p>

          {/* Search bar */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              maxWidth: "540px",
            }}
          >
            <div style={{ position: "relative", flex: 1 }}>
              <svg
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--muted)",
                  pointerEvents: "none",
                }}
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search by skill, name, or tool..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px 10px 38px",
                  border: "1.5px solid var(--border)",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  color: "var(--text)",
                  background: "white",
                  outline: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters + Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px 80px" }}>
        {/* Category filters */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "7px 16px",
                borderRadius: "8px",
                fontSize: "0.875rem",
                fontWeight: 500,
                border: "1.5px solid",
                cursor: "pointer",
                transition: "all 0.15s ease",
                background: activeCategory === cat ? "var(--primary)" : "white",
                color: activeCategory === cat ? "white" : "var(--muted)",
                borderColor: activeCategory === cat ? "var(--primary)" : "var(--border)",
              }}
            >
              {cat}
            </button>
          ))}
          <span
            style={{
              fontSize: "0.8125rem",
              color: "var(--muted)",
              alignSelf: "center",
              marginLeft: "8px",
            }}
          >
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {filtered.map((f) => (
              <FreelancerCard key={f.id} freelancer={f} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "80px 24px",
              color: "var(--muted)",
            }}
          >
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ margin: "0 auto 16px", display: "block", opacity: 0.3 }}>
              <circle cx="11" cy="11" r="8" strokeWidth={2}/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
            </svg>
            <p style={{ fontSize: "1rem", fontWeight: 500, margin: "0 0 8px" }}>No freelancers found</p>
            <p style={{ fontSize: "0.875rem" }}>Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </>
  );
}
