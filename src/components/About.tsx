import React from 'react';
import { motion } from 'framer-motion';
import { Book, Award, User } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                        <span className="text-primary">01.</span>
                        Especificaciones_Sistema
                    </h2>
                    <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-xl text-secondary font-mono flex items-center gap-2">
                            <User size={20} />
                            /SOBRE_MÍ
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Entusiasta de la ciberseguridad con sólida experiencia en administración de sistemas y análisis forense digital.
                            Mi objetivo es asegurar infraestructuras digitales y analizar vulnerabilidades para prevenir ciberamenazas.
                            Estoy constantemente actualizando mi kernel con los últimos protocolos de seguridad e inteligencia de amenazas.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Apasionado por el código abierto, los CTFs y el hacking ético. Creo en la defensa proactiva y la monitorización rigurosa.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-xl text-secondary font-mono flex items-center gap-2 mb-6">
                                <Book size={20} />
                                /EDUCACIÓN
                            </h3>
                            <div className="border-l-2 border-white/10 pl-8 relative space-y-12">
                                <div className="relative group">
                                    <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-bg border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-all"></div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Grado en Ingeniería Informática</h4>
                                    <div className="text-primary font-mono text-sm mt-1">Universidad X | 2020 - 2024</div>
                                    <p className="text-gray-400 mt-2 text-sm">Especialización en Ingeniería de Sistemas y Seguridad de Redes.</p>
                                </div>
                                <div className="relative group">
                                    <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-bg border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-all"></div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">Máster en Ciberseguridad</h4>
                                    <div className="text-primary font-mono text-sm mt-1">Instituto Tecnológico | 2024 - Presente</div>
                                    <p className="text-gray-400 mt-2 text-sm">Enfoque en Amenazas Persistentes Avanzadas (APT) y Análisis de Malware.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl text-secondary font-mono flex items-center gap-2 mb-6">
                                <Award size={20} />
                                /CERTIFICACIONES
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {['CompTIA Security+', 'CEH v12', 'CISSP Associate', 'AWS Security'].map((cert) => (
                                    <span key={cert} className="px-4 py-2 bg-white/5 border border-white/10 text-sm rounded hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all cursor-default backdrop-blur-sm">
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
