"use client";

import { useState } from "react";
import { jobs, jobCategories } from "@/lib/jobs";
import JobCard from "@/components/JobCard";

export default function JobsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = jobs.filter((job) => {
    const matchesCategory = activeCategory === "All" || job.category === activeCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Page header */}
      <div
        style={{
          background: "linear-gradient(135deg, #F5F3FF 0%, #F8F9FB 100%)",
          padding: "56px 24px 48px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "12px" }}>
            Open Jobs
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
            Find your next project
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1rem", margin: "0 0 32px" }}>
            {jobs.length} active jobs from businesses across Bangladesh. Apply in one click.
          </p>

          {/* Search */}
          <div style={{ display: "flex", gap: "12px", maxWidth: "540px" }}>
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
                placeholder="Search jobs by title, skill, or keyword..."
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
            <button className="btn-primary" style={{ padding: "10px 20px", whiteSpace: "nowrap" }}>
              Post a Job
            </button>
          </div>
        </div>
      </div>

      {/* Filters + Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px 80px" }}>
        {/* Category filters */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
          {jobCategories.map((cat) => (
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
                background: activeCategory === cat ? "var(--secondary)" : "white",
                color: activeCategory === cat ? "white" : "var(--muted)",
                borderColor: activeCategory === cat ? "var(--secondary)" : "var(--border)",
              }}
            >
              {cat}
            </button>
          ))}
          <span style={{ fontSize: "0.8125rem", color: "var(--muted)", alignSelf: "center", marginLeft: "8px" }}>
            {filtered.length} job{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Jobs grid */}
        {filtered.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "20px",
            }}
          >
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "80px 24px", color: "var(--muted)" }}>
            <p style={{ fontSize: "1rem", fontWeight: 500, margin: "0 0 8px" }}>No jobs found</p>
            <p style={{ fontSize: "0.875rem" }}>Try a different search term or category.</p>
          </div>
        )}

        {/* Post a job CTA */}
        <div
          style={{
            marginTop: "56px",
            background: "var(--primary-light)",
            border: "1px solid #BFDBFE",
            borderRadius: "16px",
            padding: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--text)", margin: "0 0 6px" }}>
              Need to hire someone?
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--muted)", margin: 0 }}>
              Post a job for free and receive applications from qualified freelancers within hours.
            </p>
          </div>
          <button className="btn-primary" style={{ padding: "11px 24px", whiteSpace: "nowrap" }}>
            Post a Job — Free
          </button>
        </div>
      </div>
    </>
  );
}
