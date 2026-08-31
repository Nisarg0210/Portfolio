"use client";

import Section from "@/components/Section";
import PageHeader from "@/components/motion/PageHeader";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const philosophy = [
    "Proactive Automation",
    "White-Glove Executive Support",
    "Root Cause Analysis",
    "Security-First Mindset",
    "Zero-Downtime Deployments",
    "Sole Regional IT Ownership",
    "Vendor & Procurement Management",
];

const paragraphs = [
    <>I am an <strong className="font-semibold text-navy">IT Support Analyst</strong> with <strong className="font-semibold text-navy">4+ years of experience</strong> providing Tier 1 and Tier 2 technical support across government, enterprise, and MSP environments. My work is defined by a commitment to stability — ensuring that the complex systems powering our institutions remain secure, updated, and efficient.</>,
    <>Currently, as a Regional Systems Officer for the Ministry of Solicitor General, I serve as the <strong className="font-semibold text-navy">sole regional IT representative</strong> supporting 300+ judiciary and court staff. I am the primary technical escalation point for VIP stakeholders including judges and senior court officials — operating under 15–30 minute response SLAs.</>,
    <>I have a proven track record managing <strong className="font-semibold text-navy">full hardware lifecycles for 500+ device fleets</strong>, supporting VIP stakeholders under strict SLAs, and executing large-scale MDM and infrastructure migrations with zero data loss. I bring hands-on expertise with <strong className="font-semibold text-navy">Microsoft 365, Intune, ServiceNow, PDQ, Active Directory</strong>, as well as <strong className="font-semibold text-navy">macOS, Kandji, and Google Workspace</strong>.</>,
    <>My approach goes beyond &quot;fixing tickets.&quot; I focus on <strong className="font-semibold text-navy">Systems Ownership</strong> — understanding the root cause of issues, automating routine maintenance, and proactively upgrading infrastructure before problems arise. I have developed PowerShell automation scripts that reduced manual IT provisioning effort by <strong className="font-semibold text-navy">~30%</strong>.</>,
];

export default function AboutContent() {
    return (
        <div className="bg-background min-h-screen">
            <PageHeader
                label="Expertise & Vision"
                title="About."
                description="Dedicated to operational excellence, infrastructure reliability, and delivering seamless user experiences in high-stakes environments."
            />

            <Section className="py-20 bg-background border-t border-border">
                <div className="grid gap-20 lg:grid-cols-[1.5fr_1fr] items-start max-w-6xl mx-auto px-6">
                    <StaggerContainer className="space-y-8">
                        {paragraphs.map((para, i) => (
                            <StaggerItem key={i}>
                                <p className="text-text-secondary font-normal text-base md:text-[1.0625rem] leading-[1.8]">
                                    {para}
                                </p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    <FadeIn delay={0.2} direction="left" className="lg:sticky lg:top-32">
                        <motion.div
                            className="relative rounded-3xl bg-surface p-10 border border-border shadow-premium overflow-hidden"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal via-steel to-teal bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]" />

                            <h3 className="text-[0.8125rem] font-bold text-steel mb-10 tracking-[0.2em] uppercase">
                                Operational Philosophy
                            </h3>
                            <ul className="space-y-6">
                                {philosophy.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-5 group"
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.15 + i * 0.06, duration: 0.45 }}
                                    >
                                        <motion.div
                                            className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-teal/5 border border-teal/10 text-teal group-hover:bg-teal group-hover:text-white transition-colors duration-300"
                                            whileHover={{ scale: 1.08, rotate: 4 }}
                                        >
                                            <Check className="h-5 w-5" />
                                        </motion.div>
                                        <span className="text-text-secondary font-medium text-base group-hover:text-navy transition-colors">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
}
