import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, Terminal, Server, Shield, Globe, Monitor, ChevronsRight, Database, Cpu } from 'lucide-react';

export const Education: React.FC = () => {
    const [activeTab, setActiveTab] = useState('scripting');

    const education = [
        {
            title: "Administración de Sistemas Informáticos en Red (ASIR)",
            institution: "Instituto FOC",
            year: "09/2018 – 04/2021",
            description: "FP Grado Superior. Formación especializada en administración de sistemas y redes."
        },
        {
            title: "Curso Superior Informática Forense",
            institution: "INESEM",
            year: "09/2021 – 01/2022",
            description: "Especialización en análisis forense digital y seguridad."
        },
        {
            title: "Técnico en Sistemas Microinformáticos y Redes",
            institution: "IES San Alberto Magno",
            year: "09/2016 – 06/2018",
            description: "FP Grado Medio. Fundamentos de hardware, software y redes locales."
        }
    ];

    const skillCategories = {
        systems: {
            title: "Sistemas & Virtualización",
            skills: [
                { name: "Windows Server", level: 90, icon: <Monitor size={18} /> },
                { name: "Linux", level: 90, icon: <Server size={18} /> },
                { name: "VMware / Proxmox", level: 85, icon: <Server size={18} /> },
                { name: "Virtualbox / Docker", level: 80, icon: <Cpu size={18} /> },
                { name: "Active Directory", level: 85, icon: <Database size={18} /> },
                { name: "Microsoft 365", level: 80, icon: <Globe size={18} /> },
            ]
        },
        network_security: {
            title: "Redes & Seguridad",
            skills: [
                { name: "VPN / VLANs", level: 85, icon: <Globe size={18} /> },
                { name: "Routers / Switches", level: 80, icon: <ChevronsRight size={18} /> },
                { name: "Antivirus / Backup", level: 85, icon: <Shield size={18} /> },
                { name: "Veeam / Acronis", level: 85, icon: <Database size={18} /> },
                { name: "Synology", level: 80, icon: <Server size={18} /> },
            ]
        },
        scripting: {
            title: "Scripting & Otros",
            skills: [
                { name: "Python", level: 80, icon: <Terminal size={18} /> },
                { name: "Bash", level: 85, icon: <Terminal size={18} /> },
                { name: "Hardware Repair", level: 90, icon: <Cpu size={18} /> },
                { name: "Soporte Técnico", level: 95, icon: <Monitor size={18} /> },
            ]
        }
    };

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
                        <span className="text-primary font-mono text-xl mr-2">03.</span>
                        Formación y Habilidades
                    </h2>
                    <div className="h-[1px] flex-grow bg-white/10 max-w-[300px]"></div>
                </motion.div>

                <div className="space-y-12 border-l-2 border-primary/20 ml-4 md:ml-12 pl-8 md:pl-12 relative mb-24">
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

                {/* Skills Section Merged */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <h3 className="text-2xl font-bold text-secondary mb-8 flex items-center gap-2">
                        <Terminal className="text-primary" size={24} />
                        Conocimientos Técnicos
                    </h3>

                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Tabs */}
                        <div className="flex md:flex-col gap-2 overflow-x-auto md:w-64 border-b md:border-b-0 md:border-l border-white/10 pb-4 md:pb-0 scrollbar-hide">
                            {Object.entries(skillCategories).map(([key, category]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-6 py-3 text-left font-mono text-sm transition-all border-l-2 md:border-l-4 whitespace-nowrap ${activeTab === key
                                        ? 'text-primary border-primary bg-primary/5 hover:bg-primary/10'
                                        : 'text-text-dim border-transparent hover:text-secondary hover:bg-white/5'
                                        }`}
                                >
                                    {category.title}
                                </button>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-h-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                    {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="p-4 rounded bg-bg border border-white/5 hover:border-primary/50 transition-colors group flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-3 text-secondary">
                                                <span className="text-primary group-hover:scale-110 transition-transform">{skill.icon}</span>
                                                <span className="font-mono text-sm">{skill.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
