"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/theme";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo.png"
            alt="Hire logo"
            width={36}
            height={36}
            style={{ objectFit: "contain" }}
            priority
          />
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            Hire
          </span>
        </Link>

        {/* Desktop nav links */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {nav.links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--primary)" : "var(--muted)",
                  textDecoration: "none",
                  background: isActive ? "var(--primary-light)" : "transparent",
                  transition: "all 0.15s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                {link.label === "AI Features" && (
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--secondary)",
                      flexShrink: 0,
                    }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Link
            href="/jobs"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--muted)",
              textDecoration: "none",
              padding: "6px 12px",
            }}
          >
            Post a Job
          </Link>
          <Link
            href="/freelancers"
            className="btn-primary"
            style={{ fontSize: "0.875rem" }}
          >
            Find Talent
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-only"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--text)",
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid var(--border)",
            padding: "16px 24px 24px",
          }}
        >
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "10px 0",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: pathname === link.href ? "var(--primary)" : "var(--text)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
            <Link href="/freelancers" className="btn-primary" onClick={() => setMobileOpen(false)}>
              Find Talent
            </Link>
            <Link href="/jobs" className="btn-secondary" onClick={() => setMobileOpen(false)}>
              Post a Job
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
