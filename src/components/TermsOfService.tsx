import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsOfService: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-display selection:bg-primary/30">
            <Navbar />

            <main className="relative pt-32 pb-20 px-6">
                <div className="fixed inset-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="mb-12">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-6 hover:translate-x-1 transition-transform"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                            Volver al Inicio
                        </button>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                            Términos de <span className="text-primary">Servicio</span>
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400">Vigente desde: 20 de Febrero, 2026</p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-12 text-slate-600 dark:text-slate-300">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">verified_user</span>
                                1. Aceptación de la Arquitectura Lógica
                            </h2>
                            <p className="leading-relaxed">
                                Al acceder a las herramientas de FiberLink Labs, usted acepta quedar vinculado por estos términos. El uso de nuestros servicios implica el reconocimiento de que la consultoría estratégica es una guía basada en métricas y no una garantía absoluta de rendimiento comercial.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">copyright</span>
                                2. Propiedad Intelectual Digital
                            </h2>
                            <p className="leading-relaxed">
                                Todos los informes generados, metodologías de diagnóstico y código fuente de la plataforma son propiedad de FiberLink Labs. Se concede una licencia de uso no exclusivo para la implementación interna de las recomendaciones estratégicas en su empresa.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">report_problem</span>
                                3. Limitación de Responsabilidad Sistémica
                            </h2>
                            <p className="leading-relaxed">
                                FiberLink Labs no se hace responsable de fallos de infraestructura derivados de implementaciones externas incorrectas o ataques de terceros. Nuestra responsabilidad se limita exclusivamente a la integridad del asesoramiento y las herramientas proporcionadas directamente.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">terminal</span>
                                4. Uso de la Interfaz y API
                            </h2>
                            <p className="leading-relaxed">
                                Queda estrictamente prohibido el uso de técnicas de ingeniería inversa, scrapers no autorizados o ataques de inyección sobre nuestros servicios. Cualquier violación técnica resultará en la terminación inmediata del acceso y acciones legales pertinentes.
                            </p>
                        </section>
                    </div>

                    <div className="mt-20 p-8 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900/50">
                        <p className="text-sm italic">
                            Nota: FiberLink Labs se reserva el derecho de modificar estos parámetros arquitectónicos en función de nuevas regulaciones o innovaciones técnicas.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfService;
