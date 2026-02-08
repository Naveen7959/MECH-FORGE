"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Compass, GitBranch, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Explorer", href: "/explorer", icon: Compass },
    { name: "Roadmap", href: "/roadmap", icon: GitBranch },
    // { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden border-r bg-muted/40 lg:block lg:w-64 h-full fixed left-0 top-0">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <span className="text-xl text-primary font-bold tracking-tighter">MECH-FORGE</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                    pathname === item.href
                                        ? "bg-muted text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <div className="bg-card p-4 rounded-lg border border-border shadow-sm">
                        <p className="text-xs text-muted-foreground">Logged in as</p>
                        <p className="font-medium text-sm">Alex (Student)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
