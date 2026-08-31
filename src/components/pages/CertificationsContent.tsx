"use client";

import Section from "@/components/Section";
import PageHeader from "@/components/motion/PageHeader";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import { Award, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
    { name: "Windows 10: Intune Device Management", date: "Feb 2022", issuer: "LinkedIn Learning / Microsoft" },
    { name: "ServiceNow Ticketing System", date: "Jan 2022", issuer: "ServiceNow" },
    { name: "CCNA Routing and Switching: Introduction to Networks", date: "May 2021", issuer: "Cisco" },
    { name: "CCNA Routing and Switching: Essentials", date: "Apr 2021", issuer: "Cisco" },
    { name: "Technical Support Fundamentals", date: "May 2021", issuer: "Google" },
    { name: "Networking Foundations: Networking Basics", date: "Jan 2021", issuer: "LinkedIn Learning" },
    { name: "Microsoft Office 365 (Administration)", date: "Jan 2021", issuer: "Microsoft" },
    { name: "Windows Server 2019: Active Directory", date: "Jan 2021", issuer: "Microsoft" },
    { name: "CompTIA A+ (1001 & 1002)", date: "Jul 2020", issuer: "CompTIA" },
];

export default function CertificationsContent() {
    return (
        <div className="bg-muted min-h-screen">
            <PageHeader
                label="Learning & Growth"
                title="Credentials."
                description="Technical validation and academic foundation fueling expert support."
            />

            <Section className="py-20 bg-muted border-t border-border">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid gap-16 lg:grid-cols-[1fr_1.8fr]">
                        <FadeIn direction="right">
                            <div className="space-y-10">
                                <h2 className="text-[0.8125rem] font-bold uppercase tracking-[0.4em] text-steel">
                                    Education
                                </h2>
                                <motion.div
                                    className="group relative p-10 rounded-3xl bg-surface border border-border flex flex-col gap-6 shadow-premium"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-steel via-teal to-steel" />

                                    <motion.div
                                        className="h-14 w-14 rounded-xl bg-steel/10 border border-steel/20 flex items-center justify-center text-navy mb-2 transition-colors duration-300 group-hover:bg-steel group-hover:text-white"
                                        whileHover={{ rotate: -6, scale: 1.05 }}
                                    >
                                        <GraduationCap className="h-7 w-7" />
                                    </motion.div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-navy leading-tight">Computer Engineering Technology</h3>
                                        <p className="text-lg text-text-secondary font-medium">Seneca College</p>
                                    </div>
                                    <div className="pt-6 mt-auto border-t border-border flex justify-between items-center text-[0.75rem] font-bold tracking-[0.15em] uppercase text-steel">
                                        <span className="opacity-60">Toronto, ON</span>
                                        <span className="text-navy">2019 – 2021</span>
                                    </div>
                                </motion.div>
                            </div>
                        </FadeIn>

                        <div className="space-y-10">
                            <FadeIn>
                                <h2 className="text-[0.8125rem] font-bold uppercase tracking-[0.4em] text-steel">
                                    Certifications & Training
                                </h2>
                            </FadeIn>
                            <StaggerContainer className="grid sm:grid-cols-2 gap-5" stagger={0.06}>
                                {certifications.map((cert, idx) => (
                                    <StaggerItem key={idx}>
                                        <motion.div
                                            className="group relative p-8 rounded-2xl bg-surface border border-border hover:border-teal/30 shadow-premium overflow-hidden h-full"
                                            whileHover={{ y: -4 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="absolute top-0 left-0 w-full h-[3px] bg-teal opacity-0 group-hover:opacity-100 transition-opacity" />

                                            <div className="flex flex-col h-full justify-between gap-8">
                                                <div className="flex items-start justify-between">
                                                    <motion.div
                                                        className="h-11 w-11 rounded-xl bg-teal/5 border border-teal/10 flex items-center justify-center text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white"
                                                        whileHover={{ scale: 1.08 }}
                                                    >
                                                        <Award className="h-6 w-6" />
                                                    </motion.div>
                                                    <span className="px-3 py-1.5 rounded-full bg-steel/5 text-[10px] font-bold uppercase tracking-[0.2em] text-steel border border-steel/10">
                                                        {cert.date}
                                                    </span>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-bold text-navy leading-snug mb-1.5 group-hover:text-steel transition-colors">
                                                        {cert.name}
                                                    </h3>
                                                    <p className="text-[0.875rem] text-text-secondary font-medium">{cert.issuer}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
