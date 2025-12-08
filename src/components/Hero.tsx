import React from 'react';
import { motion } from 'framer-motion';
import { ParticlesBackground } from './ParticlesBackground';

export const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">

            <ParticlesBackground />

            {/* Ambient Background Effect (Retained but subtle) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-primary font-mono text-lg mb-6 tracking-wide"
                    >
                        Hola, mi nombre es
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-secondary mb-4 tracking-tight"
                    >
                        Iker Bretos.
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-3xl md:text-5xl font-bold text-text-dim mb-8 leading-tight"
                    >
                        <span className="text-gradient-gold">Administrador de Sistemas</span> & <br className="hidden md:block" />
                        Especialista en Ciberseguridad.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-text text-lg max-w-xl mb-12 leading-relaxed"
                    >
                        Apasionado por la seguridad ofensiva, el análisis forense y la automatización de infraestructuras.
                        Domino Python, Bash y Scripting para proteger y optimizar entornos críticos.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                    >
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-bg bg-primary overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(230,57,70,0.3)] rounded-sm"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                            <span className="relative">Ver Proyectos</span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
