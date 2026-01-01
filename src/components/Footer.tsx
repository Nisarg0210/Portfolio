export default function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30 py-16">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
                <div className="flex flex-col gap-2">
                    <span className="text-xl font-bold text-navy">Nisarg Patel</span>
                    <p className="text-[0.9375rem] text-text-secondary">
                        IT Systems Support Specialist. Delivering infrastructure reliability.
                    </p>
                </div>

                <div className="flex gap-8 text-[0.875rem] font-semibold text-text-secondary">
                    <a
                        href="https://linkedin.com/in/nisargpatel0210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:nisargpatel02.np@gmail.com"
                        className="hover:text-teal transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
            <div className="mt-16 text-center text-[0.75rem] font-medium text-text-secondary opacity-40 uppercase tracking-[0.1em]">
                &copy; {new Date().getFullYear()} Nisarg Patel. All rights reserved.
            </div>
        </footer>
    );
}
