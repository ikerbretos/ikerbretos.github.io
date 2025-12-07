import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-24">
            <div className="container max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="font-mono text-primary mb-5 ml-1 text-lg">Hola, mi nombre es</p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-secondary mb-4 tracking-tight"
                >
                    Iker Bretos.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-text mb-8 tracking-tight"
                >
                    Construyo cosas para la web.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-text max-w-xl text-lg mb-12 leading-relaxed"
                >
                    Soy un ingeniero de software especializado en construir experiencias digitales excepcionales.
                    Actualmente, estoy enfocado en construir productos accesibles y centrados en el usuario.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a href="#projects" className="px-8 py-4 border border-primary text-primary rounded hover:bg-primary/10 transition-all font-mono">
                        Echa un vistazo a mis proyectos
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
