// Hire — centralized design tokens
// All color, spacing, and typography decisions live here.

export const colors = {
  primary: "#2563EB",
  primaryHover: "#1D4ED8",
  primaryLight: "#EFF6FF",
  secondary: "#7C3AED",
  secondaryLight: "#F5F3FF",
  background: "#F8F9FB",
  card: "#FFFFFF",
  border: "#E2E8F0",
  text: "#0F172A",
  muted: "#64748B",
  success: "#059669",
  warning: "#D97706",
};

export const gradients = {
  brand: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
  hero: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)",
};

export const nav = {
  links: [
    { label: "Freelancers", href: "/freelancers" },
    { label: "Jobs", href: "/jobs" },
    { label: "AI Features", href: "/ai" },
  ],
};

export const siteConfig = {
  name: "Hire",
  tagline: "Bangladesh's AI-powered freelance marketplace",
  description:
    "Connect with top freelancers across Bangladesh. Pay securely with bKash & Nagad. Powered by AI matching.",
  email: "hello@hirebangladesh.com",
  twitter: "@HireBD",
};
