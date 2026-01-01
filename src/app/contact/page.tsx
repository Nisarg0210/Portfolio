"use client";

import Section from "@/components/Section";
import { Mail, Linkedin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus("success");
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setFormStatus("idle"), 5000);
            } else {
                setFormStatus("error");
                setTimeout(() => setFormStatus("idle"), 5000);
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setFormStatus("error");
            setTimeout(() => setFormStatus("idle"), 5000);
        }
    };

    return (
        <div className="bg-background min-h-screen">
            <div className="pt-40 pb-24 px-6 max-w-6xl mx-auto">
                <div className="max-w-3xl">
                    <span className="inline-block text-steel font-bold tracking-[0.3em] uppercase text-[0.8125rem] mb-6">Inquiry & Collaboration</span>
                    <h1 className="text-4xl md:text-[3.25rem] font-bold tracking-tight mb-8">
                        <span className="bg-gradient-to-r from-navy via-steel to-navy bg-clip-text text-transparent">Let's Connect.</span>
                    </h1>
                    <p className="text-xl md:text-[1.375rem] font-normal text-text-secondary leading-relaxed">
                        Open to opportunities in resolving complex infrastructure challenges and exploring high-impact IT roles.
                    </p>
                </div>
            </div>

            <Section className="py-20 bg-background border-t border-border">
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">

                    <div className="space-y-10">
                        <h2 className="text-[0.8125rem] font-bold uppercase tracking-[0.4em] text-steel">Direct Contact</h2>
                        <div className="grid gap-6">
                            {[
                                {
                                    href: "mailto:nisargpatel02.np@gmail.com",
                                    icon: Mail,
                                    label: "Email",
                                    value: "nisargpatel02.np@gmail.com",
                                    accent: "teal"
                                },
                                {
                                    href: "https://www.linkedin.com/in/nisargpatel0210",
                                    icon: Linkedin,
                                    label: "LinkedIn",
                                    value: "linkedin.com/in/nisargpatel0210",
                                    accent: "steel"
                                }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="group relative flex items-center gap-6 p-6 md:p-8 rounded-3xl bg-surface border border-border hover:border-navy shadow-premium transition-all duration-300 overflow-hidden"
                                >
                                    {/* Subtle Interactive Accent */}
                                    <div className={`absolute left-0 top-0 h-full w-[3px] opacity-10 group-hover:opacity-100 transition-opacity bg-${item.accent}`} />

                                    <div className={`h-12 w-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 bg-${item.accent}/5 text-${item.accent} group-hover:bg-teal group-hover:text-white`}>
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-[0.75rem] font-bold uppercase tracking-widest text-steel mb-1">{item.label}</div>
                                        <div className="text-base md:text-[1.0625rem] font-bold text-navy group-hover:text-teal transition-colors truncate" title={item.value}>
                                            {item.value}
                                        </div>
                                    </div>
                                </a>
                            ))}

                            <div className="group relative flex items-center gap-6 p-6 md:p-8 rounded-3xl bg-surface border border-border hover:border-navy shadow-premium transition-all duration-300 overflow-hidden">
                                <div className="absolute left-0 top-0 h-full w-[3px] opacity-10 group-hover:opacity-100 transition-opacity bg-steel" />

                                <div className="h-12 w-12 shrink-0 rounded-xl bg-steel/5 text-steel flex items-center justify-center transition-all duration-300 group-hover:bg-steel group-hover:text-white">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="text-[0.75rem] font-bold uppercase tracking-widest text-steel mb-1">Phone</div>
                                    <div className="text-base md:text-[1.0625rem] font-bold text-navy transition-colors whitespace-nowrap">
                                        (437) 981-0210
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-surface rounded-3xl p-10 md:p-14 shadow-premium border border-border overflow-hidden">
                        {/* Teal Accent Top Border */}
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-teal" />

                        <div className="mb-10">
                            <h2 className="text-[0.8125rem] font-bold text-steel mb-3 tracking-[0.2em] uppercase">Secure Messaging</h2>
                            <p className="text-sm text-text-secondary font-normal">Fields marked with * are required for follow-up.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-[0.8125rem] font-bold uppercase tracking-widest text-text-secondary">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full rounded-xl border border-border px-5 py-3.5 text-base text-foreground placeholder-text-secondary/30 focus:border-teal focus:ring-4 focus:ring-teal/5 outline-none transition-all bg-muted/20"
                                        placeholder="John Carter"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-[0.8125rem] font-bold uppercase tracking-widest text-text-secondary">Work Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full rounded-xl border border-border px-5 py-3.5 text-base text-foreground placeholder-text-secondary/30 focus:border-teal focus:ring-4 focus:ring-teal/5 outline-none transition-all bg-muted/20"
                                        placeholder="john@organization.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-[0.8125rem] font-bold uppercase tracking-widest text-text-secondary">Message Details *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full rounded-xl border border-border px-5 py-3.5 text-base text-foreground placeholder-text-secondary/30 focus:border-teal focus:ring-4 focus:ring-teal/5 outline-none transition-all bg-muted/20 resize-none"
                                    placeholder="Briefly describe your inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus !== "idle"}
                                className={`w-full relative group/btn rounded-xl px-8 py-4 text-lg font-bold text-white transition-all active:scale-[0.98] outline-none overflow-hidden shadow-lg disabled:opacity-50 ${formStatus === "success" ? "bg-teal shadow-teal/10" :
                                    formStatus === "error" ? "bg-red-500 shadow-red-100" :
                                        "bg-navy hover:bg-steel shadow-navy/10"
                                    }`}
                            >
                                <span className="relative flex items-center justify-center gap-3">
                                    {formStatus === "idle" && (
                                        <>Submit Request <Send className="h-5 w-5" /></>
                                    )}
                                    {formStatus === "submitting" && "Processing..."}
                                    {formStatus === "success" && "Submission Successful"}
                                    {formStatus === "error" && "Error - Please try again"}
                                </span>
                            </button>
                        </form>
                    </div>

                </div>
            </Section>
        </div>
    );
}
