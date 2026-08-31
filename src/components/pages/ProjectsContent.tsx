"use client";

import Section from "@/components/Section";
import PageHeader from "@/components/motion/PageHeader";
import FadeIn from "@/components/motion/FadeIn";
import { Laptop, Smartphone, ArrowUpRight, Monitor, Activity, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        icon: Laptop,
        title: "Windows 11 Enterprise Migration",
        desc: "Led end-to-end Windows 11 migration using Intune/MECM for 500+ devices with zero data loss. Configured OneDrive Known Folder Move (KFM) for seamless user data transition across all managed endpoints.",
        impact: { value: "500+", label: "Devices Migrated" },
        tech: ["Intune / MECM", "OneDrive KFM", "Windows 11"],
        accent: "teal" as const,
    },
    {
        icon: Monitor,
        title: "Courtroom A/V Modernization",
        desc: "Upgraded courtroom AV systems to enable virtual proceedings. Configured Justice Video Network (JVN) with Crestron hardware and Microsoft Teams for hybrid court operations and remote testimony.",
        impact: { value: "JVN", label: "Network Integration" },
        tech: ["JVN", "Crestron", "Teams", "Zoom"],
        accent: "steel" as const,
    },
    {
        icon: Smartphone,
        title: "Enterprise MDM Migration – BlackBerry to Intune",
        desc: "Migrated full government mobile fleet from legacy BlackBerry Enterprise Server to Microsoft Intune. Achieved 100% MDM compliance across iOS and Android devices in production with zero data loss.",
        impact: { value: "100%", label: "MDM Compliance" },
        tech: ["Intune", "iOS", "Android", "BlackBerry ES"],
        accent: "teal" as const,
    },
    {
        icon: Terminal,
        title: "PowerShell IT Automation",
        desc: "Developed PowerShell automation scripts to streamline device imaging, software deployment, and recurring IT provisioning tasks — reducing manual operational effort by approximately 30%.",
        impact: { value: "~30%", label: "Effort Reduction" },
        tech: ["PowerShell", "Intune", "SCCM", "Automation"],
        accent: "steel" as const,
    },
];

const accentColors = {
    teal: { bar: "bg-teal", icon: "bg-teal/5 text-teal", dot: "bg-teal" },
    steel: { bar: "bg-steel", icon: "bg-steel/10 text-steel", dot: "bg-steel" },
};

export default function ProjectsContent() {
    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                label="Execution & Impact"
                title="Professional Initiatives."
                description="Driving technical initiatives that ensure operational continuity for high-stakes government and enterprise environments."
            />

            <Section className="py-20 bg-background border-t border-border">
                <div className="max-w-6xl mx-auto px-6 space-y-32">
                    <FadeIn>
                        <motion.div
                            className="group relative rounded-[2rem] bg-surface p-10 md:p-16 border border-border shadow-premium overflow-hidden"
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal via-steel to-teal bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]" />

                            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
                                <div className="space-y-10">
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            className="h-10 w-10 rounded-xl bg-teal/5 flex items-center justify-center text-teal"
                                            whileHover={{ rotate: 8, scale: 1.1 }}
                                        >
                                            <Activity className="h-5 w-5" />
                                        </motion.div>
                                        <h2 className="text-2xl md:text-[26px] font-bold text-navy tracking-tight">Ministry Hardware Transformation</h2>
                                    </div>
                                    <p className="text-base md:text-[17px] text-text-secondary font-normal leading-relaxed max-w-2xl">
                                        Orchestrated a critical infrastructure refresh for the Ministry, upgrading and relocating hardware for over 500 employees. Coordinated Radia deployment and end-user training to modernize workforce toolsets — achieving 100% data retention and zero operational downtime throughout the transition.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {["Windows 11 Migration", "Radia Deployment", "Crisis Management", "User Training"].map((tag, i) => (
                                            <motion.span
                                                key={i}
                                                className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg text-[13px] font-bold text-steel border border-border uppercase tracking-wider"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.06 }}
                                                whileHover={{ scale: 1.04, borderColor: "var(--color-teal)" }}
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:pl-12 lg:border-l border-border h-full flex flex-col justify-center gap-10 py-4">
                                    {[
                                        { value: "500+", label: "Devices Deployed", color: "text-navy" },
                                        { value: "100%", label: "Data Retention Success", color: "text-teal" },
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            className="space-y-2"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + i * 0.1 }}
                                        >
                                            <div className={`text-2xl md:text-[20px] font-bold ${stat.color}`}>{stat.value}</div>
                                            <div className={`text-[12px] font-bold uppercase tracking-[0.2em] opacity-60 ${stat.color}`}>{stat.label}</div>
                                        </motion.div>
                                    ))}
                                    <div className="pt-8 border-t border-border mt-auto">
                                        <div className="flex items-center gap-3 text-[13px] font-bold text-navy uppercase tracking-widest group-hover:text-teal transition-colors">
                                            Infrastructure Refresh <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-12">
                        {projects.map((project, idx) => {
                            const colors = accentColors[project.accent];
                            return (
                                <FadeIn key={idx} delay={idx * 0.08}>
                                    <motion.div
                                        className="group relative rounded-[2rem] bg-surface p-10 md:p-12 border border-border shadow-premium overflow-hidden flex flex-col h-full"
                                        whileHover={{ y: -6, boxShadow: "0 24px 48px -12px rgba(0,0,0,0.12)" }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className={`absolute top-0 left-0 w-full h-[2px] ${colors.bar}`} />

                                        <div className="flex items-center gap-4 mb-8">
                                            <motion.div
                                                className={`h-10 w-10 rounded-xl ${colors.icon} flex items-center justify-center`}
                                                whileHover={{ rotate: 6, scale: 1.08 }}
                                            >
                                                <project.icon className="h-5 w-5" />
                                            </motion.div>
                                            <h3 className="text-[22px] md:text-[24px] font-bold text-navy tracking-tight">{project.title}</h3>
                                        </div>

                                        <p className="text-base md:text-[17px] text-text-secondary font-normal leading-relaxed mb-10 min-h-[5rem]">
                                            {project.desc}
                                        </p>

                                        <div className="space-y-8 mt-auto">
                                            <div className="flex flex-wrap gap-2.5">
                                                {project.tech.map((t, i) => (
                                                    <span key={i} className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg text-[13px] font-bold text-steel border border-border uppercase tracking-wider">
                                                        <span className={`h-1 w-1 rounded-full ${colors.dot}`} />
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="pt-8 border-t border-border flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <div className="text-[18px] font-bold text-navy">{project.impact.value}</div>
                                                    <div className="text-[11px] font-bold text-steel uppercase tracking-widest opacity-60">{project.impact.label}</div>
                                                </div>
                                                <ArrowUpRight className="h-5 w-5 text-steel opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </Section>
        </div>
    );
}
