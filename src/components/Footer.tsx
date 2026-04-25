"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "var(--color-muted)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Gradient top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-teal), var(--color-steel), var(--color-teal), transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <div className="flex items-center gap-1">
              <span
                className="font-mono text-2xl font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-navy) 0%, var(--color-teal) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                NP
              </span>
              <span
                className="font-mono text-2xl font-bold"
                style={{ color: "var(--color-teal)" }}
              >
                .
              </span>
            </div>
            <p
              className="text-[0.9rem] max-w-[240px] leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              IT Systems Support Specialist. Delivering infrastructure reliability.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              {[
                {
                  href: "https://linkedin.com/in/nisargpatel0210",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:nisargpatel02.np@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-[0.875rem] font-semibold transition-all duration-300"
                  style={{
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-secondary)",
                    background: "var(--color-surface)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-teal)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-teal)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 0 16px var(--color-glow)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "var(--color-border)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-secondary)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p
            className="font-mono text-[0.6875rem] uppercase tracking-[0.2em]"
            style={{ color: "var(--color-text-secondary)", opacity: 0.5 }}
          >
            © {new Date().getFullYear()} Nisarg Patel. All rights reserved.
          </p>
          <p
            className="font-mono text-[0.6875rem] uppercase tracking-[0.15em]"
            style={{ color: "var(--color-text-secondary)", opacity: 0.35 }}
          >
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
