"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, GitBranch, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function DashboardPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
        >
            <motion.div variants={item} className="flex flex-col gap-2">
                <motion.h1
                    className="text-3xl font-bold tracking-tight"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome back, Alex{" "}
                    <motion.span
                        animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        style={{ display: "inline-block" }}
                    >
                        👋
                    </motion.span>
                </motion.h1>
                <motion.p
                    className="text-muted-foreground flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                    Your AI Career Architect is active. Market trends are being monitored.
                </motion.p>
            </motion.div>

            {/* Hero Stats / AI Insight */}
            <motion.div variants={item} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <Card className="bg-primary/10 border-primary/20 h-full">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-primary">Skill Match Score</CardTitle>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <ShieldCheck className="h-4 w-4 text-primary" />
                            </motion.div>
                        </CardHeader>
                        <CardContent>
                            <motion.div
                                className="text-2xl font-bold"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                            >
                                72%
                            </motion.div>
                            <p className="text-xs text-muted-foreground">+5% from last week</p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <Card className="h-full">
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
            </motion.div>

            {/* Main Action Cards */}
            <motion.div variants={item} className="grid gap-6 md:grid-cols-2">
                <Link href="/explorer" className="block">
                    <motion.div
                        whileHover={{ scale: 1.03, y: -8 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Card className="hover:border-primary/50 transition-colors cursor-pointer group relative overflow-hidden h-full">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"
                                initial={{ opacity: 0, x: -100 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Compass className="h-5 w-5 text-primary" />
                                    </motion.div>
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
                                <motion.div
                                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Explore Companies
                                    <motion.div
                                        className="ml-2"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                    </motion.div>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Link>

                <Link href="/roadmap" className="block">
                    <motion.div
                        whileHover={{ scale: 1.03, y: -8 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Card className="hover:border-blue-500/50 transition-colors cursor-pointer group relative overflow-hidden h-full">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent"
                                initial={{ opacity: 0, x: -100 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <GitBranch className="h-5 w-5 text-blue-500" />
                                    </motion.div>
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
                                <motion.div
                                    className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View Logic
                                    <motion.div
                                        className="ml-2"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                    </motion.div>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Link>
            </motion.div>
        </motion.div>
    );
}
