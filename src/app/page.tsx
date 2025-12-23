"use client";

import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Server, Wifi } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-background px-6">
        {/* Controlled Radial Gradient Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-navy/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal/12 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-6xl w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 text-center lg:text-left">

            {/* Profile Picture with Enhanced Border and Shadow */}
            <div className="relative flex-shrink-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-navy via-teal/30 to-teal"
              />
              <div className="relative h-[140px] w-[140px] md:h-[180px] md:w-[180px] rounded-full p-[1px] bg-surface shadow-xl shadow-navy/10 overflow-hidden border border-border">
                <Image
                  src="/images/profile.jpg"
                  alt="Nisarg Patel profile photo"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 space-y-10">
              <div className="flex flex-col items-center lg:items-start gap-6">
                <span className="rounded-full border border-border bg-surface/80 px-4 py-1.5 text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-steel backdrop-blur-sm shadow-sm">
                  Senior IT Systems Support
                </span>
                <h1 className="text-4xl md:text-[3.25rem] font-bold tracking-tight text-foreground lg:leading-[1.2]">
                  Reliability <span className="bg-gradient-to-r from-navy to-steel bg-clip-text text-transparent">meets</span> <br className="hidden md:block" />
                  <span className="relative">
                    Excellence.
                    <span className="absolute bottom-1 left-0 w-full h-[3px] bg-teal/10 rounded-full" />
                  </span>
                </h1>
                <p className="max-w-2xl text-lg md:text-[1.125rem] font-normal leading-relaxed text-text-secondary text-balance">
                  Expert systems administration and infrastructure support for government and enterprise environments.
                </p>
              </div>

              <div className="flex flex-col gap-6 sm:flex-row justify-center lg:justify-start pt-2">
                <Link
                  href="/experience"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-navy px-10 py-5 text-base font-semibold text-white transition-all hover:bg-steel active:scale-[0.98] focus:ring-4 focus:ring-teal/20 outline-none overflow-hidden shadow-lg shadow-navy/20"
                >
                  View Bio & Experience
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Snapshot */}
      <section className="bg-muted py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h3 className="text-[0.8125rem] font-bold uppercase tracking-[0.4em] text-steel">Core Competencies</h3>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Security & Access",
                desc: "Active Directory, Azure AD, BitLocker, VPN Administration",
              },
              {
                icon: Server,
                title: "Systems Admin",
                desc: "Windows Server, SCCM, Intune, Office 365 Management",
              },
              {
                icon: Wifi,
                title: "Network & Hardware",
                desc: "TCP/IP, LAN/WAN, Cisco, Wireless Infrastructure",
              },
              {
                icon: CheckCircle,
                title: "Service Excellence",
                desc: "ServiceNow, SLA Management, VIP/Executive Support",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center text-center gap-6 p-8 bg-surface rounded-3xl border border-border transition-all duration-300 hover:shadow-premium"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal/5 text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-white">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-navy transition-colors">{item.title}</h4>
                  <p className="text-[1rem] leading-relaxed text-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
