import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-[calc(100vh-64px)] flex items-center justify-center relative px-4 overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] -z-10 pointer-events-none" />

            <div className="container max-w-6xl z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 text-primary font-mono text-xs md:text-sm bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="tracking-wider">SISTEMA ONLINE</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                            Especialista en <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary filter drop-shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                                Ciberseguridad
                            </span>
                        </h1>

                        <div className="space-y-4">
                            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-mono leading-relaxed border-l-2 border-primary/50 pl-4">
                                <span className="text-primary">&gt;</span> Ejecutando protocolos de seguridad avanzadas...<br />
                                <span className="text-primary">&gt;</span> Hacking Ético | Forense Digital | Hardening
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-5 pt-4">
                            <a href="#projects" className="group relative px-8 py-4 bg-primary/10 overflow-hidden rounded-sm font-mono font-bold text-primary border border-primary/50 hover:bg-primary/20 transition-all duration-300">
                                <div className="absolute inset-0 w-3 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                                <span className="relative flex items-center gap-3">
                                    VER_MÓDULOS
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                            <a href="#contact" className="px-8 py-4 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white font-mono rounded-sm transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                                <span>INICIAR_COMMS</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Visual Element / Terminal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full max-w-lg relative"
                    >
                        {/* Decorative elements around terminal */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-secondary/30 rounded-bl-xl"></div>

                        <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group ring-1 ring-white/5">
                            {/* Window Header */}
                            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="font-mono text-xs text-gray-500 flex items-center gap-2">
                                    <Terminal size={12} />
                                    root@secure-node: ~
                                </div>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-6 font-mono text-sm min-h-[320px] text-gray-300 space-y-4">
                                <div className="flex gap-3">
                                    <span className="text-primary font-bold">➜</span>
                                    <span className="text-blue-400 font-bold">~</span>
                                    <span className="typing-effect">neofetch</span>
                                </div>
                                <div className="grid grid-cols-[auto_1fr] gap-6 pt-2">
                                    <div className="text-primary font-bold text-xs sm:text-sm select-none opacity-80">
                                        <pre className="leading-[1.15]">
                                            {'       /\\       '}<br />
                                            {'      /  \\      '}<br />
                                            {'     / /\\ \\     '}<br />
                                            {'    / /  \\ \\    '}<br />
                                            {'   / /    \\ \\   '}<br />
                                            {'  / /      \\ \\  '}<br />
                                            {' / /        \\ \\ '}<br />
                                            {'/ /          \\ \\'}
                                        </pre>
                                    </div>
                                    <div className="space-y-1.5 text-xs sm:text-sm">
                                        <div className="flex gap-2"><span className="text-primary font-bold min-w-[60px]">Rol</span> <span>Analista de Seguridad</span></div>
                                        <div className="flex gap-2"><span className="text-primary font-bold min-w-[60px]">OS</span> <span>Kali Linux 2024.1</span></div>
                                        <div className="flex gap-2"><span className="text-primary font-bold min-w-[60px]">Shell</span> <span>Zsh + Powerlevel10k</span></div>
                                        <div className="flex gap-2"><span className="text-primary font-bold min-w-[60px]">Uptime</span> <span>99.99%</span></div>
                                        <div className="flex gap-2"><span className="text-primary font-bold min-w-[60px]">Status</span> <span className="text-green-400">Online & Secure</span></div>

                                        <div className="pt-4 flex gap-2">
                                            <div className="h-3 w-3 rounded-sm bg-black border border-gray-700"></div>
                                            <div className="h-3 w-3 rounded-sm bg-red-500"></div>
                                            <div className="h-3 w-3 rounded-sm bg-green-500"></div>
                                            <div className="h-3 w-3 rounded-sm bg-yellow-500"></div>
                                            <div className="h-3 w-3 rounded-sm bg-blue-500"></div>
                                            <div className="h-3 w-3 rounded-sm bg-purple-500"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 pt-2">
                                    <span className="text-primary font-bold">➜</span>
                                    <span className="text-blue-400 font-bold">~</span>
                                    <span className="w-2.5 h-5 bg-primary/50 animate-pulse"></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500/50"
            >
                <div className="flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.2em]">
                    <span>SCROLL_DOWN</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>
                </div>
            </motion.div>
        </section>
    );
};
