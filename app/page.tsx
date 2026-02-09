"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, GitBranch, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

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
        <div className="relative min-h-screen">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-8 relative z-10"
            >
                {/* Modern Hero Section */}
                <motion.div
                    variants={item}
                    className="relative border border-white/10 p-4 w-full rounded-3xl backdrop-blur-md bg-black/20"
                >
                    <div className="relative border border-white/10 py-12 px-6 overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="space-y-4 text-center md:text-left">
                                <motion.h1
                                    className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                >
                                    Design is <span className="text-primary">Everything</span>
                                </motion.h1>
                                <p className="text-white/60 text-sm md:text-base max-w-md">
                                    Unleashing creativity through bold visuals, seamless interfaces, and AI-driven career roadmaps.
                                </p>
                                <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-green-500 font-bold uppercase tracking-widest">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                    AI Architect Active
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <Link href="/resume">
                                    <LiquidButton className="text-white border border-white/20" size="xl">
                                        Resume Match
                                    </LiquidButton>
                                </Link>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest">Ready for analysis</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Dashboard Stats */}
                <motion.div variants={item} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Card className="bg-primary/10 border-primary/20 backdrop-blur-sm h-full shadow-lg shadow-primary/5">
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
                                    className="text-2xl font-bold text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                >
                                    72%
                                </motion.div>
                                <p className="text-xs text-white/50">+5% from last week</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Card className="h-full bg-black/40 border-white/10 backdrop-blur-sm shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-white">Target Role</CardTitle>
                                <GitBranch className="h-4 w-4 text-white/40" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-white">Mech R&D</div>
                                <p className="text-xs text-white/50">High Demand (Tier 1)</p>
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
                            <Card className="hover:border-primary/50 transition-colors cursor-pointer group relative overflow-hidden h-full bg-black/40 border-white/10 backdrop-blur-sm">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileHover={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-white">
                                        < Compass className="h-5 w-5 text-primary" />
                                        Company Explorer
                                    </CardTitle>
                                    <CardDescription className="text-white/60">
                                        Discover "Hidden Gem" startups in Aerospace & EV sectors.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-white/50 mb-4 leading-relaxed">
                                        Stop applying to the same 5 MNCs. We found 18 new mechanical-first startups matching your skill matrix.
                                    </p>
                                    <div className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground">
                                        Explore Companies
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
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
                            <Card className="hover:border-blue-500/50 transition-colors cursor-pointer group relative overflow-hidden h-full bg-black/40 border-white/10 backdrop-blur-sm">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent"
                                    initial={{ opacity: 0, x: -100 }}
                                    whileHover={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-white">
                                        <GitBranch className="h-5 w-5 text-blue-500" />
                                        Skill Roadmap
                                    </CardTitle>
                                    <CardDescription className="text-white/60">
                                        AI-Driven curriculum adapted to real-time market shifts.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-white/50 mb-4 leading-relaxed">
                                        Market alert: "Ansys/FEA" demand increased by 20% this quarter in Robotics.
                                    </p>
                                    <div className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 border border-white/10 bg-white/5 text-white hover:bg-white/10">
                                        View Roadmap
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}

