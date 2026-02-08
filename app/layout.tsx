import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/shared/sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "MECH-FORGE | AI Career Architect",
    description: "Hackathon Project solving S4, M1, H1.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased text-foreground mechanical-bg",
                inter.variable
            )}>
                {/* Mechanical Background Decorations (Running Gears) */}
                <div className="gear-decoration gear-1">
                    <div className="gear-inner" />
                </div>
                <div className="gear-decoration gear-2">
                    <div className="gear-inner" />
                </div>
                <div className="gear-decoration gear-3">
                    <div className="gear-inner" />
                </div>
                <div className="gear-decoration gear-4">
                    <div className="gear-inner" />
                </div>
                <div className="gear-decoration gear-5">
                    <div className="gear-inner" />
                </div>

                {/* Floating Particles */}
                <div className="particles">
                    <div className="particle" />
                    <div className="particle" />
                    <div className="particle" />
                    <div className="particle" />
                    <div className="particle" />
                    <div className="particle" />
                    <div className="particle" />
                    <div className="particle" />
                    <div className="particle" />
                    <div className="particle" />
                </div>

                {/* Tech Scan Lines */}
                <div className="tech-lines">
                    <div className="tech-line" />
                    <div className="tech-line" />
                    <div className="tech-line" />
                    <div className="tech-line" />
                </div>

                {/* Corner Brackets */}
                <div className="corner-bracket top-left" />
                <div className="corner-bracket top-right" />
                <div className="corner-bracket bottom-left" />
                <div className="corner-bracket bottom-right" />

                {/* Main Layout Shell */}
                <div className="flex min-h-screen relative z-10">
                    <Sidebar />
                    <main className="flex-1 flex flex-col gap-4 p-6 lg:p-8 overflow-auto">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
