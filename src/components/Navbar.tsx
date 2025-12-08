import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Theme State
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        // Apply theme
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const links = [
        { name: 'Formación', href: '#education' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-bg/80 backdrop-blur-xl border-b border-primary/10 shadow-2xl' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="relative group z-50">
                    {/* Logo */}
                    <span className="text-2xl font-bold text-primary font-mono tracking-tighter">
                        &lt;IB /&gt;
                    </span>
                </a>

                <div className="hidden md:flex gap-8 items-center">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            className="text-sm font-mono text-text hover:text-primary transition-colors relative group py-2"
                        >
                            <span className="text-primary/60 mr-1 text-xs">{`0${i + 1}.`}</span>
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300"></span>
                        </a>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-bg-light/50 text-primary transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 text-sm font-mono text-primary border border-primary/50 rounded hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(230,57,70,0.3)]"
                    >
                        Currículum
                    </a>
                </div>

                {/* Mobile Toggle & Menu */}
                <div className="md:hidden flex items-center gap-4 z-50">
                    <button onClick={toggleTheme} className="text-primary">
                        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 z-40 bg-bg flex items-center justify-center md:hidden"
                        >
                            <div className="flex flex-col gap-8 text-center">
                                {links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-mono text-text hover:text-primary"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};
