"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { clsx } from "clsx";

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    stagger?: number;
    delayChildren?: number;
}

export default function StaggerContainer({
    children,
    className,
    stagger = 0.08,
    delayChildren = 0.1,
}: StaggerContainerProps) {
    return (
        <motion.div
            className={clsx(className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: stagger, delayChildren },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={clsx(className)}
            variants={{
                hidden: { opacity: 0, y: 22 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
