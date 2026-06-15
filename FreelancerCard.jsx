import Link from "next/link";

function StarRating({ rating }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#0F172A" }}>
        {rating}
      </span>
    </span>
  );
}

export default function FreelancerCard({ freelancer }) {
  const {
    name,
    skill,
    rating,
    reviews,
    pricePerTask,
    currency,
    initials,
    avatarColor,
    location,
    bio,
    tags,
    available,
    verified,
  } = freelancer;

  return (
    <div
      className="card"
      style={{
        padding: "24px",
        transition: "all 0.2s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Header: avatar + name */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: avatarColor + "20",
            border: `1.5px solid ${avatarColor}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: "0.9375rem",
            fontWeight: 700,
            color: avatarColor,
          }}
        >
          {initials}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <h3
              style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: "var(--text)",
                margin: 0,
              }}
            >
              {name}
            </h3>
            {verified && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--primary)">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="var(--primary)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <p style={{ fontSize: "0.8125rem", color: "var(--muted)", margin: 0 }}>
            {skill} · {location}
          </p>
        </div>
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: available ? "#10B981" : "#94A3B8",
            flexShrink: 0,
            marginTop: "6px",
          }}
          title={available ? "Available" : "Busy"}
        />
      </div>

      {/* Bio */}
      <p
        style={{
          fontSize: "0.8125rem",
          color: "var(--muted)",
          lineHeight: 1.55,
          margin: 0,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {bio}
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

      {/* Footer: rating + price */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "12px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <StarRating rating={rating} />
          <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
            ({reviews} reviews)
          </span>
        </div>
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontSize: "0.9375rem",
              fontWeight: 700,
              color: "var(--text)",
            }}
          >
            ৳{pricePerTask.toLocaleString()}
          </div>
          <div style={{ fontSize: "0.7rem", color: "var(--muted)" }}>per task</div>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="#"
        className="btn-primary"
        style={{
          width: "100%",
          justifyContent: "center",
          padding: "9px 16px",
        }}
      >
        View Profile
      </Link>
    </div>
  );
}
