"use client";

import Section from "@/components/Section";
import PageHeader from "@/components/motion/PageHeader";
import FadeIn from "@/components/motion/FadeIn";
import { Building2, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Regional Systems Officer (IT Support Analyst)",
        company: "Ministry of Solicitor General (SOLGEN)",
        location: "Central West Region",
        period: "Oct 2023 – Oct 2025",
        description: [
            "Serve as the sole regional IT representative supporting 300+ judiciary and court staff across multiple provincial locations, operating as the primary technical escalation point for VIP stakeholders including judges and senior court officials with 15–30 min response SLAs.",
            "Manage complete hardware lifecycle from procurement and zero-touch imaging to secure decommissioning — led a 500+ device infrastructure refresh with 100% data retention and zero operational downtime.",
            "Administer Google Workspace and Active Directory for user provisioning, group policy, mailbox management, and access control; handle onboarding and offboarding workflows end-to-end.",
            "Maintain 100% MDM-compliant device posture across Windows and macOS fleets using Microsoft Intune and Kandji, enforcing security policies aligned with government compliance standards.",
            "Own and manage vendor relationships with hardware suppliers and third-party service providers — handling procurement requests, invoicing, contract renewals, and after-sales escalations.",
            "Configure and maintain hybrid meeting room AV infrastructure (Crestron, Teams, Zoom, Justice Video Network) to support virtual proceedings and leadership events.",
            "Act as Tier 1/Tier 2 bridge between end users and Desktop Services Tier 3, performing first-pass triage and documentation before escalating only what requires senior intervention.",
            "Developed PowerShell automation scripts to streamline device imaging, software deployment, and recurring IT provisioning tasks, reducing manual effort by ~30%.",
            "Administered Microsoft Intune for Windows 10/11 and macOS endpoint enrollment, compliance, security policy enforcement, and application deployment; deployed software and updates through SCCM/MECM and PDQ while maintaining 100% MDM compliance.",
            "Maintained accurate IT asset inventory and CMDB records for laptops, mobile devices, peripherals, and software assignments, supporting equipment allocation, refresh planning, and secure decommissioning.",
            "Performed device imaging and deployment using WDS, SCCM/MECM task sequences, and zero-touch provisioning workflows.",
            "Administered Active Directory and Microsoft 365, including password resets, smart-card support, mailbox administration, and access control.",
            "Administered network printing and NTFS permissions, resolving access, print-queue, and peripheral incidents for 300+ users.",
        ]
    },
    {
        role: "System Support Professional",
        company: "Jolera Inc.",
        location: "Toronto",
        period: "Apr 2023 – Oct 2023",
        description: [
            "Provided multi-client IT support across enterprise environments, managing full ticket lifecycle in ServiceNow — triaging, assigning, and resolving hardware, software, and network issues.",
            "Served as on-site IT representative responsible for all desktops, laptops, and peripherals at assigned client locations; maintained asset records and managed equipment reallocations.",
            "Collaborated with Field Services Manager to respond to critical outages, applying sound escalation judgment and maintaining clear documentation of activities and resolutions.",
            "Delivered technical guidance to end users of all technical backgrounds, translating complex issues into plain-language explanations and actionable next steps.",
        ]
    },
    {
        role: "Service Desk Analyst",
        company: "Ministry of Public Business and Service Delivery (MPBSD)",
        location: "Toronto",
        period: "Mar 2022 – Apr 2023",
        description: [
            "Resolved 45+ tickets per day with consistent follow-up, achieving a 95% successful software and security update rate while maintaining SLA targets across a high-volume enterprise environment.",
            "Led migration of government mobile fleet from legacy BlackBerry Enterprise Server to Microsoft Intune — achieving 100% security compliance across iOS and Android devices.",
            "Supported executive and VIP stakeholders on PKI, O365, networking, hardware, and mobile issues; participated in root cause analysis to reduce recurring incidents.",
            "Contributed to the team's Knowledge Base using KCS methodology, improving self-service resolution rates and reducing repeat ticket volume.",
        ]
    },
    {
        role: "IT Support Technician",
        company: "Trillium Health Partners",
        location: "Mississauga, ON",
        period: "Jan 2021 – Sep 2021",
        description: [
            "Delivered Windows, macOS, and mobile device support in a healthcare environment; created and tracked incidents in ServiceNow with detailed documentation.",
            "Performed regular software and security updates, maintaining an 85–90% same-day resolution rate within strict compliance and patient safety requirements.",
            "Supported implementation of security, backup, and antivirus policies aligned with healthcare compliance standards.",
        ]
    }
];

export default function ExperienceContent() {
    return (
        <div className="bg-muted min-h-screen">
            <PageHeader
                label="Career Path"
                title="Experience."
                description="4+ years delivering high-availability systems and support in regulated government, enterprise, and healthcare sectors."
                className="md:px-12"
            />

            <Section className="py-20 bg-muted border-t border-border">
                <div className="relative max-w-6xl mx-auto px-6">
                    <motion.div
                        className="absolute left-10 md:left-1/2 top-0 bottom-0 w-[2px] hidden md:block origin-top"
                        style={{ background: "linear-gradient(to bottom, var(--color-teal), var(--color-steel), var(--color-border))" }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-border md:hidden" />

                    <div className="space-y-24">
                        {experiences.map((job, idx) => (
                            <FadeIn key={idx} delay={idx * 0.08} amount={0.1}>
                                <div className={`relative flex flex-col md:flex-row gap-10 md:gap-24 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                    <motion.div
                                        className="absolute left-10 md:left-1/2 -translate-x-1/2 top-0 z-10"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + idx * 0.1, type: "spring", stiffness: 260, damping: 18 }}
                                    >
                                        <div className="h-4 w-4 rounded-full bg-teal ring-[6px] ring-muted timeline-glow" />
                                    </motion.div>

                                    <div className="flex-1 pl-16 md:pl-0">
                                        <motion.div
                                            className={`space-y-8 ${idx % 2 === 0 ? "md:bg-surface/40 md:p-12 md:rounded-3xl md:border md:border-border md:shadow-premium" : "md:py-8"}`}
                                            whileHover={idx % 2 === 0 ? { y: -3 } : undefined}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="space-y-3">
                                                <div className="flex flex-wrap items-center gap-4 text-[0.8125rem] font-semibold uppercase tracking-widest text-steel">
                                                    <span className="flex items-center gap-2"><Calendar className="h-3 w-3" /> {job.period}</span>
                                                    <span className="flex items-center gap-2"><MapPin className="h-3 w-3" /> {job.location}</span>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-navy leading-tight">{job.role}</h3>
                                                <div className="flex items-center gap-3 text-lg font-medium text-text-secondary">
                                                    <Building2 className="h-5 w-5 text-teal" />
                                                    {job.company}
                                                </div>
                                            </div>

                                            <ul className="space-y-4">
                                                {job.description.map((point, i) => (
                                                    <motion.li
                                                        key={i}
                                                        className="group flex items-start gap-4 text-text-secondary leading-relaxed text-base md:text-[1.0625rem] font-normal"
                                                        initial={{ opacity: 0, x: -8 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.05 * i, duration: 0.35 }}
                                                    >
                                                        <span className="mt-3 h-1.5 w-1.5 rounded-full bg-teal/30 flex-shrink-0 group-hover:bg-teal group-hover:scale-150 transition-all duration-300" />
                                                        <span className="transition-colors group-hover:text-foreground/90">{point}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>

                                    <div className="flex-1 hidden md:block" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
