import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Experiencia', href: '#experience' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-bg/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="relative group">
                    {/* Logo Text with Gold Gradient */}
                    <span className="text-2xl font-bold text-gradient-gold font-mono tracking-tighter">
                        &lt;IB /&gt;
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
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
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 text-sm font-mono text-primary border border-primary/50 rounded hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                    >
                        Currículum
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};
