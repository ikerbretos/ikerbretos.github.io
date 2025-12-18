import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
    const experience = [
        {
            title: "Administrador de Sistemas",
            company: "Xeryo Soluciones Informáticas",
            location: "Huesca, España",
            period: "01/2023 – Presente",
            description: [
                "Configuración y mantenimiento de copias de seguridad.",
                "Administración de VPN y redes (routers, switches, VLANs).",
                "Implementación y gestión de antivirus.",
                "Administración de Active Directory (usuarios, GPOs, permisos).",
                "Automatización de tareas con Bash y Python."
            ]
        },
        {
            title: "Administrador de Sistemas (Prácticas)",
            company: "Xeryo Soluciones Informáticas",
            location: "Huesca, España",
            period: "09/2022 – 12/2022",
            description: [
                "Configuración y mantenimiento de copias de seguridad.",
                "Administración de VPN y redes (routers, switches, VLANs).",
                "Implementación y gestión de antivirus.",
                "Resolución de incidencias."
            ]
        },
        {
            title: "Técnico Informático",
            company: "Indra Software Labs",
            location: "Huesca, España",
            period: "06/2018 – 09/2018",
            description: [
                "Diagnóstico y reparación de hardware (PCs, laptops, componentes).",
                "Mantenimiento y reparación de impresoras y periféricos.",
                "Instalación, configuración y actualización de sistemas operativos."
            ]
        },
        {
            title: "Técnico Informático (Prácticas)",
            company: "Zbitt Sabiñanigo",
            location: "Sabiñanigo, España",
            period: "04/2018 – 06/2018",
            description: [
                "Diagnóstico y reparación de hardware (PCs, laptops, componentes).",
                "Mantenimiento y reparación de impresoras y periféricos.",
                "Instalación, configuración y actualización de sistemas operativos.",
                "Detección y solución de fallos en redes y conectividad.",
                "Instalación de TPVs."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-4 md:px-24">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <h2 className="text-3xl font-bold text-secondary flex items-baseline">
                        <span className="text-primary font-mono text-xl mr-2">02.</span>
                        Experiencia Laboral
                    </h2>
                    <div className="h-[1px] flex-grow bg-white/10 max-w-[300px]"></div>
                </motion.div>

                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
                    {experience.map((job, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(230,57,70,0.5)]"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                                <h3 className="text-xl font-bold text-secondary">{job.title}</h3>
                                <div className="flex items-center gap-2 text-primary font-mono text-xs bg-primary/10 px-2 py-1 rounded w-fit whitespace-nowrap">
                                    <Calendar size={14} />
                                    {job.period}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-text-dim font-medium mb-4">
                                <Briefcase size={16} />
                                <span className="text-white/80">{job.company}</span>
                                <span className="text-white/30">•</span>
                                <span className="text-sm">{job.location}</span>
                            </div>

                            <ul className="space-y-2">
                                {job.description.map((desc, j) => (
                                    <li key={j} className="text-text/80 text-sm leading-relaxed flex items-start gap-2">
                                        <span className="text-primary mt-1.5">▹</span>
                                        {desc}
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
