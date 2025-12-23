import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Using Inter for professional look and JetBrains Mono for a clean mono font
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const monoJet = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nisarg Patel | IT Systems Support Specialist",
  description: "Senior IT Systems Support Specialist with expertise in Government and Enterprise environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${interSans.variable} ${monoJet.variable} antialiased min-h-screen flex flex-col bg-white text-slate-900`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
