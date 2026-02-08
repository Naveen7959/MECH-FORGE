"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANIES } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ExplorerPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState<"All" | "Startup" | "MNC">("All");

    const filteredCompanies = COMPANIES.filter((company) => {
        const matchesSearch =
            company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.domain.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === "All" || company.type === filter;
        return matchesSearch && matchesFilter;
    });

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
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        exit: { opacity: 0, y: -20, scale: 0.9 }
    };

    return (
        <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h1 className="text-3xl font-bold tracking-tight">Company Explorer</h1>
                <p className="text-muted-foreground">
                    Discover hidden opportunities beyond the Top 5 MNCs.
                </p>
            </motion.div>

            <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search by company or domain (e.g., 'Aerospace')..."
                        className="pl-8 w-full md:w-[300px] lg:w-[400px]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    {["All", "Startup", "MNC"].map((type, index) => (
                        <motion.button
                            key={type}
                            onClick={() => setFilter(type as any)}
                            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 px-3 transition-colors ${filter === type
                                ? "bg-primary text-primary-foreground"
                                : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                                }`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {type}
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <AnimatePresence mode="popLayout">
                    {filteredCompanies.map((company, index) => (
                        <motion.div
                            key={company.id}
                            variants={item}
                            layout
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            whileHover={{ scale: 1.03, y: -8 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Card className="relative overflow-hidden group hover:border-primary/50 transition-colors h-full">
                                {/* Badges */}
                                <div className="absolute top-0 right-0 flex flex-col gap-1 items-end">
                                    {company.trending && (
                                        <motion.div
                                            className="bg-green-500/90 text-white px-2 py-1 text-xs font-bold rounded-bl-lg"
                                            initial={{ x: 100 }}
                                            animate={{ x: 0 }}
                                            transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
                                        >
                                            🚀 Trending
                                        </motion.div>
                                    )}
                                    {company.hidden_gem && (
                                        <motion.div
                                            className="bg-primary/90 text-primary-foreground px-2 py-1 text-xs font-bold rounded-bl-lg"
                                            initial={{ x: 100 }}
                                            animate={{ x: 0 }}
                                            transition={{ delay: 0.4 + index * 0.05, type: "spring" }}
                                        >
                                            <motion.span
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                💎 Hidden Gem
                                            </motion.span>
                                        </motion.div>
                                    )}
                                </div>
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <motion.div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${company.logo_color}`}
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {company.name[0]}
                                    </motion.div>
                                    <div className="grid gap-1">
                                        <CardTitle className="text-lg">{company.name}</CardTitle>
                                        <CardDescription>{company.type} • {company.domain}</CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        {company.description}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <motion.a
                                        href={company.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-9 px-3 bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        View Careers
                                        <motion.div
                                            className="ml-2"
                                            whileHover={{ x: 3, y: -3 }}
                                        >
                                            <ExternalLink className="h-3 w-3" />
                                        </motion.div>
                                    </motion.a>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
