
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
    const jobs = [
        {
            company: "Tech Solutions Inc.",
            role: "Ingeniero de Software Senior",
            dates: "2023 - Presente",
            tasks: [
                "Lideré el desarrollo de una plataforma SaaS escalable utilizando React y Node.js.",
                "Implementé CI/CD pipelines que redujeron el tiempo de despliegue en un 40%.",
                "Mentoricé a 3 desarrolladores junior y realicé revisiones de código semanales."
            ]
        },
        {
            company: "StartUp Alpha",
            role: "Desarrollador Full Stack",
            dates: "2021 - 2023",
            tasks: [
                "Colaboré en el diseño de la arquitectura de microservicios.",
                "Desarrollé APIs RESTful seguras y eficientes.",
                "Optimizé el rendimiento del frontend mejorando el Core Web Vitals."
            ]
        }
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="py-24 px-4 md:px-24">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 mb-12"
                >
                    <h2 className="text-3xl font-bold text-secondary flex items-baseline">
                        <span className="text-primary font-mono text-xl mr-2">02.</span>
                        Dónde he trabajado
                    </h2>
                    <div className="h-[1px] flex-grow bg-bg-light/50 max-w-[300px]"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Tabs */}
                    <div className="flex md:flex-col overflow-x-auto md:w-32 border-b md:border-b-0 md:border-l border-bg-light">
                        {jobs.map((job, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`px - 4 py - 3 text - sm font - mono text - left whitespace - nowrap transition - colors hover: bg - bg - light hover: text - primary 
                                    ${activeTab === idx ? 'text-primary border-b-2 md:border-b-0 md:border-l-2 border-primary bg-bg-light/5' : 'text-text border-l-transparent'} `}
                            >
                                {job.company}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-h-[300px]">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold text-secondary mb-1">
                                {jobs[activeTab].role} <span className="text-primary">@ {jobs[activeTab].company}</span>
                            </h3>
                            <p className="font-mono text-sm text-text-dim mb-6">{jobs[activeTab].dates}</p>
                            <ul className="space-y-4">
                                {jobs[activeTab].tasks.map((task, i) => (
                                    <li key={i} className="flex items-start gap-3 text-text">
                                        <span className="text-primary mt-1.5">▹</span>
                                        {task}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

