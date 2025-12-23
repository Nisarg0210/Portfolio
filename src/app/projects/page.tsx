import Section from "@/components/Section";
import { Laptop, Smartphone, Shield, ArrowUpRight, CheckCircle2, Printer, Monitor, Activity } from "lucide-react";

export const metadata = {
    title: "Projects | Nisarg Patel",
};

export default function Projects() {
    const projects = [
        {
            icon: Laptop,
            title: "Windows 11 Enterprise Migration",
            desc: "Led and supported a large-scale Windows 11 migration across ministry users, ensuring secure deployment, minimal downtime, and zero data loss.",
            impact: { value: "500+", label: "Devices Deployed" },
            tech: ["Intune / MECM", "MECM", "OneDrive KFM"],
            accent: "teal"
        },
        {
            icon: Monitor,
            title: "Courtroom A/V Modernization",
            desc: "Supported the upgrade of audio-visual systems to enable virtual proceedings. Configured Justice Video Network infrastructure for reliable remote testimony.",
            impact: { value: "JVN", label: "Network Integration" },
            tech: ["JVN", "Crestron", "Teams"],
            accent: "steel"
        },
        {
            icon: Smartphone,
            title: "Enterprise MDM Migration",
            desc: "Transitioned mobile fleet from legacy Blackberry servers to Microsoft Intune, enabling secure remote work capabilities for government personnel.",
            impact: { value: "100%", label: "Security Compliance" },
            tech: ["Intune", "iOS Enterprise", "Android"],
            accent: "teal"
        },
        {
            icon: Printer,
            title: "Printer Fleet Modernization",
            desc: "Orchestrated the deployment and decommissioning of enterprise Ricoh printers across ministry sites, ensuring driver standardization and connectivity.",
            impact: { value: "Ricoh", label: "Fleet Refresh" },
            tech: ["Print Management", "GPO", "TCP/IP"],
            accent: "steel"
        }
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Page Header */}
            <div className="pt-40 pb-24 px-6 max-w-6xl mx-auto">
                <div className="max-w-3xl">
                    <span className="inline-block text-steel font-bold tracking-[0.3em] uppercase text-[0.8125rem] mb-6">Execution & Impact</span>
                    <h1 className="text-4xl md:text-[3.25rem] font-bold tracking-tight mb-8">
                        <span className="bg-gradient-to-r from-navy via-steel to-navy bg-clip-text text-transparent text-balance">Professional Initiatives.</span>
                    </h1>
                    <p className="text-lg md:text-[1.125rem] font-normal text-text-secondary leading-relaxed max-w-2xl">
                        Driving technical initiatives that ensure operational continuity for high-stakes government and enterprise environments.
                    </p>
                </div>
            </div>

            <Section className="py-20 bg-background border-t border-border">
                <div className="max-w-6xl mx-auto px-6 space-y-32">

                    {/* Featured Project */}
                    <div className="group relative rounded-[2rem] bg-white p-10 md:p-16 border border-border shadow-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-premium-hover overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-teal" />

                        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
                            <div className="space-y-10">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-teal/5 flex items-center justify-center text-teal">
                                        <Activity className="h-5 w-5" />
                                    </div>
                                    <h2 className="text-2xl md:text-[26px] font-bold text-navy tracking-tight">Ministry Hardware Transformation</h2>
                                </div>
                                <p className="text-base md:text-[17px] text-text-secondary font-normal leading-relaxed max-w-2xl">
                                    Orchestrated a critical infrastructure refresh for the Ministry, upgrading and relocating hardware for over 500 employees. This initiative was pivotal in maintaining security compliance and modernizing the workforce toolset with localized on-site support.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["Windows 11 Migration", "Radia Deployment", "Crisis Management", "User Training"].map((tag, i) => (
                                        <span key={i} className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg text-[13px] font-bold text-steel border border-border uppercase tracking-wider">
                                            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:pl-12 lg:border-l border-border h-full flex flex-col justify-center gap-10 py-4">
                                <div className="space-y-2">
                                    <div className="text-2xl md:text-[20px] font-bold text-navy">500+</div>
                                    <div className="text-[12px] font-bold text-steel uppercase tracking-[0.2em] opacity-60">Devices Deployed</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-2xl md:text-[20px] font-bold text-teal">100%</div>
                                    <div className="text-[12px] font-bold text-teal uppercase tracking-[0.2em] opacity-60">Data Retention Success</div>
                                </div>
                                <div className="pt-8 border-t border-border mt-auto">
                                    <div className="flex items-center gap-3 text-[13px] font-bold text-navy uppercase tracking-widest group-hover:text-teal transition-colors">
                                        Infrastructure Refresh <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group relative rounded-[2rem] bg-white p-10 md:p-12 border border-border shadow-premium transition-all duration-500 hover:-translate-y-1 hover:shadow-premium-hover overflow-hidden flex flex-col">
                                <div className={`absolute top-0 left-0 w-full h-[2px] bg-${project.accent}`} />

                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`h-10 w-10 rounded-xl bg-${project.accent}/5 flex items-center justify-center text-${project.accent}`}>
                                        <project.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-[22px] md:text-[24px] font-bold text-navy tracking-tight">{project.title}</h3>
                                </div>

                                <p className="text-base md:text-[17px] text-text-secondary font-normal leading-relaxed mb-10 min-h-[5rem]">
                                    {project.desc}
                                </p>

                                <div className="space-y-8 mt-auto">
                                    <div className="flex flex-wrap gap-2.5">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg text-[13px] font-bold text-steel border border-border uppercase tracking-wider">
                                                <span className={`h-1 w-1 rounded-full bg-${project.accent}`} />
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-8 border-t border-border flex items-center justify-between">
                                        <div className="space-y-1">
                                            <div className="text-[18px] font-bold text-navy">{project.impact.value}</div>
                                            <div className="text-[11px] font-bold text-steel uppercase tracking-widest opacity-60">{project.impact.label}</div>
                                        </div>
                                        <ArrowUpRight className="h-5 w-5 text-steel opacity-30 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </Section>
        </div>
    );
}
