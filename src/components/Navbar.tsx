"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Scroll-aware navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "glass-strong shadow-[0_1px_0_0_var(--color-border),0_4px_20px_-4px_rgba(0,0,0,0.12)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-1.5"
        >
          <span
            className="font-mono text-xl font-bold tracking-tight"
            style={{
              background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-teal) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            NP
          </span>
          <span
            className="font-mono text-xl font-bold"
            style={{ color: "var(--color-teal)" }}
          >
            .
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={clsx(
                  "relative rounded-full px-4 py-1.5 text-[0.875rem] font-semibold transition-colors duration-200",
                  isActive
                    ? "text-[var(--color-teal)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-teal)]"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 z-[-1] rounded-full"
                    style={{
                      background:
                        "color-mix(in srgb, var(--color-teal) 10%, transparent)",
                      boxShadow: "0 0 12px var(--color-glow)",
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Dark/Light toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={clsx(
              "relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300",
              "border border-[var(--color-border)]",
              "hover:border-[var(--color-teal)] hover:shadow-[0_0_12px_var(--color-glow)]",
              "bg-[var(--color-surface)]"
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                  className="absolute"
                >
                  <Sun className="h-4 w-4" style={{ color: "var(--color-teal)" }} />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                  className="absolute"
                >
                  <Moon className="h-4 w-4" style={{ color: "var(--color-steel)" }} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-teal)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <X className="h-5 w-5" style={{ color: "var(--color-foreground)" }} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Menu className="h-5 w-5" style={{ color: "var(--color-foreground)" }} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 md:hidden flex flex-col p-6"
            style={{ background: "var(--color-surface)" }}
          >
            {/* Subtle dot grid background */}
            <div
              className="absolute inset-0 dot-grid opacity-30 pointer-events-none"
            />
            <div className="relative flex flex-col gap-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={item.path}
                      className={clsx(
                        "flex items-center h-14 px-6 rounded-2xl text-base font-semibold transition-all duration-200 active:scale-[0.98]",
                        isActive
                          ? "text-[var(--color-teal)] shadow-[inset_0_0_0_1px_var(--color-teal)]"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
                      )}
                      style={
                        isActive
                          ? { background: "color-mix(in srgb, var(--color-teal) 8%, transparent)" }
                          : {}
                      }
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div
              className="mt-auto pb-8 pt-8"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <p
                className="text-sm text-center font-mono tracking-widest uppercase"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Senior IT Systems Support
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
