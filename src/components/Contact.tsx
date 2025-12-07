import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-primary/5 border-t border-white/5">
            <div className="container max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-primary font-mono mb-6 text-lg">04. ¿Qué sigue?</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Inicializar_Conexión</h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                        Mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta sobre seguridad,
                        quieras discutir un proyecto o simplemente saludar, intentaré responderte lo antes posible.
                    </p>

                    <a href="mailto:email@example.com" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary/10 transition-all font-mono font-bold text-lg overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            <Mail size={20} />
                            ENVIAR_TRANSMISIÓN
                        </span>
                        <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>

                    <div className="mt-20 flex justify-center gap-8">
                        <a href="#" className="text-gray-500 hover:text-primary hover:-translate-y-1 transition-all">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-primary hover:-translate-y-1 transition-all">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
