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
                "min-h-screen bg-background font-sans antialiased text-foreground",
                inter.variable
            )}>
                {/* Main Layout Shell */}
                <div className="flex min-h-screen">
                    <Sidebar />
                    <main className="flex-1 flex flex-col gap-4 p-6 lg:p-8 overflow-auto">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
