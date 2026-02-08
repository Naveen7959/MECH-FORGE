"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Lock, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { SKILLS, Skill } from "@/lib/data";
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

// Group skills by category for better visualization
const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
        acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
}, {} as Record<string, Skill[]>);

export default function RoadmapPage() {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

    return (
        <div className="flex flex-col gap-6 h-full">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Skill Matrix & Roadmap</h1>
                <p className="text-muted-foreground">
                    Master the right skills in the right order. Priority-based learning path.
                </p>
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
                                            key={skill.id}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setSelectedSkill(skill)}
                                            className={cn(
                                                "cursor-pointer group relative overflow-hidden rounded-xl border p-4 transition-all hover:shadow-md",
                                                selectedSkill?.id === skill.id
                                                    ? "ring-2 ring-primary border-primary bg-primary/5"
                                                    : "bg-card hover:border-primary/50",
                                                skill.tier === 3 ? "opacity-80 border-dashed" : ""
                                            )}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-sm font-medium text-muted-foreground">
                                                        Tier {skill.tier}
                                                    </span>
                                                    <h3 className="font-bold text-lg">{skill.name}</h3>
                                                </div>
                                                {skill.completed ? (
                                                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                                                ) : skill.tier === 3 ? (
                                                    <Lock className="h-5 w-5 text-muted-foreground/50" />
                                                ) : (
                                                    <Circle className="h-6 w-6 text-muted-foreground/30" />
                                                )}
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="mt-4 h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                                                <div
                                                    className={cn("h-full transition-all duration-500", skill.completed ? "bg-green-500 w-full" : "bg-primary w-0 group-hover:w-1/4")}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Skill Detail View */}
                <div className="lg:col-span-1">
                    {selectedSkill ? (
                        <Card className="sticky top-6 border-l-4 border-l-primary shadow-lg animate-in fade-in slide-in-from-right-10 duration-300">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <Badge variant={selectedSkill.category === "Technical" ? "default" : "secondary"}>
                                        {selectedSkill.category}
                                    </Badge>
                                    {selectedSkill.completed && <Badge variant="outline" className="text-green-500 border-green-500">Completed</Badge>}
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
                                                <a href={res.url} className="text-sm text-primary hover:underline flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    {res.title}
                                                </a>
                                            </li>
                                        ))}
                                        {selectedSkill.resources.length === 0 && (
                                            <li className="text-sm text-muted-foreground italic">No specific resources linked yet.</li>
                                        )}
                                    </ul>
                                </div>

                                <Button className="w-full" variant={selectedSkill.completed ? "outline" : "default"}>
                                    {selectedSkill.completed ? "Mark as Incomplete" : "Start Learning"}
                                </Button>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="hidden lg:flex h-64 w-full items-center justify-center rounded-xl border border-dashed text-muted-foreground bg-muted/10">
                            <p>Select a skill to view details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
