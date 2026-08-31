"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";
import { clsx } from "clsx";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: Direction;
    amount?: number;
    once?: boolean;
}

const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: 28 },
    down: { x: 0, y: -28 },
    left: { x: 28, y: 0 },
    right: { x: -28, y: 0 },
    none: { x: 0, y: 0 },
};

export default function FadeIn({
    children,
    className,
    delay = 0,
    duration = 0.55,
    direction = "up",
    amount = 0.2,
    once = true,
}: FadeInProps) {
    const offset = offsets[direction];

    const variants: Variants = {
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <motion.div
            className={clsx(className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
