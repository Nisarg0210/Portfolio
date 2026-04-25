"use client";

import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Server, Wifi, Sparkles } from "lucide-react";

const competencies = [
  {
    icon: Shield,
    title: "Security & Access",
    desc: "Active Directory, Azure AD, BitLocker, VPN Administration",
    color: "#60A5FA",
  },
  {
    icon: Server,
    title: "Systems Admin",
    desc: "Windows Server, SCCM, Intune, Office 365 Management",
    color: "#2DD4BF",
  },
  {
    icon: Wifi,
    title: "Network & Hardware",
    desc: "TCP/IP, LAN/WAN, Cisco, Wireless Infrastructure",
    color: "#818CF8",
  },
  {
    icon: CheckCircle,
    title: "Service Excellence",
    desc: "ServiceNow, SLA Management, VIP/Executive Support",
    color: "#34D399",
  },
];

export default function Home() {
  return (
    <>
      {/* ─────────────────── HERO ─────────────────── */}
      <section
        className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-16 md:py-24"
        style={{ background: "var(--background)" }}
      >
        {/* Aurora blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="aurora-blob-1 absolute top-[-15%] left-[-10%] w-[55%] h-[55%] rounded-full blur-[100px] opacity-40"
            style={{
              background:
                "radial-gradient(ellipse, color-mix(in srgb, var(--color-navy) 60%, transparent), transparent)",
            }}
          />
          <div
            className="aurora-blob-2 absolute bottom-[-10%] right-[-8%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-30"
            style={{
              background:
                "radial-gradient(ellipse, color-mix(in srgb, var(--color-teal) 50%, transparent), transparent)",
            }}
          />
          <div
            className="aurora-blob-3 absolute top-[30%] left-[40%] w-[30%] h-[30%] rounded-full blur-[80px] opacity-20"
            style={{
              background:
                "radial-gradient(ellipse, color-mix(in srgb, var(--color-steel) 60%, transparent), transparent)",
            }}
          />
          {/* Dot grid overlay */}
          <div className="absolute inset-0 dot-grid opacity-[0.04]" />
        </div>

        <div className="relative z-10 max-w-6xl w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 text-center lg:text-left">

            {/* ── Profile Photo ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-shrink-0"
            >
              {/* Outer spinning gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-5px] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, var(--color-teal), var(--color-steel), var(--color-navy), var(--color-teal))",
                  borderRadius: "50%",
                }}
              />
              {/* Glow pulse */}
              <div
                className="absolute inset-[-8px] rounded-full opacity-40"
                style={{
                  boxShadow: "0 0 40px 10px var(--color-glow)",
                  animation: "pulse-ring 3s ease-in-out infinite",
                }}
              />
              {/* Photo */}
              <div
                className="relative h-[120px] w-[120px] md:h-[190px] md:w-[190px] rounded-full overflow-hidden"
                style={{
                  border: "3px solid var(--color-surface)",
                  boxShadow: "0 0 0 1px var(--color-border)",
                }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Nisarg Patel profile photo"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </motion.div>

            {/* ── Text Content ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 space-y-8"
            >
              {/* Badge */}
              <motion.div
                style={{ animation: "float-badge 4s ease-in-out infinite" }}
                className="inline-flex items-center gap-2"
              >
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.18em]"
                  style={{
                    border: "1px solid color-mix(in srgb, var(--color-teal) 30%, transparent)",
                    background: "color-mix(in srgb, var(--color-teal) 8%, transparent)",
                    color: "var(--color-teal)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Sparkles className="h-3 w-3" />
                  Senior IT Systems Support
                </span>
              </motion.div>

              {/* Heading */}
              <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight leading-[1.1]">
                <span style={{ color: "var(--color-foreground)" }}>Reliability</span>{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-navy) 0%, var(--color-teal) 50%, var(--color-steel) 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "shimmer 5s linear infinite",
                  }}
                >
                  meets
                </span>
                <br />
                <span style={{ color: "var(--color-foreground)" }}>Excellence</span>
                <span style={{ color: "var(--color-teal)" }}>.</span>
              </h1>

              {/* Sub */}
              <p
                className="max-w-xl text-[1.0625rem] md:text-[1.125rem] leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Expert systems administration and infrastructure support for government and enterprise environments.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  href="/experience"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl px-8 py-4 text-[0.9375rem] font-semibold text-white transition-all duration-300 active:scale-[0.98] focus:outline-none overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-navy) 0%, color-mix(in srgb, var(--color-teal) 60%, var(--color-navy)) 100%)",
                    boxShadow:
                      "0 0 0 1px color-mix(in srgb, var(--color-teal) 20%, transparent), 0 8px 24px -6px var(--color-glow)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 0 0 1px color-mix(in srgb, var(--color-teal) 40%, transparent), 0 12px 32px -4px var(--color-glow)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 0 0 1px color-mix(in srgb, var(--color-teal) 20%, transparent), 0 8px 24px -6px var(--color-glow)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Shimmer overlay */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
                      backgroundSize: "200% auto",
                      animation: "shimmer 1.5s linear infinite",
                    }}
                  />
                  View Bio &amp; Experience
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-8 py-4 text-[0.9375rem] font-semibold transition-all duration-300 active:scale-[0.98]"
                  style={{
                    border: "1px solid var(--color-border)",
                    color: "var(--color-foreground)",
                    background: "color-mix(in srgb, var(--color-surface) 80%, transparent)",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-teal)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-teal)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-foreground)";
                  }}
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--background), transparent)",
          }}
        />
      </section>

      {/* ─────────────── CORE COMPETENCIES ─────────────── */}
      <section
        className="py-28 md:py-36"
        style={{
          background: "var(--color-muted)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center space-y-3"
          >
            <p
              className="text-[0.75rem] font-bold uppercase tracking-[0.5em]"
              style={{ color: "var(--color-teal)" }}
            >
              What I Do
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "var(--color-foreground)" }}
            >
              Core Competencies
            </h2>
            <div
              className="mx-auto w-12 h-[2px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-teal), var(--color-steel))",
              }}
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {competencies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="card-futuristic group flex flex-col items-center text-center gap-5 p-8"
              >
                {/* Icon */}
                <div
                  className="relative flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-400"
                  style={{
                    background: `color-mix(in srgb, ${item.color} 10%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${item.color} 20%, transparent)`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = item.color;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px color-mix(in srgb, ${item.color} 40%, transparent)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = `color-mix(in srgb, ${item.color} 10%, transparent)`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <item.icon
                    className="h-7 w-7 transition-colors duration-300"
                    style={{ color: item.color }}
                  />
                </div>

                <div className="space-y-2">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[0.9rem] leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
