"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-navy"
          onClick={() => setIsOpen(false)}
        >
          NP.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={clsx(
                  "relative rounded-full px-4 py-1.5 text-[0.875rem] font-semibold transition-colors",
                  isActive ? "text-navy" : "text-text-secondary hover:text-teal"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 z-[-1] rounded-full bg-muted"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-text-secondary hover:text-navy transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 h-[calc(100vh-4rem)] z-40 md:hidden bg-surface flex flex-col p-6 border-b border-border shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      className={clsx(
                        "flex items-center h-16 px-6 rounded-2xl text-lg font-semibold transition-all active:scale-[0.98]",
                        isActive
                          ? "bg-navy text-white shadow-md shadow-navy/10"
                          : "text-text-secondary hover:bg-muted"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-auto pb-8 border-t border-border pt-8">
              <p className="text-sm text-center text-steel font-medium tracking-wide">
                Senior IT Systems Support Specialist
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
