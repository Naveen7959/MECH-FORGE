"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, TrendingUp, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TrendAlertProps {
    onDismiss: () => void;
    onApply: () => void;
}

export function TrendAlert({ onDismiss, onApply }: TrendAlertProps) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                className="fixed bottom-6 right-6 z-50 w-full max-w-md"
            >
                <Card className="border-l-4 border-l-amber-500 shadow-2xl bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium flex items-center gap-2 text-amber-500">
                            <TrendingUp className="h-4 w-4" />
                            Market Trend Alert
                        </CardTitle>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onDismiss}>
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-4">
                            <div className="bg-amber-500/10 p-3 rounded-full h-fit">
                                <AlertTriangle className="h-6 w-6 text-amber-500" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg">Demand Shift Detected!</h3>
                                <p className="text-sm text-muted-foreground">
                                    Real-time analysis shows a <span className="text-foreground font-semibold">40% spike</span> in
                                    "Azure DevOps" roles vs "AWS" in the last 30 days.
                                </p>
                                <div className="flex gap-2 pt-2">
                                    <Button size="sm" onClick={onApply} className="bg-amber-500 hover:bg-amber-600 text-black">
                                        Update Roadmap
                                    </Button>
                                    <Button variant="outline" size="sm" onClick={onDismiss}>
                                        Ignore
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
}
