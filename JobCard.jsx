export default function JobCard({ job }) {
  const {
    title,
    category,
    budget,
    currency,
    duration,
    postedBy,
    postedAt,
    description,
    tags,
    applicants,
    urgent,
    remote,
  } = job;

  const categoryColors = {
    Development: { bg: "#EFF6FF", color: "#2563EB" },
    Design: { bg: "#F5F3FF", color: "#7C3AED" },
    Content: { bg: "#F0FDF4", color: "#059669" },
    Marketing: { bg: "#FFF7ED", color: "#EA580C" },
    Data: { bg: "#FEF9C3", color: "#CA8A04" },
  };

  const catStyle = categoryColors[category] || { bg: "#F3F4F6", color: "#6B7280" };

  return (
    <div
      className="card"
      style={{
        padding: "24px",
        transition: "all 0.2s ease",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
          <span
            style={{
              background: catStyle.bg,
              color: catStyle.color,
              fontSize: "0.7rem",
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: "100px",
            }}
          >
            {category}
          </span>
          {urgent && (
            <span
              style={{
                background: "#FEF2F2",
                color: "#DC2626",
                fontSize: "0.7rem",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: "100px",
              }}
            >
              Urgent
            </span>
          )}
          {remote && (
            <span
              style={{
                background: "#F0FDF4",
                color: "#16A34A",
                fontSize: "0.7rem",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: "100px",
              }}
            >
              Remote
            </span>
          )}
        </div>
        <span style={{ fontSize: "0.75rem", color: "var(--muted)", whiteSpace: "nowrap" }}>
          {postedAt}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "var(--text)",
          margin: 0,
          lineHeight: 1.4,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--muted)",
          lineHeight: 1.55,
          margin: 0,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              color: "var(--muted)",
              fontSize: "0.7rem",
              fontWeight: 500,
              padding: "3px 10px",
              borderRadius: "6px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "14px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--text)",
            }}
          >
            ৳{budget.min.toLocaleString()} – ৳{budget.max.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: "2px" }}>
            {postedBy} · {duration} · {applicants} applied
          </div>
        </div>
        <button
          className="btn-primary"
          style={{ fontSize: "0.8125rem", padding: "8px 16px", flexShrink: 0 }}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
