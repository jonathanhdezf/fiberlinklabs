import React, { useState } from 'react';

const GrowthEngine: React.FC = () => {
    const [isEngineMode, setIsEngineMode] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', desc: '', icon: '' });

    const stateDetails = {
        static: {
            title: "Página Tradicional (Inactiva)",
            icon: "history",
            desc: "Representa el modelo básico: una página web que solo sirve como tarjeta de presentación. Es difícil de actualizar, no genera clientes automáticamente y no ayuda a que el negocio crezca realmente. Es un sitio que está ahí, pero que no trabaja para ti."
        },
        engine: {
            title: "Sistema de Crecimiento Activo",
            icon: "bolt",
            desc: "Una página web que trabaja 24/7. Integra herramientas que automatizan tus ventas y organizan tu información de manera inteligente. Funciona como un empleado experto que nunca duerme, captando clientes y ahorrándote tiempo valioso."
        }
    };

    const handleToggle = (engine: boolean) => {
        setIsEngineMode(engine);
        const content = engine ? stateDetails.engine : stateDetails.static;
        setModalContent(content);
        setShowModal(true);
    };

    return (
        <section id="metodologia" className="relative min-h-screen flex flex-col overflow-hidden bg-grid py-20 transition-colors duration-700">
            {/* Subtle Particle Background Simulation */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>
            </div>

            <main className="relative z-10 flex-1 flex flex-col items-center px-6 lg:px-16 max-w-7xl mx-auto w-full">
                {/* Header Group */}
                <div className="text-center mb-16 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Metodología Labs
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight dark:text-white">
                        De una Página Simple a un <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Sistema que Vende</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Transformamos tu presencia en línea en una herramienta de alto rendimiento que atrae clientes y organiza tu negocio automáticamente.
                    </p>
                </div>

                {/* Value Switcher */}
                <div className="w-full max-w-md flex p-1.5 bg-slate-200 dark:bg-card-dark rounded-xl border border-slate-300 dark:border-white/10 mb-20 relative z-20">
                    <button
                        onClick={() => handleToggle(false)}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${!isEngineMode ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'}`}
                    >
                        <span className="material-symbols-outlined text-sm">history</span>
                        Estático
                    </button>
                    <button
                        onClick={() => handleToggle(true)}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${isEngineMode ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'}`}
                    >
                        <span className="material-symbols-outlined text-sm">bolt</span>
                        Motor
                    </button>
                </div>

                {/* Interactive Pillars Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative transition-opacity duration-500 ${!isEngineMode ? 'opacity-60 grayscale' : 'opacity-100'}`}>
                    {/* SVG Connecting Lines (Visual Decor) */}
                    <div className="absolute inset-0 -z-10 hidden lg:block overflow-visible">
                        <svg className="opacity-20" height="100%" width="100%">
                            <path className="glow-line" d="M 33% 200 Q 50% 150 66% 200" fill="none" stroke="#0d59f2" strokeDasharray="8 4" strokeWidth="2"></path>
                        </svg>
                    </div>

                    {/* Pillar 1: Automatización */}
                    <div className="pillar-card group glass-panel p-8 rounded-2xl flex flex-col gap-6 transition-all hover:border-primary/40 hover:-translate-y-2">
                        <div className="pillar-icon w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform duration-500 text-primary">
                            <span className="material-symbols-outlined text-3xl">account_tree</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Ahorro de Tiempo</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                {isEngineMode
                                    ? "Olvídate de tareas repetitivas. Creamos sistemas que atienden clientes y procesan pedidos automáticamente, ahorrándote horas de trabajo manual."
                                    : "Procesos manuales lentos. Cada acción requiere que tú o alguien de tu equipo dedique tiempo valioso para hacerlo a mano."}
                            </p>
                            {/* Visual representation of flowlines */}
                            <div className="relative h-24 w-full bg-slate-100 dark:bg-black/40 rounded-lg overflow-hidden p-4">
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className={`w-2 h-2 rounded-full ${isEngineMode ? 'bg-primary/40' : 'bg-slate-400/40'}`}></span>
                                    <span className={`w-2 h-2 rounded-full ${isEngineMode ? 'bg-primary/40' : 'bg-slate-400/40'}`}></span>
                                    <span className={`w-2 h-2 rounded-full ${isEngineMode ? 'bg-primary/40' : 'bg-slate-400/40'}`}></span>
                                </div>
                                <div className="flex flex-col gap-3 mt-4">
                                    <div className={`h-1.5 w-[60%] rounded-full relative overflow-hidden ${isEngineMode ? 'bg-primary/30' : 'bg-slate-300'}`}>
                                        <div className={`absolute inset-0 bg-primary w-1/3 ${isEngineMode ? 'animate-pulse' : 'hidden'}`}></div>
                                    </div>
                                    <div className={`h-1.5 w-[85%] rounded-full relative overflow-hidden ${isEngineMode ? 'bg-primary/30' : 'bg-slate-300'}`}>
                                        <div className={`absolute inset-0 bg-primary w-1/2 delay-100 ${isEngineMode ? 'animate-pulse' : 'hidden'}`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tooltip/Metric Toggle Area */}
                        <div className={`mt-auto relative group/popover transition-opacity duration-300 ${isEngineMode ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}>
                            <button className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-tighter hover:text-primary/80 dark:hover:text-white transition-colors">
                                ¿Qué gano con esto?
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                            </button>
                            {/* Mini Popover */}
                            <div className="absolute bottom-full left-0 mb-4 w-64 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl opacity-0 group-hover/popover:opacity-100 translate-y-2 group-hover/popover:translate-y-0 transition-all pointer-events-none z-20">
                                <p className="text-xs font-bold text-slate-900 dark:text-white mb-2 uppercase">Beneficio Directo</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] text-slate-500">Tiempo de trabajo ahorrado</span>
                                        <span className="text-xs font-bold text-primary">+340%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-white/5 h-1 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full w-[85%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 2: Datos */}
                    <div className="pillar-card group glass-panel p-8 rounded-2xl flex flex-col gap-6 transition-all hover:border-primary/40 hover:-translate-y-2">
                        <div className="pillar-icon w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform duration-500 text-primary">
                            <span className="material-symbols-outlined text-3xl">query_stats</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Información Clara</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                {isEngineMode
                                    ? "Pasa de la duda a la certeza. Entiende qué buscan tus clientes y qué productos funcionan mejor mediante reportes fáciles de entender."
                                    : "Decisiones a ciegas. Sin saber qué prefieren tus clientes, es difícil saber dónde invertir para mejorar tu negocio."}
                            </p>
                            <div className="relative h-24 w-full bg-slate-100 dark:bg-black/40 rounded-lg flex items-end justify-between p-4 gap-1">
                                <div className={`w-full h-[20%] rounded-t-sm transition-all duration-700 ${isEngineMode ? 'bg-primary/20 group-hover:h-[60%]' : 'bg-slate-300 h-[10%]'}`}></div>
                                <div className={`w-full h-[35%] rounded-t-sm transition-all duration-700 delay-75 ${isEngineMode ? 'bg-primary/20 group-hover:h-[45%]' : 'bg-slate-300 h-[10%]'}`}></div>
                                <div className={`w-full h-[15%] rounded-t-sm transition-all duration-700 delay-150 ${isEngineMode ? 'bg-primary/20 group-hover:h-[80%]' : 'bg-slate-300 h-[10%]'}`}></div>
                                <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${isEngineMode ? '' : 'hidden'}`}>
                                    <span className="px-2 py-1 bg-primary text-[10px] font-bold text-white rounded">CONTROL TOTAL</span>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-auto relative group/popover transition-opacity duration-300 ${isEngineMode ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}>
                            <button className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-tighter hover:text-primary/80 dark:hover:text-white transition-colors">
                                ¿Qué gano con esto?
                                <span className="material-symbols-outlined text-sm">insights</span>
                            </button>
                            {/* Mini Popover */}
                            <div className="absolute bottom-full left-0 mb-4 w-64 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl opacity-0 group-hover/popover:opacity-100 translate-y-2 group-hover/popover:translate-y-0 transition-all pointer-events-none z-20">
                                <p className="text-xs font-bold text-slate-900 dark:text-white mb-2 uppercase">Control de Negocio</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] text-slate-500">Retención de Clientes</span>
                                        <span className="text-xs font-bold text-primary">Aumento del 92%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-white/5 h-1 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full w-[92%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 3: Escalabilidad */}
                    <div className="pillar-card group glass-panel p-8 rounded-2xl flex flex-col gap-6 transition-all hover:border-primary/40 hover:-translate-y-2">
                        <div className="pillar-icon w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-transform duration-500 text-primary">
                            <span className="material-symbols-outlined text-3xl">grid_view</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Preparado para Crecer</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                {isEngineMode
                                    ? "Tecnología que no te limita. Si tu negocio crece y recibes miles de visitas al día, tu página responderá rápido y sin problemas."
                                    : "Sistemas frágiles. Las páginas básicas suelen fallar o volverse muy lentas cuando muchos clientes intentan entrar al mismo tiempo."}
                            </p>
                            <div className="relative h-24 w-full bg-slate-100 dark:bg-black/40 rounded-lg flex items-center justify-center p-4">
                                <div className={`relative w-12 h-12 border-2 rotate-45 flex items-center justify-center transition-all duration-500 ${isEngineMode ? 'border-primary/40 group-hover:w-16 group-hover:h-16' : 'border-slate-300'}`}>
                                    <div className={`w-6 h-6 transition-all duration-500 ${isEngineMode ? 'bg-primary/60 group-hover:scale-150' : 'bg-slate-300'}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-auto relative group/popover transition-opacity duration-300 ${isEngineMode ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}>
                            <button className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-tighter hover:text-primary/80 dark:hover:text-white transition-colors">
                                ¿Qué gano con esto?
                                <span className="material-symbols-outlined text-sm">cloud_upload</span>
                            </button>
                            {/* Mini Popover */}
                            <div className="absolute bottom-full left-0 mb-4 w-64 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl opacity-0 group-hover/popover:opacity-100 translate-y-2 group-hover/popover:translate-y-0 transition-all pointer-events-none z-20">
                                <p className="text-xs font-bold text-slate-900 dark:text-white mb-2 uppercase">Calidad de Servicio</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] text-slate-500">Velocidad de Carga</span>
                                        <span className="text-xs font-bold text-primary">Instantánea</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-white/5 h-1 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full w-[98%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Bottom Element */}
                <div className="mt-24 py-8 px-12 glass-panel rounded-2xl w-full flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-l-primary">
                    <div className="flex items-center gap-6">
                        <div className="text-4xl font-bold dark:text-white">{isEngineMode ? '40%' : '0%'}</div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm max-w-[200px]">
                            {isEngineMode ? 'Reducción en costos operativos tras la migración.' : 'Ahorro operativo en el estado tradicional.'}
                        </div>
                    </div>
                    <div className="h-10 w-[1px] bg-slate-300 dark:bg-white/10 hidden md:block"></div>
                    <div className="flex items-center gap-6">
                        <div className="text-4xl font-bold dark:text-white">{isEngineMode ? '2.5x' : '1x'}</div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm max-w-[200px]">
                            {isEngineMode ? 'Aumento en la velocidad de despliegue de funciones.' : 'Velocidad de desarrollo base.'}
                        </div>
                    </div>
                    <a href="#contacto" className="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all text-center">
                        Iniciar Consultoría
                    </a>
                </div>
            </main>

            {/* Educational Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setShowModal(false)}></div>
                    <div className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
                        {/* High-Contrast Blueprint Grid for Modal */}
                        <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-[0.07]"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 pointer-events-none"></div>

                        {/* Large Ghost Icon Background */}
                        <div className="absolute -bottom-10 -right-10 opacity-[0.05] dark:opacity-[0.07] pointer-events-none select-none">
                            <span className="material-symbols-outlined text-[300px] leading-none text-slate-900 dark:text-white">
                                {modalContent.icon}
                            </span>
                        </div>

                        <div className="relative p-8">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-2xl">{modalContent.icon}</span>
                                    </div>
                                    <h3 className={`text-xl font-black uppercase tracking-tight ${isEngineMode ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                                        {isEngineMode ? 'Motor Activado' : 'Visión Estática'}
                                    </h3>
                                </div>
                                <button onClick={() => setShowModal(false)} className="size-10 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-center transition-colors">
                                    <span className="material-symbols-outlined text-slate-400">close</span>
                                </button>
                            </div>

                            <h4 className="text-2xl font-bold mb-4 dark:text-white leading-tight">{modalContent.title}</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8">
                                {modalContent.desc}
                            </p>

                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all"
                            >
                                ENTENDIDO
                            </button>
                        </div>
                        <div className="h-1.5 w-full bg-primary/20 relative">
                            <div className="h-full bg-primary animate-[loading_2s_ease-in-out]"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Dynamic Background Canvas Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default GrowthEngine;
