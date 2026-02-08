"use client";

import { useState } from "react";
import { COMPANIES } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Company Explorer</h1>
                <p className="text-muted-foreground">
                    Discover hidden opportunities beyond the Top 5 MNCs.
                </p>
            </div>

            <div className="flex items-center gap-4">
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
                    {["All", "Startup", "MNC"].map((type) => (
                        <Button
                            key={type}
                            variant={filter === type ? "default" : "outline"}
                            onClick={() => setFilter(type as any)}
                            size="sm"
                        >
                            {type}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCompanies.map((company) => (
                    <Card key={company.id} className="relative overflow-hidden group hover:border-primary/50 transition-colors">
                        {company.hidden_gem && (
                            <div className="absolute top-0 right-0 bg-primary/20 text-primary-foreground px-2 py-1 text-xs font-bold rounded-bl-lg backdrop-blur-sm border-l border-b border-primary/20">
                                Hidden Gem 💎
                            </div>
                        )}
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${company.logo_color}`}>
                                {company.name[0]}
                            </div>
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
                            <Button variant="secondary" className="w-full" size="sm">
                                View Careers
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
