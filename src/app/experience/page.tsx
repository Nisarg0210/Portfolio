import Section from "@/components/Section";
import { Building2, MapPin, Calendar } from "lucide-react";

export const metadata = {
    title: "Experience | Nisarg Patel",
};

const experiences = [
    {
        role: "Regional Systems Officer",
        company: "Ministry of Solicitor General (SOLGEN)",
        location: "Central West Region",
        period: "Oct 2023 – Present",
        description: [
            "Serve as the sole regional IT representative supporting 300+ judiciary and court staff across multiple provincial locations, operating as the primary technical escalation point for VIP stakeholders including judges and senior court officials with 15–30 min response SLAs.",
            "Manage complete hardware lifecycle from procurement and zero-touch imaging to secure decommissioning — led a 500+ device infrastructure refresh with 100% data retention and zero operational downtime.",
            "Administer Google Workspace and Active Directory for user provisioning, group policy, mailbox management, and access control; handle onboarding and offboarding workflows end-to-end.",
            "Maintain 100% MDM-compliant device posture across Windows and macOS fleets using Microsoft Intune and Kandji, enforcing security policies aligned with government compliance standards.",
            "Own and manage vendor relationships with hardware suppliers and third-party service providers — handling procurement requests, invoicing, contract renewals, and after-sales escalations.",
            "Configure and maintain hybrid meeting room AV infrastructure (Crestron, Teams, Zoom, Justice Video Network) to support virtual proceedings and leadership events.",
            "Act as Tier 1/Tier 2 bridge between end users and Desktop Services Tier 3, performing first-pass triage and documentation before escalating only what requires senior intervention.",
            "Developed PowerShell automation scripts to streamline device imaging, software deployment, and recurring IT provisioning tasks, reducing manual effort by ~30%.",
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

export default function Experience() {
    return (
        <div className="bg-muted min-h-screen">
            <div className="pt-40 pb-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <span className="inline-block text-steel font-bold tracking-[0.3em] uppercase text-[0.8125rem] mb-6">Career Path</span>
                    <h1 className="text-4xl md:text-[3.25rem] font-bold tracking-tight mb-8">
                        <span className="bg-gradient-to-r from-navy to-steel bg-clip-text text-transparent">Experience.</span>
                    </h1>
                    <p className="text-lg md:text-xl font-normal text-text-secondary max-w-2xl leading-relaxed">
                        5+ years delivering high-availability systems and support in regulated government, enterprise, and healthcare sectors.
                    </p>
                </div>
            </div>

            <Section className="py-20 bg-muted border-t border-border">
                <div className="relative max-w-6xl mx-auto px-6">
                    {/* Centered Timeline Line for Desktop */}
                    <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-[1px] bg-border hidden md:block" />
                    <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-border md:hidden" />

                    <div className="space-y-24">
                        {experiences.map((job, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row gap-10 md:gap-24 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Node */}
                                <div className="absolute left-10 md:left-1/2 -translate-x-1/2 top-0 z-10">
                                    <div className="h-4 w-4 rounded-full bg-teal ring-[6px] ring-muted shadow-lg shadow-teal/10" />
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 pl-16 md:pl-0">
                                    <div className={`space-y-8 ${idx % 2 === 0 ? 'md:bg-surface/40 md:p-12 md:rounded-3xl md:border md:border-border md:shadow-premium' : 'md:py-8'}`}>
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
                                                <li key={i} className="group flex items-start gap-4 text-text-secondary leading-relaxed text-base md:text-[1.0625rem] font-normal">
                                                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-teal/30 flex-shrink-0 group-hover:bg-teal transition-all duration-300" />
                                                    <span className="transition-colors">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Placeholder for balance on desktop */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
