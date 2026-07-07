import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume — Pham Duc Trung",
  description: "Resume of Pham Duc Trung, full-stack developer.",
};

export default function ResumePage() {
  return (
    <div style={{ position: "relative", height: "100dvh", background: "#1C1917" }}>
      <Link
        href="/"
        style={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 10,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(28,25,23,0.85)",
          backdropFilter: "blur(8px)",
          color: "#F5EDE3",
          textDecoration: "none",
          fontSize: 14,
          fontWeight: 600,
          padding: "10px 18px",
          borderRadius: 999,
          border: "1px solid rgba(245,237,227,0.15)",
        }}
      >
        ← Back
      </Link>
      <a
        href="/resume.pdf"
        download="Pham-Duc-Trung-Resume.pdf"
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 10,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "#F59E0B",
          color: "#17120E",
          textDecoration: "none",
          fontSize: 14,
          fontWeight: 700,
          padding: "10px 20px",
          borderRadius: 999,
          boxShadow: "0 12px 24px -12px rgba(0,0,0,0.5)",
        }}
      >
        Download ↓
      </a>
      <iframe
        src="/resume.pdf"
        title="Pham Duc Trung — Resume"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}
