import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background text-foreground min-h-screen font-display selection:bg-primary/30 transition-colors duration-500">
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
                        <h1 id="privacidad-titulo" className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
                            Política de <span className="text-primary">Privacidad</span>
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400">Última actualización: 20 de Febrero, 2026</p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-12 text-slate-600 dark:text-slate-300">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">security</span>
                                1. Compromiso de Transparencia
                            </h2>
                            <p className="leading-relaxed">
                                En FiberLink Labs, la protección de su infraestructura intelectual y datos corporativos es nuestra prioridad fundamental. Esta política detalla cómo recolectamos, procesamos y protegemos la información en nuestro ecosistema digital.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">analytics</span>
                                2. Recolección de Datos Analíticos
                            </h2>
                            <p className="leading-relaxed">
                                Recopilamos información técnica necesaria para la optimización de su arquitectura:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Identificadores de sesión encriptados.</li>
                                <li>Parámetros de configuración de infraestructura proporcionados voluntariamente.</li>
                                <li>Métricas de rendimiento de interacción con nuestras herramientas de diagnóstico.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">shield_lock</span>
                                3. Protocolos de Seguridad
                            </h2>
                            <p className="leading-relaxed">
                                Implementamos cifrado AES-256 para todos los datos en reposo y TLS 1.3 para datos en tránsito. El acceso a su información estratégica está restringido bajo protocolos de "Zero Trust" y autenticación multifactor.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">gavel</span>
                                4. Derechos de Privacidad
                            </h2>
                            <p className="leading-relaxed">
                                Usted mantiene soberanía absoluta sobre sus datos. Puede solicitar el acceso, rectificación o eliminación completa de su registro estratégico en cualquier momento a través de nuestros canales oficiales.
                            </p>
                        </section>
                    </div>

                    <div className="mt-20 p-8 bg-primary/5 border border-primary/20 rounded-2xl">
                        <h3 className="text-xl font-bold text-foreground mb-4">¿Tiene dudas sobre su privacidad?</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Nuestro Oficial de Protección de Datos (DPO) está disponible para auditorías técnicas y consultas específicas.
                        </p>
                        <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all">
                            Contactar DPO
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
