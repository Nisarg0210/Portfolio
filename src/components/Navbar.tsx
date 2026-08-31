"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import MobileMenu from "@/components/MobileMenu";

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

  return (
    <>
      <nav
        className={clsx(
          "sticky top-0 z-[150] w-full transition-all duration-500",
          scrolled || isOpen
            ? "glass-strong shadow-[0_1px_0_0_var(--color-border),0_4px_20px_-4px_rgba(0,0,0,0.12)]"
            : "bg-transparent border-b border-transparent"
        )}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group relative z-[160] flex items-center gap-1.5"
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
          <div className="relative z-[160] flex items-center gap-2">
            {/* Dark/Light toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={clsx(
                "relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300",
                "border border-[var(--color-border)]",
                "hover:border-[var(--color-teal)] hover:shadow-[0_0_12px_var(--color-glow)]",
                "bg-[var(--color-surface)] active:scale-95"
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
              className={clsx(
                "md:hidden relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 active:scale-95",
                isOpen
                  ? "border-teal bg-teal/10 shadow-[0_0_16px_var(--color-glow)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-teal)]"
              )}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute"
                  >
                    <X className="h-5 w-5" style={{ color: "var(--color-teal)" }} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute"
                  >
                    <Menu className="h-5 w-5" style={{ color: "var(--color-foreground)" }} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
