import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
    const projects = [
        {
            title: "Mailtransfer-Tool",
            description: "Herramienta automatizada en Python para la transferencia rápida y segura de correos electrónicos entre servidores.",
            tech: ["Python", "Automation", "SMTP/IMAP", "Security"],
            github: "https://github.com/ikerbretos/Mailtransfer-Tool",
            external: "https://github.com/ikerbretos/Mailtransfer-Tool"
        },
        {
            title: "PakitoBomberBOT",
            description: "Bot multifuncional avanzado, diseñado para automatización de tareas y gestión de comunidades.",
            tech: ["Python", "Discord.py", "AsyncIO", "API Integration"],
            github: "https://github.com/ikerbretos/PakitoBomberBOT",
            external: "https://github.com/ikerbretos/PakitoBomberBOT"
        },
        {
            title: "nexus-osint",
            description: "Framework de inteligencia de fuentes abiertas (OSINT) para investigación y análisis de datos públicos.",
            tech: ["Python", "OSINT", "Data Analysis", "Reconnaissance"],
            github: "https://github.com/ikerbretos/nexus-osint",
            external: "https://github.com/ikerbretos/nexus-osint"
        }
    ];

    return (
        <section id="projects" className="py-24 px-4 md:px-24">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <h2 className="text-3xl font-bold text-secondary flex items-baseline">
                        <span className="text-primary font-mono text-xl mr-2">04.</span>
                        Proyectos Destacados
                    </h2>
                    <div className="h-[1px] flex-grow bg-white/10 max-w-[300px]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-bg-light/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group flex flex-col h-full hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-primary">
                                    <Folder size={40} strokeWidth={1.5} />
                                </div>
                                <div className="flex gap-4 text-text-dim">
                                    <a href={project.github} className="hover:text-primary transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.external} className="hover:text-primary transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-text-dim mb-6 flex-grow ">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-3 font-mono text-xs text-text/80">
                                {project.tech.map((t, idx) => (
                                    <li key={idx} className="bg-primary/5 px-2 py-1 rounded text-primary/80">
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
