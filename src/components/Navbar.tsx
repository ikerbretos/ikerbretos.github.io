import React, { useState } from 'react';
import { Menu, X, Terminal, Shield, Cpu, Github, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Inicio', href: '#hero', icon: <Terminal size={16} /> },
        { name: 'Sobre Mí', href: '#about', icon: <Cpu size={16} /> },
        { name: 'Habilidades', href: '#skills', icon: <Shield size={16} /> },
        { name: 'Proyectos', href: '#projects', icon: <Github size={16} /> },
        { name: 'Contacto', href: '#contact', icon: <Mail size={16} /> },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 h-16 transition-all duration-300">
            <div className="container h-full flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 text-primary font-mono font-bold text-lg group">
                    <div className="relative">
                        <Shield className="w-6 h-6 group-hover:text-white transition-colors" />
                        <div className="absolute inset-0 bg-primary/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="tracking-tight">CIBER_SEG</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-2 text-sm font-mono text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors"
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-[var(--color-text)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[var(--color-bg)] border-b border-[var(--color-panel)] overflow-hidden"
                    >
                        <div className="container py-4 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-2 text-sm font-mono text-[var(--color-text)] hover:text-[var(--color-primary)] py-2"
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
