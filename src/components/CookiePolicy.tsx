import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const CookiePolicy: React.FC = () => {
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
                            Política de <span className="text-primary">Cookies</span>
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400">Estado del ecosistema de rastreo: Optimizado</p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-12 text-slate-600 dark:text-slate-300">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">cookie</span>
                                1. Fragmentación de Memoria Local
                            </h2>
                            <p className="leading-relaxed">
                                FiberLink Labs utiliza cookies y tecnologías de almacenamiento local para mejorar su experiencia de navegación y personalizar los diagnósticos estratégicos. Estas "cookies" son pequeños fragmentos de datos que nos permiten recordar su estado preferido.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">category</span>
                                2. Clasificación de Datos Persistentes
                            </h2>

                            <div className="grid gap-6">
                                <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-blue-500">memory</span>
                                        Escenciales
                                    </h3>
                                    <p className="text-sm">Necesarias para el funcionamiento técnico de la plataforma, como la gestión de sesiones y el guardado de sus preferencias de modo oscuro.</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-green-500">settings</span>
                                        Funcionales
                                    </h3>
                                    <p className="text-sm">Permiten que el sitio recuerde elecciones que usted hace (como su nombre de usuario o los datos de diagnóstico parciales).</p>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-purple-500">monitoring</span>
                                        Analíticas
                                    </h3>
                                    <p className="text-sm">Nos ayudan a entender cómo los usuarios navegan a través de nuestra arquitectura para optimizar el flujo de información.</p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">settings_applications</span>
                                3. Gestión de Configuración
                            </h2>
                            <p className="leading-relaxed">
                                Usted puede restringir o bloquear las cookies a través de la configuración de su navegador. Tenga en cuenta que la desactivación de cookies críticas puede degradar severamente la precisión del Diagnóstico Digital de FiberLink Labs.
                            </p>
                        </section>
                    </div>

                    <div className="mt-20 border-t border-slate-200 dark:border-slate-800 pt-12 text-center text-sm text-slate-500">
                        © 2026 FiberLink Labs. Arquitectura de Datos Segura.
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CookiePolicy;
