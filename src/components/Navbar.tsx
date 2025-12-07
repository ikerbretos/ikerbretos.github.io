import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: '01. Sobre Mí', href: '#about' },
        { name: '02. Experiencia', href: '#experience' }, // Changed meaningful name for About/Education
        { name: '03. Proyectos', href: '#projects' },
        { name: '04. Contacto', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'h-20 bg-bg/90 backdrop-blur-md shadow-lg' : 'h-24 bg-transparent'}`}>
            <div className="container h-full flex items-center justify-between px-6">
                <a href="#" className="text-primary font-mono font-bold text-xl hover:text-primary/80 transition-colors">
                    IB
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item, i) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm font-mono text-secondary hover:text-primary transition-colors"
                        >
                            <span className="text-primary mr-1">{item.name.split('.')[0]}.</span>
                            {item.name.split('.')[1]}
                        </motion.a>
                    ))}
                    <motion.a
                        href="/resume.pdf"
                        target="_blank"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-sm ml-4"
                    >
                        Currículum
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-bg-light flex items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-mono text-secondary hover:text-primary"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="/resume.pdf"
                                className="px-8 py-3 border border-primary text-primary rounded hover:bg-primary/10 font-mono"
                            >
                                Currículum
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
