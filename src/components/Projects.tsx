import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

export const Projects: React.FC = () => {
    const projects = [
        {
            title: "Sistema de Detección de Intrusos",
            description: "Un NIDS basado en Python que analiza el tráfico de paquetes en tiempo real para detectar patrones anómalos y posibles exploits.",
            tags: ["Python", "Scapy", "Machine Learning"],
            github: "#",
            demo: "#"
        },
        {
            title: "App de Chat Seguro",
            description: "Plataforma de mensajería encriptada de extremo a extremo construida con React y Node.js implementando el protocolo Signal.",
            tags: ["React", "Node.js", "Criptografía"],
            github: "#",
            demo: "#"
        },
        {
            title: "Herramienta Forense Automatizada",
            description: "Herramienta CLI en Bash para la recolección rápida de evidencia y análisis de logs en servidores Linux comprometidos.",
            tags: ["Bash", "Linux", "Forense"],
            github: "#",
            demo: "#"
        },
        {
            title: "NeonMint Portfolio",
            description: "Este sitio web. Un portafolio personal minimalista basado en el diseño NeonMint.",
            tags: ["React", "Tailwind", "Vite"],
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 px-4 md:px-24">
            <div className="container max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 mb-12"
                >
                    <h2 className="text-3xl font-bold text-secondary flex items-baseline">
                        <span className="text-primary font-mono text-xl mr-2">03.</span>
                        Cosas que he construido
                    </h2>
                    <div className="h-[1px] flex-grow bg-bg-light/50 max-w-[300px]"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-bg-light p-8 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <Folder size={40} className="text-primary" />
                                <div className="flex gap-4">
                                    <a href={project.github} className="text-text hover:text-primary transition-colors"><Github size={20} /></a>
                                    <a href={project.demo} className="text-text hover:text-primary transition-colors"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-text mb-6 text-sm leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-text-dim mt-auto">
                                {project.tags.map(tag => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
