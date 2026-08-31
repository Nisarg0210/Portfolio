"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { ArrowRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

interface NavItem {
    name: string;
    path: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: NavItem[];
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
    exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" as const } },
};

const panelVariants = {
    hidden: { x: "100%" },
    visible: {
        x: 0,
        transition: { type: "spring" as const, damping: 32, stiffness: 320, mass: 0.8 },
    },
    exit: {
        x: "100%",
        transition: { duration: 0.28, ease: "easeInOut" as const },
    },
};

const listVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.05, delayChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring" as const, damping: 28, stiffness: 340 },
    },
};

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    // iOS-safe scroll lock
    useEffect(() => {
        if (!isOpen) return;

        const scrollY = window.scrollY;
        const { style } = document.body;
        const prev = {
            position: style.position,
            top: style.top,
            width: style.width,
            overflow: style.overflow,
        };

        style.position = "fixed";
        style.top = `-${scrollY}px`;
        style.width = "100%";
        style.overflow = "hidden";

        return () => {
            style.position = prev.position;
            style.top = prev.top;
            style.width = prev.width;
            style.overflow = prev.overflow;
            window.scrollTo(0, scrollY);
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
                    {/* Backdrop */}
                    <motion.button
                        type="button"
                        aria-label="Close menu"
                        className="absolute inset-0 bg-black/50 backdrop-blur-[6px] [-webkit-backdrop-filter:blur(6px)]"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />

                    {/* Slide-in panel */}
                    <motion.div
                        className="absolute inset-y-0 right-0 flex w-full max-w-[min(100%,340px)] flex-col glass-strong shadow-[-8px_0_40px_rgba(0,0,0,0.12)]"
                        style={{
                            paddingTop: "max(1rem, env(safe-area-inset-top))",
                            paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))",
                        }}
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal via-steel to-teal opacity-80" />

                        {/* Panel header */}
                        <div className="flex items-center justify-between px-5 pt-3 pb-2">
                            <div>
                                <p className="text-[0.625rem] font-bold uppercase tracking-[0.35em] text-steel">
                                    Navigation
                                </p>
                                <p className="text-sm font-semibold text-navy mt-0.5">Nisarg Patel</p>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close menu"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground transition-colors active:scale-95 hover:border-teal"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Nav links */}
                        <motion.nav
                            className="flex-1 overflow-y-auto overscroll-contain px-4 py-4"
                            variants={listVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <ul className="space-y-1.5">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.path;
                                    return (
                                        <motion.li key={item.path} variants={itemVariants}>
                                            <Link
                                                href={item.path}
                                                onClick={onClose}
                                                className={clsx(
                                                    "group flex min-h-[52px] items-center justify-between rounded-2xl px-4 py-3.5 transition-colors duration-200 active:scale-[0.98]",
                                                    isActive
                                                        ? "bg-teal/10 text-teal shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-teal)_25%,transparent)]"
                                                        : "text-text-secondary hover:bg-muted/80 hover:text-foreground"
                                                )}
                                            >
                                                <span className="flex items-center gap-3">
                                                    <span
                                                        className={clsx(
                                                            "h-1.5 w-1.5 rounded-full transition-all duration-300",
                                                            isActive
                                                                ? "bg-teal scale-125 shadow-[0_0_8px_var(--color-glow)]"
                                                                : "bg-border group-hover:bg-teal/50"
                                                        )}
                                                    />
                                                    <span className="text-[1.0625rem] font-semibold tracking-tight">
                                                        {item.name}
                                                    </span>
                                                </span>
                                                <ArrowRight
                                                    className={clsx(
                                                        "h-4 w-4 transition-all duration-300",
                                                        isActive
                                                            ? "opacity-100 translate-x-0 text-teal"
                                                            : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                                                    )}
                                                />
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.nav>

                        {/* Footer */}
                        <div
                            className="mx-4 mt-2 rounded-2xl border border-border bg-muted/40 px-5 py-4"
                            style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
                        >
                            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-teal">
                                IT Support Analyst
                            </p>
                            <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                                Government &amp; enterprise IT support
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
