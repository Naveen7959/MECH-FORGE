"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, GitBranch, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function DashboardPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
        >
            <motion.div variants={item} className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex 👋</h1>
                <p className="text-muted-foreground">
                    Your AI Career Architect is active. Market trends are being monitored.
                </p>
            </motion.div>

            {/* Hero Stats / AI Insight */}
            <motion.div variants={item} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-primary/10 border-primary/20">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-primary">Skill Match Score</CardTitle>
                        <ShieldCheck className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">72%</div>
                        <p className="text-xs text-muted-foreground">+5% from last week</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Target Role</CardTitle>
                        <GitBranch className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Embedded Systems</div>
                        <p className="text-xs text-muted-foreground">High Demand (Tier 1)</p>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Main Action Cards */}
            <motion.div variants={item} className="grid gap-6 md:grid-cols-2">
                <Link href="/explorer" className="block">
                    <Card className="hover:border-primary/50 transition-colors cursor-pointer group relative overflow-hidden h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Compass className="h-5 w-5 text-primary" />
                                Company Explorer
                            </CardTitle>
                            <CardDescription>
                                Discover "Hidden Gem" startups in Aerospace & EV sectors.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">
                                Stop applying to the same 5 MNCs. We found 12 new high-growth startups matching your profile.
                            </p>
                            <div className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
                                Explore Companies <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/roadmap" className="block">
                    <Card className="hover:border-primary/50 transition-colors cursor-pointer group relative overflow-hidden h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <GitBranch className="h-5 w-5 text-blue-500" />
                                Skill Roadmap
                            </CardTitle>
                            <CardDescription>
                                AI-Driven curriculum adapted to real-time market shifts.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">
                                Your "AWS" certification path is at risk. 40% of employers are shifting to Azure.
                            </p>
                            <div className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                                View Logic <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </motion.div>
        </motion.div>
    );
}
