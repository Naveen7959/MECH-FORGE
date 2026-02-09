"use client"

import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black selection:bg-primary/30">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 border border-white/10 p-4 w-full mx-auto max-w-4xl backdrop-blur-sm rounded-3xl"
            >
                <main className="relative border border-white/10 py-16 px-8 overflow-hidden rounded-2xl bg-black/40 shadow-2xl">
                    {/* Subtle reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-6 text-white text-center text-5xl font-extrabold tracking-tighter md:text-8xl lg:text-9xl uppercase"
                    >
                        Design is <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-pulse">Everything</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-white/60 px-6 text-center text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        Unleashing creativity through bold visuals, seamless interfaces, and limitless possibilities for the next generation of engineers.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="my-10 flex items-center justify-center gap-3"
                    >
                        <span className="relative flex h-4 w-4 items-center justify-center">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                        </span>
                        <p className="text-sm font-medium text-green-500 tracking-widest uppercase">Available for New Projects</p>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <Link href="/resume">
                            <LiquidButton className="text-white border border-white/20 rounded-full hover:border-primary/50 transition-all duration-300" size={'xl'}>
                                Get Started
                            </LiquidButton>
                        </Link>
                    </motion.div>
                </main>
            </motion.div>

            {/* Footer hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 text-white/20 text-xs tracking-[0.3em] uppercase"
            >
                Scroll to Explore
            </motion.div>
        </div>
    )
}
