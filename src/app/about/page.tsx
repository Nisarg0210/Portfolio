import Section from "@/components/Section";
import { Check } from "lucide-react";

export const metadata = {
    title: "About | Nisarg Patel",
};

export default function About() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="pt-40 pb-24 px-6 max-w-6xl mx-auto">
                <div className="max-w-3xl">
                    <span className="inline-block text-steel font-bold tracking-[0.3em] uppercase text-[0.8125rem] mb-6">Expertise & Vision</span>
                    <h1 className="text-4xl md:text-[3.25rem] font-bold tracking-tight mb-8">
                        <span className="bg-gradient-to-r from-navy via-steel to-navy bg-clip-text text-transparent">About.</span>
                    </h1>
                    <p className="text-xl md:text-[1.375rem] font-normal text-text-secondary leading-relaxed">
                        Dedicated to operational excellence, infrastructure reliability, and delivering seamless user experiences in high-stakes environments.
                    </p>
                </div>
            </div>

            <Section className="py-20 bg-background border-t border-border">
                <div className="grid gap-20 lg:grid-cols-[1.5fr_1fr] items-start max-w-6xl mx-auto px-6">
                    <div className="space-y-12">
                        <div className="text-text-secondary font-normal text-base md:text-[1.0625rem] leading-[1.8] space-y-8">
                            <p>
                                I am an IT Systems Support Specialist with over 3 years of experience in government and enterprise sectors. My work is defined by a commitment to stability—ensuring that the complex systems powering our institutions remain secure, updated, and efficient.
                            </p>
                            <p>
                                Currently, as a Regional Systems Officer for the Ministry of Solicitor General, I serve as a primary technical lead for the Court Support Division. This role demands not just technical acuity, but the ability to operate under pressure, supporting judiciary staff and VIPs across the province.
                            </p>
                            <p>
                                My approach goes beyond "fixing tickets." I focus on <strong className="font-semibold text-navy">Systems Ownership</strong>—understanding the root cause of issues, automating routine maintenance, and proactively upgrading infrastructure before problems arise.
                            </p>
                        </div>
                    </div>

                    <div className="lg:sticky lg:top-32">
                        <div className="relative rounded-3xl bg-surface p-10 border border-border shadow-premium overflow-hidden">
                            {/* Teal Accent Border */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-teal" />

                            <h3 className="text-[0.8125rem] font-bold text-steel mb-10 tracking-[0.2em] uppercase">Operational Philosophy</h3>
                            <ul className="space-y-6">
                                {[
                                    "Proactive Automation",
                                    "White-Glove Executive Support",
                                    "Root Cause Analysis",
                                    "Security-First Mindset",
                                    "Zero-Downtime Deployments"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-5 group">
                                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-teal/5 border border-teal/10 text-teal group-hover:bg-teal group-hover:text-white transition-all duration-300">
                                            <Check className="h-5 w-5" />
                                        </div>
                                        <span className="text-text-secondary font-medium text-base group-hover:text-navy transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
