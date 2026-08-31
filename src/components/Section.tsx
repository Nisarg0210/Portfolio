"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface SectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function Section({ children, className, delay = 0 }: SectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay, ease: "easeOut" }}
            className={clsx("py-16 md:py-24 px-6 mx-auto max-w-5xl w-full", className)}
        >
            {children}
        </motion.section>
    );
}
