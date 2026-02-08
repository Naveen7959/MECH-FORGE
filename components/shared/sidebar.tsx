"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Compass, GitBranch, FileText } from "lucide-react";

const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Explorer", href: "/explorer", icon: Compass },
    { name: "Roadmap", href: "/roadmap", icon: GitBranch },
    { name: "Resume Match", href: "/resume", icon: FileText },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden lg:flex flex-col border-r bg-muted/40 w-64 min-h-screen">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <motion.span
                        className="text-xl text-primary font-bold tracking-tighter"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        MECH-FORGE
                    </motion.span>
                </Link>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4 py-4">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                            <Link
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary relative overflow-hidden",
                                    pathname === item.href
                                        ? "bg-muted text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {pathname === item.href && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-primary/10 rounded-lg"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="relative z-10"
                                >
                                    <item.icon className="h-4 w-4" />
                                </motion.div>
                                <span className="relative z-10">{item.name}</span>
                            </Link>
                        </motion.div>
                    ))}
                </nav>
            </div>
            <motion.div
                className="mt-auto p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <div className="bg-card p-4 rounded-lg border border-border shadow-sm">
                    <p className="text-xs text-muted-foreground">Logged in as</p>
                    <p className="font-medium text-sm">Alex (Student)</p>
                </div>
            </motion.div>
        </aside>
    );
}
