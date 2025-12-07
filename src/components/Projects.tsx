import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

export const Projects: React.FC = () => {

    // Placeholder projects - meant to be replaced or fetched from GitHub API
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
            title: "Portfolio V1",
            description: "Este sitio web. Un portafolio personal basado en React con estética Cyberpunk.",
            tags: ["React", "Vite", "Tailwind"],
            github: "#",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                        <span className="text-primary">03.</span>
                        Módulos_Desplegados
                    </h2>
                    <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#0a0a0a] p-6 rounded border border-white/10 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,65,0.1)] transition-all group relative overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <Folder size={40} className="text-primary" />
                                <div className="flex gap-4">
                                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                                    <a href={project.demo} className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors relative z-10">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-3 relative z-10 h-[60px]">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-3 mt-auto font-mono text-xs text-gray-500 relative z-10">
                                {project.tags.map(tag => (
                                    <li key={tag} className="bg-white/5 px-2 py-1 rounded">{tag}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-mono hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all rounded-sm tracking-tighter">
                        VER_ARCHIVO_COMPLETO_EN_GITHUB
                    </a>
                </div>
            </div>
        </section>
    );
};
