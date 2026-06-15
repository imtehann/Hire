import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/theme";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0F172A",
        color: "#CBD5E1",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 24px 40px",
        }}
      >
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "56px",
          }}
        >
          {/* Brand column */}
          <div>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <Image
                src="/logo.png"
                alt="Hire logo"
                width={32}
                height={32}
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "-0.02em",
                }}
              >
                Hire
              </span>
            </Link>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.6, maxWidth: "240px", color: "#94A3B8" }}>
              Bangladesh&apos;s AI-powered freelance marketplace. Connecting talent with opportunity.
            </p>
            <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
              <span
                style={{
                  background: "#1E40AF20",
                  border: "1px solid #2563EB40",
                  color: "#60A5FA",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: "100px",
                }}
              >
                bKash
              </span>
              <span
                style={{
                  background: "#1E40AF20",
                  border: "1px solid #2563EB40",
                  color: "#60A5FA",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: "100px",
                }}
              >
                Nagad
              </span>
              <span
                style={{
                  background: "#7C3AED20",
                  border: "1px solid #7C3AED40",
                  color: "#A78BFA",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: "100px",
                }}
              >
                AI Powered
              </span>
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h4 style={{ color: "white", fontWeight: 600, fontSize: "0.875rem", marginBottom: "16px" }}>
              Platform
            </h4>
            {[
              { label: "Find Freelancers", href: "/freelancers" },
              { label: "Browse Jobs", href: "/jobs" },
              { label: "AI Features", href: "/ai" },
              { label: "Post a Job", href: "/jobs" },
            ].map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                style={{
                  display: "block",
                  color: "#94A3B8",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  padding: "5px 0",
                  transition: "color 0.15s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Company links */}
          <div>
            <h4 style={{ color: "white", fontWeight: 600, fontSize: "0.875rem", marginBottom: "16px" }}>
              Company
            </h4>
            {[
              { label: "About Us", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Press Kit", href: "#" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  color: "#94A3B8",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  padding: "5px 0",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "white", fontWeight: 600, fontSize: "0.875rem", marginBottom: "16px" }}>
              Contact
            </h4>
            <p style={{ color: "#94A3B8", fontSize: "0.875rem", lineHeight: 1.7 }}>
              Dhaka, Bangladesh<br />
              {siteConfig.email}<br />
              {siteConfig.twitter}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #1E293B",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "#475569" }}>
            © {year} Hire Technologies Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                style={{ color: "#475569", textDecoration: "none", fontSize: "0.8125rem" }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
