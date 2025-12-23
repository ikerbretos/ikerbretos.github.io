import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 px-4 md:px-24 text-center">
            <div className="container max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-primary font-mono mb-4 text-base">04. ¿Qué sigue?</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Ponte en Contacto</h2>
                    <p className="text-text text-lg mb-12 leading-relaxed">
                        Actualmente estoy buscando activamente nuevas oportunidades. Mi bandeja de entrada siempre está abierta.
                        Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré todo lo posible por responderte!
                    </p>

                    <a href="mailto:ikerbretos@proton.me" className="px-8 py-4 border border-primary text-primary rounded hover:bg-primary/10 transition-all font-mono text-lg">
                        Contacta
                    </a>
                </motion.div>


            </div>
        </section>
    );
};
