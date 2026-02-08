"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    COMPANIES,
    DEMO_RESUMES,
    COMPANY_REQUIREMENTS,
    SKILLS,
    DemoResume,
    Company
} from "@/lib/data";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, ArrowRight, FileText, Building2, Target, Upload, Loader2, Sparkles, Search } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ResumeMatchPage() {
    const [selectedResume, setSelectedResume] = useState<DemoResume | null>(null);
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
    const [companySearch, setCompanySearch] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const [uploadedResume, setUploadedResume] = useState<DemoResume | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Simulated Resume Parsing Logic
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        setSelectedResume(null); // Clear selection when uploading new

        // Simulate ATS Parsing delay
        setTimeout(() => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target?.result as string;

                // Extract skills by matching against our database
                const foundSkills = SKILLS.map(s => s.name).filter(skillName =>
                    text.toLowerCase().includes(skillName.toLowerCase())
                );

                const newResume: DemoResume = {
                    id: "uploaded-" + Date.now(),
                    name: "Uploaded Resume: " + file.name,
                    role: "Candidate Profile",
                    skills: foundSkills.length > 0 ? foundSkills : ["Scanning issue - no known skills found"],
                    experience: "Parsed from " + file.name,
                };

                setUploadedResume(newResume);
                setSelectedResume(newResume);
                setIsUploading(false);
            };
            reader.readAsText(file.slice(0, 10000)); // Read first 10kb of the file for demo purposes
        }, 1500);
    };

    const triggerUpload = () => {
        fileInputRef.current?.click();
    };

    // Calculate Match Logic
    const getMatchDetails = () => {
        const activeResume = selectedResume;
        if (!activeResume || !selectedCompany) return null;

        const requirement = COMPANY_REQUIREMENTS.find(req => req.companyId === selectedCompany.id);
        if (!requirement) return null;

        const matchedSkills = activeResume.skills.filter(skill =>
            requirement.requiredSkills.includes(skill) || requirement.preferredSkills.includes(skill)
        );

        const missingRequired = requirement.requiredSkills.filter(skill =>
            !activeResume.skills.includes(skill)
        );

        const missingPreferred = requirement.preferredSkills.filter(skill =>
            !activeResume.skills.includes(skill)
        );

        // Score Calculation (Weighted)
        const totalPoints = (requirement.requiredSkills.length * 2) + requirement.preferredSkills.length;
        const earnedPoints = (matchedSkills.filter(s => requirement.requiredSkills.includes(s)).length * 2) +
            matchedSkills.filter(s => requirement.preferredSkills.includes(s)).length;

        const score = Math.round((earnedPoints / totalPoints) * 100);

        return {
            score,
            matchedSkills,
            missingRequired,
            missingPreferred,
        };
    };

    const matchDetails = getMatchDetails();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex flex-col gap-8 pb-10">
            <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold tracking-tight">ATS Resume Match</h1>
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 gap-1 px-3 py-1">
                        <Sparkles className="h-3 w-3" /> New: Real Upload
                    </Badge>
                </div>
                <p className="text-muted-foreground">
                    Upload your own resume or select a demo to check your job readiness against top companies.
                </p>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-2">
                {/* Step 1: Select/Upload Resume */}
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        1. Resume Source
                    </h2>

                    {/* Upload Zone */}
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        className="hidden"
                        accept=".txt,.md,.pdf" // Note: Real PDF parsing requires extra libs, but we'll try as text for demo
                    />
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={triggerUpload}
                        className={cn(
                            "group cursor-pointer rounded-2xl border-2 border-dashed p-8 transition-all flex flex-col items-center justify-center gap-3 bg-primary/5",
                            isUploading ? "border-primary animate-pulse" : "hover:border-primary/50 hover:bg-primary/10 border-muted"
                        )}
                    >
                        {isUploading ? (
                            <>
                                <Loader2 className="h-8 w-8 text-primary animate-spin" />
                                <p className="text-sm font-medium">AI Architect is parsing your resume...</p>
                            </>
                        ) : (
                            <>
                                <div className="p-3 rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                                    <Upload className="h-6 w-6" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-bold">Upload Your Resume</p>
                                    <p className="text-[10px] text-muted-foreground mt-1">Supports .txt, .md (ATS Simulator)</p>
                                </div>
                            </>
                        )}
                    </motion.div>

                    <div className="relative py-2">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-muted"></span></div>
                        <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-background px-2 text-muted-foreground font-bold tracking-widest">OR SELECT DEMO</span></div>
                    </div>

                    <div className="grid gap-4">
                        {/* Display Uploaded Resume if exists */}
                        {uploadedResume && (
                            <motion.div
                                key={uploadedResume.id}
                                variants={item}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                onClick={() => setSelectedResume(uploadedResume)}
                                className={cn(
                                    "cursor-pointer rounded-xl border p-4 transition-all border-green-500/30",
                                    selectedResume?.id === uploadedResume.id
                                        ? "ring-2 ring-green-500 border-green-500 bg-green-500/5 shadow-md"
                                        : "bg-card"
                                )}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold">{uploadedResume.name}</h3>
                                            <Badge className="bg-green-500 text-white text-[8px] h-4">MY UPLOAD</Badge>
                                        </div>
                                        <p className="text-xs text-muted-foreground">{uploadedResume.role}</p>
                                    </div>
                                    {selectedResume?.id === uploadedResume.id && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                                </div>
                                <div className="mt-3 flex flex-wrap gap-1">
                                    {uploadedResume.skills.slice(0, 5).map(skill => (
                                        <span key={skill} className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-700 rounded-full border border-green-500/20">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {DEMO_RESUMES.map((resume) => (
                            <motion.div
                                key={resume.id}
                                variants={item}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                onClick={() => setSelectedResume(resume)}
                                className={cn(
                                    "cursor-pointer rounded-xl border p-4 transition-all opacity-80 hover:opacity-100",
                                    selectedResume?.id === resume.id
                                        ? "ring-2 ring-primary border-primary bg-primary/5 shadow-md opacity-100"
                                        : "bg-card hover:border-primary/50"
                                )}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-sm">{resume.name}</h3>
                                        <p className="text-[10px] text-muted-foreground">{resume.role}</p>
                                    </div>
                                    {selectedResume?.id === resume.id && <CheckCircle2 className="h-4 w-4 text-primary" />}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Step 2: Select Company */}
                <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        2. Target Company
                    </h2>

                    <div className="space-y-4">
                        {/* Search Input */}
                        {!selectedCompany ? (
                            <div className="space-y-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search for a company..."
                                        className="pl-9 bg-muted/20"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanySearch(e.target.value)}
                                        value={companySearch}
                                    />
                                </div>
                                <div className="grid gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                    {COMPANIES
                                        .filter(c => COMPANY_REQUIREMENTS.some(req => req.companyId === c.id))
                                        .filter(c => c.name.toLowerCase().includes(companySearch.toLowerCase()))
                                        .map((company) => (
                                            <motion.div
                                                key={company.id}
                                                variants={item}
                                                whileHover={{ x: 5, backgroundColor: "rgba(245, 158, 11, 0.05)" }}
                                                onClick={() => {
                                                    setSelectedCompany(company);
                                                    setCompanySearch("");
                                                }}
                                                className="cursor-pointer flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-primary/20 bg-card transition-all"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-[10px] text-white font-bold", company.logo_color)}>
                                                        {company.name[0]}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-xs">{company.name}</h3>
                                                        <p className="text-[9px] text-muted-foreground">{company.domain}</p>
                                                    </div>
                                                </div>
                                                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                            </motion.div>
                                        ))}
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative rounded-2xl border-2 border-primary bg-primary/5 p-6 shadow-lg shadow-primary/10"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-lg text-white font-bold shadow-md", selectedCompany.logo_color)}>
                                            {selectedCompany.name[0]}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl">{selectedCompany.name}</h3>
                                            <p className="text-sm text-muted-foreground">{selectedCompany.domain}</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setSelectedCompany(null)}
                                        className="h-8 text-[10px] uppercase tracking-wider font-bold"
                                    >
                                        Change Company
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>

            {/* Step 3: Result Analysis */}
            <AnimatePresence mode="wait">
                {selectedResume && selectedCompany && matchDetails ? (
                    <motion.div
                        key={`${selectedResume.id}-${selectedCompany.id}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="mt-4"
                    >
                        <Card className="border-t-4 border-t-primary shadow-xl overflow-hidden relative">
                            {/* Score Background Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                            <CardHeader className="pb-2">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <CardTitle className="text-2xl flex items-center gap-2">
                                            <Target className="h-6 w-6 text-primary" />
                                            Job Readiness Analysis
                                        </CardTitle>
                                        <CardDescription>
                                            Comparing <span className="text-foreground font-bold">{selectedResume.name}</span> with {selectedCompany.name}'s requirements
                                        </CardDescription>
                                    </div>
                                    <div className="text-center md:text-right">
                                        <div className="text-5xl font-black text-primary tracking-tighter">
                                            {matchDetails.score}%
                                        </div>
                                        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mt-1 text-center">Match Score</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="grid md:grid-cols-2 gap-8 pt-6">
                                {/* Matched Skills */}
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-sm flex items-center gap-2 text-green-500">
                                        <CheckCircle2 className="h-4 w-4" />
                                        Skills You Have
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {matchDetails.matchedSkills.map(skill => (
                                            <Badge key={skill} variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                                                {skill}
                                            </Badge>
                                        ))}
                                        {matchDetails.matchedSkills.length === 0 && (
                                            <p className="text-[10px] text-muted-foreground italic">No overlap found with requirements.</p>
                                        )}
                                    </div>
                                </div>

                                {/* Skills Gap */}
                                <div className="space-y-4">
                                    <h4 className="font-semibold text-sm flex items-center gap-2 text-red-500">
                                        <XCircle className="h-4 w-4" />
                                        Critical Skills Gap
                                    </h4>
                                    <div className="space-y-3">
                                        {matchDetails.missingRequired.length > 0 ? (
                                            <div className="flex flex-wrap gap-2">
                                                {matchDetails.missingRequired.map(skill => (
                                                    <Badge key={skill} variant="outline" className="border-red-500/20 text-red-500">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-xs text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full border border-green-100 inline-block">You meet all core requirements!</p>
                                        )}

                                        {matchDetails.missingPreferred.length > 0 && (
                                            <div className="pt-2 border-t border-dashed">
                                                <p className="text-[10px] text-muted-foreground mb-2 uppercase tracking-wide font-bold italic">Standout Opportunities:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {matchDetails.missingPreferred.map(skill => (
                                                        <Badge key={skill} variant="secondary" className="text-[9px] opacity-70">
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="bg-muted/30 border-t p-6">
                                <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <Sparkles className="h-4 w-4" />
                                        </div>
                                        <p className="text-xs text-muted-foreground max-w-sm">
                                            <span className="font-bold text-foreground">AI Architect Advice:</span> Focus on your missing required skills to instantly reach a <span className="text-primary font-bold">90%+ match score</span> for {selectedCompany.name}.
                                        </p>
                                    </div>
                                    <Button asChild className="group bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                                        <Link href="/roadmap">
                                            Sync to My Roadmap <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-48 border-2 border-dashed rounded-3xl flex items-center justify-center text-muted-foreground bg-muted/5 mt-4"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <Target className="h-8 w-8 opacity-20" />
                            <p className="text-sm font-medium">Select a resume and target company to generate analysis</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
