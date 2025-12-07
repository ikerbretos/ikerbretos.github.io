import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-24 px-4 md:px-24">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 mb-12"
                >
                    <h2 className="text-3xl font-bold text-secondary flex items-baseline">
                        <span className="text-primary font-mono text-xl mr-2">01.</span>
                        Sobre Mí
                    </h2>
                    <div className="h-[1px] flex-grow bg-bg-light/50 max-w-[300px]"></div>
                </motion.div>

                <div className="grid md:grid-cols-[2fr_1fr] gap-12">
                    <div className="space-y-6 text-text text-lg leading-relaxed">
                        <p>
                            Hola! Mi nombre es Iker y disfruto creando cosas que viven en internet.
                            Mi interés por el desarrollo web comenzó en 2020 cuando decidí intentar editar
                            temas personalizados de Tumblr — ¡resultó que hackear HTML y CSS me enseñó mucho más
                            sobre diseño y limpieza de código de lo que esperaba!
                        </p>
                        <p>
                            Hoy en día, he tenido el privilegio de trabajar en una agencia de publicidad,
                            una start-up, y un estudio de diseño. Mi enfoque principal estos días es construir
                            productos inclusivos y experiencias digitales accesibles.
                        </p>
                        <p>
                            Aquí hay algunas tecnologías con las que he estado trabajando recientemente:
                        </p>
                        <ul className="grid grid-cols-2 gap-2 text-sm font-mono mt-4">
                            {['JavaScript (ES6+)', 'TypeScript', 'React', 'Vue', 'Node.js', 'WordPress'].map(tech => (
                                <li key={tech} className="flex items-center gap-2">
                                    <span className="text-primary">▹</span>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative group mx-auto md:mx-0 max-w-[300px]">
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded z-0 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
                        <div className="relative z-10 bg-primary/20 rounded overflow-hidden group-hover:bg-transparent transition-colors duration-300">
                            <div className="aspect-square bg-gray-800 flex items-center justify-center text-gray-600">
                                {/* Placeholder for user image if requested later */}
                                [FOTO_PERFIL]
                            </div>
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
