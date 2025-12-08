import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Lock, Server, Shield, Globe, Monitor, ChevronsRight, Database, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState('scripting');

    const skillCategories = {
        scripting: {
            title: "Scripting & Automatización",
            skills: [
                { name: "Python", level: 90, icon: <Terminal size={18} /> },
                { name: "Bash / Shell", level: 85, icon: <ChevronsRight size={18} /> },
                { name: "PowerShell", level: 80, icon: <Terminal size={18} /> },
                { name: "Git", level: 85, icon: <Database size={18} /> },
            ]
        },
        systems: {
            title: "Sistemas & Redes",
            skills: [
                { name: "Linux (Debian/RedHat)", level: 90, icon: <Server size={18} /> },
                { name: "Windows Server", level: 85, icon: <Monitor size={18} /> },
                { name: "Docker / Containers", level: 80, icon: <Cpu size={18} /> },
                { name: "Networking (TCP/IP)", level: 85, icon: <Globe size={18} /> },
            ]
        },
        security: {
            title: "Ciberseguridad",
            skills: [
                { name: "Análisis Forense", level: 80, icon: <Shield size={18} /> },
                { name: "Pentesting Ético", level: 75, icon: <Shield size={18} /> },
                { name: "Wireshark", level: 85, icon: <Globe size={18} /> },
                { name: "Seguridad Perimetral", level: 80, icon: <Lock size={18} /> },
            ]
        }
    };

    return (
        <section id="skills" className="py-24 px-4 md:px-24 bg-bg-light/50">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16"
                >
                    <h2 className="text-3xl font-bold text-secondary flex items-baseline">
                        <span className="text-primary font-mono text-xl mr-2">03.</span>
                        Habilidades Técnicas
                    </h2>
                    <div className="h-[1px] flex-grow bg-white/10 max-w-[300px]"></div>
                </motion.div>

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
            </div>
        </section>
    );
};
