"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Section from "@/components/Section";
import {
    Server,
    Shield,
    Wifi,
    Settings,
    Monitor,
    Terminal,
    Cpu,
    Bot,
    ArrowRight,
    Database,
    Layers,
    Code2,
    Sparkles,
    Globe,
    Zap,
    Hammer,
    Network,
    Mail
} from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

// Types
type Category = "All" | "Systems" | "Networking" | "ITSM" | "Courtroom Tech" | "Security" | "Automation" | "AI";

interface SkillItem {
    category: Category;
    title: string;
    description: string;
    skills: string[];
    icon: any;
}

// Data
const skillCategories: SkillItem[] = [
    {
        category: "Systems",
        title: "Core Systems & Platforms",
        description: "Enterprise infrastructure management",
        icon: Server,
        skills: [
            "Windows 10/11 Administration",
            "Windows Server (AD, GPO)",
            "Microsoft 365 Administration",
            "Azure AD / Entra ID"
        ]
    },
    {
        category: "Systems",
        title: "Endpoint Management",
        description: "Mass deployment & configuration",
        icon: Monitor,
        skills: [
            "Microsoft Endpoint Manager (Intune)",
            "MECM / SCCM",
            "Imaging & Deployment",
            "Patch Management"
        ]
    },
    {
        category: "Networking",
        title: "Networking & Connectivity",
        description: "Infrastructure stability & troubleshooting",
        icon: Wifi,
        skills: [
            "TCP/IP, DNS, DHCP",
            "VPN & Remote Connectivity",
            "LAN/WAN Troubleshooting",
            "Network Printing"
        ]
    },
    {
        category: "ITSM",
        title: "ITSM & Operations",
        description: "Service delivery excellence",
        icon: Layers,
        skills: [
            "Incident & Problem Management",
            "Ticketing Workflows",
            "Root Cause Analysis",
            "Knowledge Base Management"
        ]
    },
    {
        category: "Courtroom Tech",
        title: "Courtroom Technology",
        description: "Specialized legal AV support",
        icon: Monitor,
        skills: [
            "A/V Systems Support",
            "Hybrid Courtroom Setup",
            "Video Conferencing (Teams/Zoom)",
            "Digital Recording Systems"
        ]
    },
    {
        category: "Systems",
        title: "Hardware & Vendor Support",
        description: "Physical infrastructure maintenance",
        icon: Cpu,
        skills: [
            "Hardware Diagnostics",
            "Printer Deployment",
            "Device Inventory",
            "Vendor Coordination"
        ]
    },
    {
        category: "Security",
        title: "Security & Compliance",
        description: "Enterprise security hygiene",
        icon: Shield,
        skills: [
            "Access Controls",
            "Endpoint Security",
            "Policy Compliance",
            "Standard Operating Procedures"
        ]
    },
    {
        category: "Automation",
        title: "Scripting & Automation",
        description: "Efficiency & repeatable workflows",
        icon: Terminal,
        skills: [
            "PowerShell",
            "Scripting Logic",
            "Workflow Automation",
            "Troubleshooting Scripts"
        ]
    }
];

const aiTools = [
    {
        title: "AI-Assisted Development",
        description: "Accelerating code quality & delivery",
        icon: Code2,
        items: [
            "ChatGPT / GPT-4+ for Code Gen",
            "AI-Assisted UI/UX Iteration",
            "Documentation Structuring"
        ]
    },
    {
        title: "AI in IT Operations",
        description: "Modernizing support workflows",
        icon: Settings,
        items: [
            "Root Cause Analysis Assistance",
            "Knowledge Base Optimization",
            "Ticket Triage Concepts"
        ]
    },
    {
        title: "Security & Monitoring",
        description: "Intelligent threat awareness",
        icon: Shield,
        items: [
            "Log Anomaly Detection Concepts",
            "Compliance Monitoring Concepts"
        ]
    },
    {
        title: "Enterprise Ecosystem",
        description: "Platform-specific AI tools",
        icon: Database,
        items: [
            "Microsoft Copilot (M365)",
            "OpenAI Ecosystem",
            "Azure AI Fundamentals"
        ]
    }
];

const aiWebDevData = [
    {
        title: "AI-Powered Web Platforms",
        description: "Modern deployment & infrastructure",
        icon: Globe,
        items: [
            "Vercel (AI-optimized deployment)",
            "Supabase (Backend, Auth, DB)",
            "Next.js (React Framework)",
            "Serverless & Edge Functions"
        ]
    },
    {
        title: "AI-Assisted IDES (Vibe-Coding)",
        description: "Next-gen development workflows",
        icon: Sparkles,
        items: [
            "Antigravity IDE (Full-stack AI)",
            "Cursor (AI-native editor)",
            "GitHub Copilot",
            "VS Code AI-enhanced"
        ]
    },
    {
        title: "APIs & Communication",
        description: "Seamless service integration",
        icon: Network,
        items: [
            "REST & JSON APIs",
            "Webhooks & Auth APIs",
            "Email/Notification APIs",
            "Environment Config (.env)"
        ]
    },
    {
        title: "AI-Enhanced Workflows",
        description: "Optimized design & performance",
        icon: Zap,
        items: [
            "AI-assisted UI Generation",
            "AI-guided Responsive Design",
            "AI-assisted Debugging",
            "Performance Improvements"
        ]
    }
];

const filters: Category[] = ["All", "Systems", "Networking", "ITSM", "Courtroom Tech", "Security", "Automation", "AI"];

export default function TechStack() {
    const [activeFilter, setActiveFilter] = useState<Category>("All");

    const filteredSkills = activeFilter === "All" || activeFilter === "AI"
        ? skillCategories
        : skillCategories.filter(item => item.category === activeFilter);

    // If AI is selected, we only show AI section really, but per requirements, 
    // the categories above don't include the specific AI tools list. 
    // We'll handle visual filtering:
    // - "All" shows both sections (Skills + AI Spotlight below)
    // - Specific filters show relevant skills
    // - "AI" scrolls to or highlights the AI section? 
    // Actually, per requirement "Include AI categories as cards with same styling" in the spotlight section.
    // Let's keep the filter strictly for the main grid, and if "AI" is selected, we scroll to that section or show only that?
    // Simpler approach: The top grid is for the "Core" skills. The bottom section is "AI Spotlight".
    // If user clicks "AI" filter, we can maybe show the AI Spotlight section prominently or scroll to it.
    // OR, we can treat the AI tools as just another part of the grid if the filter is "AI".

    // Let's stick to the structure:
    // 1. Grid of Core Skills (filterable).
    // 2. Distinct AI Spotlight Section (always visible or highlighted).
    // If user clicks "AI" filter, we might want to just show the AI cards in the grid?
    // Let's refine: The AI tools are listed separately in the content. 
    // I will make the AI filter scroll/focus on the AI section, OR just render the AI cards in the main grid if selected.

    // Requirement: "Include AI categories as cards with the same styling" in the spotlight section.
    // Requirement: "Toggle filters... AI".

    // Decision: When "AI" is selected in the filter, show the AI cards in the main grid area? 
    // Or just scroll to the AI section? 
    // "AI Tools & Intelligent Systems Spotlight Section" suggests it's a separate block.
    // I will implement the filter to affect the main grid. If "AI" is picked, I will show the AI cards in the grid.

    const displayItems = activeFilter === "AI"
        ? aiTools.map(t => ({ ...t, category: "AI" as Category, skills: t.items })) // Transform to match shape
        : filteredSkills;

    const showAiSection = activeFilter === "All";

    return (
        <>
            <Section className="!pb-0">
                <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-full border border-teal/20 bg-teal/5 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-teal"
                    >
                        Senior IT Systems Support
                    </motion.span>

                    <div className="space-y-4 max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-navy tracking-tight"
                        >
                            Tech Stack
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-text-secondary leading-relaxed"
                        >
                            Enterprise systems, endpoint management, courtroom technology, and <span className="text-teal font-medium">AI-assisted workflows</span>.
                        </motion.p>
                    </div>
                </div>

                {/* Filters */}
                <div className="sticky top-20 z-30 mb-12 -mx-6 px-6 py-4 bg-background/80 backdrop-blur-xl border-y border-border md:rounded-full md:border md:mx-auto md:max-w-4xl md:p-2">
                    <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar justify-start md:justify-center">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={clsx(
                                    "whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-300",
                                    activeFilter === filter
                                        ? "bg-navy text-white shadow-md shadow-navy/20"
                                        : "text-text-secondary hover:text-navy hover:bg-muted"
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="!pt-0">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {displayItems.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="group relative flex flex-col gap-5 p-6 md:p-8 bg-surface rounded-3xl border border-border shadow-sm hover:shadow-premium-hover hover:border-teal/20 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-steel/60">
                                        {item.category === "AI" ? "AI & Intelligent Systems" : item.category}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                                    {item.skills.map((skill: string, sIdx: number) => (
                                        <span
                                            key={sIdx}
                                            className="inline-flex items-center px-3 py-1 rounded-md bg-muted text-xs font-medium text-navy/80 border border-transparent group-hover:border-teal/10 group-hover:bg-teal/5 group-hover:text-teal transition-all"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Section>

            {/* AI Spotlight Section - Only Show if not filtered out */}
            <AnimatePresence>
                {showAiSection && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <section className="py-20 bg-gradient-to-b from-navy/5 to-transparent border-y border-border overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-32 bg-teal/5 rounded-full blur-3xl -z-10" />
                            <div className="absolute bottom-0 left-0 p-32 bg-navy/5 rounded-full blur-3xl -z-10" />

                            <div className="max-w-5xl mx-auto px-6">
                                <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
                                    <div className="md:w-1/3">
                                        <div className="inline-flex items-center gap-2 text-teal font-bold tracking-wide text-sm uppercase mb-4">
                                            <Bot className="h-4 w-4" />
                                            Intelligent Systems
                                        </div>
                                        <h2 className="text-3xl font-bold text-navy mb-6">
                                            AI Tools & <br />
                                            <span className="text-teal">Current Workflows</span>
                                        </h2>
                                        <p className="text-text-secondary leading-relaxed mb-6">
                                            I use AI responsibly to accelerate troubleshooting, documentation, automation, and modern web delivery. It's not just a buzzword; it's a practical enhancement to my systems engineering toolkit.
                                        </p>
                                    </div>

                                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {aiTools.map((tool, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-surface/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm hover:bg-surface hover:shadow-md transition-all"
                                            >
                                                <h4 className="font-bold text-navy flex items-center gap-2 mb-2">
                                                    <tool.icon className="h-4 w-4 text-teal" />
                                                    {tool.title}
                                                </h4>
                                                <ul className="space-y-1">
                                                    {tool.items.map((it, i) => (
                                                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                                                            <span className="block w-1 h-1 rounded-full bg-teal/40 mt-2" />
                                                            {it}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* AI-Powered Web Development & APIs Section */}
            <Section className="!pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 text-teal font-bold tracking-wide text-sm uppercase mb-4">
                        <Sparkles className="h-4 w-4" />
                        Modern Web Delivery
                    </div>
                    <h2 className="text-3xl font-bold text-navy mb-4">
                        AI-Powered Web Development & APIs
                    </h2>
                    <p className="text-lg text-text-secondary max-w-3xl">
                        Showcase of modern AI-assisted web development platforms, IDEs, and APIs used to build and operate this website efficiently.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {aiWebDevData.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group p-6 md:p-8 bg-surface rounded-3xl border border-border shadow-sm hover:shadow-premium-hover hover:border-teal/20 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy group-hover:bg-teal group-hover:text-white transition-all duration-300">
                                    <category.icon className="h-6 w-6" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                                {category.title}
                            </h3>
                            <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                                {category.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                {category.items.map((item, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (idx * 0.1) + (i * 0.05) }}
                                        className="inline-flex items-center px-3 py-1 rounded-md bg-muted text-xs font-medium text-navy/80 group-hover:bg-teal/5 group-hover:text-teal transition-all"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Footer CTA */}
            <section className="py-24 px-6 md:px-0 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl font-bold text-navy">
                        Ready to see these skills in action?
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy text-white font-semibold shadow-lg shadow-navy/20 hover:bg-steel hover:scale-105 transition-all active:scale-95"
                        >
                            See Projects
                        </Link>
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-border text-navy font-semibold hover:bg-muted hover:border-navy/20 transition-all active:scale-95"
                        >
                            Let's Connect
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
