import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-24 px-4 md:px-24">
            <div className="container max-w-6xl mx-auto">
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
                            Administrador de Sistemas con más de 3 años de experiencia en la gestión, mantenimiento y soporte de infraestructuras tecnológicas para empresas.
                        </p>
                        <p>
                            Especializado en la administración de servidores, redes y sistemas operativos, garantizando la seguridad, disponibilidad y rendimiento de los entornos TI.
                            Actualmente brindando soporte técnico a empresas, resolviendo incidencias y optimizando procesos para mejorar la eficiencia operativa.
                        </p>
                        <p>
                            Hábil en la configuración de sistemas, virtualización, gestión de usuarios y resolución de problemas, con un enfoque proactivo y orientado a la mejora continua.
                        </p>
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
