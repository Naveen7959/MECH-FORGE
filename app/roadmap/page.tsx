"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Lock, AlertTriangle, TrendingUp, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { SKILLS as INITIAL_SKILLS, UPDATED_SKILLS, Skill } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendAlert } from "@/components/features/trend-alert";

export default function RoadmapPage() {
    const [currentSkills, setCurrentSkills] = useState<Skill[]>(INITIAL_SKILLS);
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    const [showTrendAlert, setShowTrendAlert] = useState(false);

    // Group skills by category 
    const skillsByCategory = currentSkills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);

    // Simulate AI Market Event
    const handleSimulateMarketShift = () => {
        setShowTrendAlert(true);
    };

    const applyMarketUpdate = () => {
        setCurrentSkills(UPDATED_SKILLS);
        setShowTrendAlert(false);
        // Find the new skill to highlight it
        const newSkill = UPDATED_SKILLS.find(s => s.id === 's3_updated');
        if (newSkill) setSelectedSkill(newSkill);
    };

    return (
        <div className="flex flex-col gap-6 h-full relative">
            {/* H1: Market Shift Simulation Component */}
            {showTrendAlert && (
                <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 flex items-center justify-center p-4">
                    <div className="bg-card border border-amber-500 rounded-lg shadow-2xl max-w-md w-full p-6 space-y-4 animate-in zoom-in-95 duration-200">
                        <div className="flex items-center gap-2 text-amber-500 font-semibold uppercase tracking-wide text-sm">
                            <AlertTriangle className="w-5 h-5" />
                            Market Disruption Detected
                        </div>
                        <h2 className="text-2xl font-bold">Cloud Infrastructure Shift</h2>
                        <div className="bg-amber-500/10 p-4 rounded-md border border-amber-500/20 text-sm">
                            <p className="leading-relaxed">
                                <strong className="text-amber-500">AI Insight:</strong> Real-time job posting analysis across 500+ enterprises indicates a massive migration from AWS to Azure ecosystems in the manufacturing sector.
                            </p>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>Azure DevOps Demand</span>
                            <span className="text-green-500 font-bold flex items-center gap-1">
                                +42% <TrendingUp className="w-3 h-3" />
                            </span>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button onClick={applyMarketUpdate} className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                                Update My Learning Path
                            </Button>
                            <Button variant="outline" onClick={() => setShowTrendAlert(false)} className="w-full">
                                Dismiss
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold tracking-tight">Skill Matrix & Roadmap</h1>
                    <p className="text-muted-foreground">
                        Master the right skills in the right order. Priority-based learning path.
                    </p>
                </div>
                {/* Secret Button for Demo - H1 Trigger */}
                <Button variant="ghost" size="sm" onClick={handleSimulateMarketShift} className="text-muted-foreground hover:text-primary opacity-50 hover:opacity-100">
                    ⚡ Simulate Market Shift
                </Button>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 h-full">
                {/* Left Column: The Roadmap Tree */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                    {Object.entries(skillsByCategory).map(([category, skills]) => (
                        <div key={category} className="space-y-4">
                            <h2 className="text-xl font-semibold flex items-center gap-2">
                                <span className="w-2 h-8 bg-primary rounded-full" />
                                {category}
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {skills
                                    .sort((a, b) => a.tier - b.tier)
                                    .map((skill) => (
                                        <motion.div
                                            layoutId={skill.id} // Animated Reordering Magic
                                            key={skill.id}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setSelectedSkill(skill)}
                                            className={cn(
                                                "cursor-pointer group relative overflow-hidden rounded-xl border p-4 transition-all hover:shadow-md",
                                                selectedSkill?.id === skill.id
                                                    ? "ring-2 ring-primary border-primary bg-primary/5"
                                                    : "bg-card hover:border-primary/50",
                                                skill.tier === 3 ? "opacity-80 border-dashed" : "",
                                                skill.trend === "rising" ? "border-amber-500 bg-amber-500/5" : ""
                                            )}
                                        >
                                            {skill.trend === "rising" && (
                                                <div className="absolute top-0 right-0 bg-amber-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-bl">
                                                    HOT TREND 🔥
                                                </div>
                                            )}

                                            <div className="flex items-start justify-between mt-1">
                                                <div className="flex flex-col gap-1">
                                                    <span className={cn("text-xs font-medium uppercase tracking-wider", skill.trend === 'rising' ? 'text-amber-500' : 'text-muted-foreground')}>
                                                        Tier {skill.tier} Priority
                                                    </span>
                                                    <h3 className="font-bold text-lg">{skill.name}</h3>
                                                </div>
                                                {skill.completed ? (
                                                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                                                ) : skill.tier === 3 && skill.trend !== 'rising' ? (
                                                    <Lock className="h-5 w-5 text-muted-foreground/50" />
                                                ) : skill.trend === 'rising' ? (
                                                    <ArrowUpRight className="h-6 w-6 text-amber-500" />
                                                ) : (
                                                    <Circle className="h-6 w-6 text-muted-foreground/30" />
                                                )}
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="mt-4 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                                <div
                                                    className={cn("h-full transition-all duration-500",
                                                        skill.completed ? "bg-green-500 w-full" :
                                                            skill.trend === 'rising' ? "bg-amber-500 w-[10%]" :
                                                                "bg-primary w-0 group-hover:w-1/4"
                                                    )}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Skill Detail View */}
                < AnimatePresence mode="wait">
                    {selectedSkill ? (
                        <motion.div
                            key={selectedSkill.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="lg:col-span-1"
                        >
                            <Card className={cn("sticky top-6 border-l-4 shadow-lg", selectedSkill.trend === 'rising' ? "border-l-amber-500" : "border-l-primary")}>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <Badge variant={selectedSkill.category === "Technical" ? "default" : "secondary"}>
                                            {selectedSkill.category}
                                        </Badge>
                                        {selectedSkill.trend === 'rising' && <Badge className="bg-amber-500 text-black hover:bg-amber-600">Trending</Badge>}
                                    </div>
                                    <CardTitle className="mt-2 text-2xl">{selectedSkill.name}</CardTitle>
                                    <CardDescription>Tier {selectedSkill.tier} Priority</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <p className="text-sm text-foreground/80 leading-relaxed">
                                        {selectedSkill.description}
                                    </p>

                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Recommended Resources</h4>
                                        <ul className="space-y-2">
                                            {selectedSkill.resources.map((res, idx) => (
                                                <li key={idx}>
                                                    <a href={res.url} className={cn("text-sm hover:underline flex items-center gap-2", selectedSkill.trend === 'rising' ? "text-amber-500" : "text-primary")}>
                                                        <div className={cn("w-1.5 h-1.5 rounded-full", selectedSkill.trend === 'rising' ? "bg-amber-500" : "bg-primary")} />
                                                        {res.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Button className={cn("w-full", selectedSkill.trend === 'rising' ? "bg-amber-500 hover:bg-amber-600 text-black" : "")} variant={selectedSkill.completed ? "outline" : "default"}>
                                        {selectedSkill.completed ? "Mark as Incomplete" : "Start Learning"}
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ) : (
                        <div className="hidden lg:flex h-64 w-full items-center justify-center rounded-xl border border-dashed text-muted-foreground bg-muted/10">
                            <p>Select a skill to view details</p>
                        </div>
                    )}
                </ AnimatePresence>
            </div>
        </div>
    );
}
