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
        period: "Oct 2023 - Present",
        description: [
            "Providing expert on-site and remote support to Court Support Division, Judiciary, and judicial support staff for hardware, software, and mobile devices.",
            "Managing virtual meeting platforms (MS Teams, Zoom, Justice Video Network) and multimedia AV devices.",
            "Delivering Tier 1/Tier 2 support to VIPs including judges and Court Support Division staff across the province.",
            "maintaining Active Directory users, computers, mailboxes, distribution lists, and Group Policies.",
            "Coordinating widespread desktop equipment installation, imaging, and reallocations.",
            "Leading technical issue resolution through comprehensive analysis and vendor liaison."
        ]
    },
    {
        role: "System Support Professional",
        company: "Jolera Inc.",
        location: "Toronto",
        period: "Apr 2023 - Oct 2023",
        description: [
            "Processed and assigned service tickets, maintaining ownership throughout the incident lifecycle.",
            "Administered desktops, laptops, and peripherals for specific client locations.",
            "Escalated high-profile issues to Service Desk Management for specialized handling.",
            "Responded to onsite outage scenarios and provided technical guidance to end users.",
            "Documented all technical activities and maintained compliance with internal controls."
        ]
    },
    {
        role: "Service Desk Analyst",
        company: "Ministry of Public Business and Service Delivery (MPBSD)",
        location: "Toronto",
        period: "Mar 2022 - Apr 2023",
        description: [
            "Provided triage and first-level support for access, hardware, software, and telecom issues.",
            "Resolved 45+ tickets daily while interacting with executives and vendors.",
            "Assisted Mobile IT team in migrating devices from Blackberry Enterprise Server to Microsoft Intune.",
            "Contributed to root cause analysis of systemic problems to improve user experience.",
            "Maintained a 95% success record in software and security upgrades."
        ]
    },
    {
        role: "IT Support Technician",
        company: "Trillium Health Partners",
        location: "Mississauga, ON",
        period: "Jan 2021 - Sep 2021",
        description: [
            "Provided Windows, Mac, and mobile support using ServiceNow for ticket tracking.",
            "Supported implementation of security, backup, and antivirus policies.",
            "Achieved 85-90% resolution rate within deadlines for technical issues.",
            "Performed regular software and security updates to maintain system integrity."
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
                        A precise track record of delivering high-availability systems and support in regulated government and healthcare sectors.
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
