"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface PageHeaderProps {
    label: string;
    title: string;
    description: string;
    className?: string;
}

export default function PageHeader({ label, title, description, className }: PageHeaderProps) {
    return (
        <div className={`relative pt-40 pb-24 px-6 max-w-6xl mx-auto overflow-hidden ${className ?? ""}`}>
            {/* Subtle ambient motion */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    className="absolute -top-24 -right-16 h-64 w-64 rounded-full blur-[100px] opacity-30"
                    style={{ background: "radial-gradient(circle, var(--color-teal), transparent 70%)" }}
                    animate={{ x: [0, 20, 0], y: [0, -15, 0], scale: [1, 1.08, 1] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/2 -left-20 h-48 w-48 rounded-full blur-[90px] opacity-20"
                    style={{ background: "radial-gradient(circle, var(--color-steel), transparent 70%)" }}
                    animate={{ x: [0, -12, 0], y: [0, 18, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                <div className="absolute inset-0 dot-grid opacity-[0.03]" />
            </div>

            <div className="max-w-3xl">
                <FadeIn delay={0}>
                    <span className="inline-block text-steel font-bold tracking-[0.3em] uppercase text-[0.8125rem] mb-6">
                        {label}
                    </span>
                </FadeIn>

                <FadeIn delay={0.08}>
                    <h1 className="text-4xl md:text-[3.25rem] font-bold tracking-tight mb-8">
                        <span className="bg-gradient-to-r from-navy via-steel to-navy bg-clip-text text-transparent text-shimmer">
                            {title}
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.16}>
                    <p className="text-xl md:text-[1.375rem] font-normal text-text-secondary leading-relaxed">
                        {description}
                    </p>
                </FadeIn>

                <motion.div
                    className="mt-10 h-[2px] w-16 rounded-full origin-left"
                    style={{ background: "linear-gradient(90deg, var(--color-teal), var(--color-steel), transparent)" }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>
        </div>
    );
}
