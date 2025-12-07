import React from 'react';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {

    const skillCategories = [
        {
            title: "Seguridad Ofensiva",
            skills: ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "Inyección SQL", "XSS"]
        },
        {
            title: "Seguridad Defensiva",
            skills: ["SIEM (Splunk/Elastic)", "IDS/IPS", "Firewalls", "Respuesta a Incidentes", "Análisis de Malware"]
        },
        {
            title: "SysAdmin & Cloud",
            skills: ["Linux (RHEL/Debian)", "Windows Server", "Active Directory", "AWS", "Docker", "Scripting Bash/Python"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-white/[0.02] border-y border-white/5 relative">

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                        <span className="text-primary">02.</span>
                        Arsenal_Técnico
                    </h2>
                    <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-white/5 p-6 rounded hover:border-primary/50 transition-all group hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(0,255,65,0.1)]"
                        >
                            <h3 className="text-xl font-mono text-secondary mb-6 group-hover:text-primary transition-colors flex items-center gap-2">
                                <span className="opacity-50 text-sm">{'{'}</span>
                                {category.title}
                                <span className="opacity-50 text-sm">{'}'}</span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <div key={skill} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-white/5 px-3 py-1 rounded-sm border border-transparent hover:border-primary/30">
                                        <span className="text-primary text-xs">▹</span>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
