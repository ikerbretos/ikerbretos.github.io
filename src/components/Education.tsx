import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
    const education = [
        {
            title: "Técnico Superior en Administración de Sistemas Informáticos en Red (ASIR)",
            institution: "Centro de Estudios Superiores",
            year: "2023 - Presente",
            description: "Especialización en administración de servidores Linux/Windows, seguridad de redes, y despligue de servicios."
        },
        {
            title: "Certificación en Ciberseguridad y Hacking Ético",
            institution: "Plataforma Online / Academia",
            year: "2024",
            description: "Formación intensiva en pentesting, análisis de vulnerabilidades y forense digital."
        }
    ];

    return (
        <section id="education" className="py-24 px-4 md:px-24 bg-bg-light/30">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <h2 className="text-3xl font-bold text-secondary flex items-baseline">
                        <span className="text-primary font-mono text-xl mr-2">02.</span>
                        Formación
                    </h2>
                    <div className="h-[1px] flex-grow bg-white/10 max-w-[300px]"></div>
                </motion.div>

                <div className="space-y-12 border-l-2 border-primary/20 ml-4 md:ml-12 pl-8 md:pl-12 relative">
                    {education.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative"
                        >
                            <span className="absolute -left-[42px] md:-left-[58px] top-1 w-5 h-5 rounded-full bg-bg border-2 border-primary flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            </span>

                            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
                                <span className="text-primary font-mono text-xs px-2 py-1 bg-primary/10 rounded ml-0 md:ml-4 w-fit flex items-center gap-1">
                                    <Calendar size={12} /> {item.year}
                                </span>
                            </div>

                            <h4 className="text-text-dim font-medium mb-4 flex items-center gap-2">
                                <GraduationCap size={16} />
                                {item.institution}
                            </h4>

                            <p className="text-text max-w-2xl leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
