import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for now, can swap to Geist
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
                "min-h-screen bg-background font-sans antialiased text-foreground",
                inter.variable
            )}>
                {/* Main Layout Shell */}
                <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                    <Sidebar />
                    <div className="flex flex-col">
                        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 ml-0 md:ml-0">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}
