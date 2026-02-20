import React, { useState } from 'react';

const GrowthEngine: React.FC = () => {
    const [isEngineMode, setIsEngineMode] = useState(true);

    return (
        <section id="metodologia" className="relative min-h-screen flex flex-col overflow-hidden bg-grid py-20">
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
                        Innovación B2B
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight dark:text-white">
                        De Página Estática a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Motor de Crecimiento</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Transformamos la presencia digital en infraestructura de alto rendimiento que automatiza ventas, centraliza datos y escala sin límites.
                    </p>
                </div>

                {/* Value Switcher */}
                <div className="w-full max-w-md flex p-1.5 bg-slate-200 dark:bg-card-dark rounded-xl border border-slate-300 dark:border-white/10 mb-20">
                    <button
                        onClick={() => setIsEngineMode(false)}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${!isEngineMode ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-lg' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'}`}
                    >
                        Estado Estático (Legacy)
                    </button>
                    <button
                        onClick={() => setIsEngineMode(true)}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${isEngineMode ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'}`}
                    >
                        Motor de Crecimiento
                    </button>
                </div>

                {/* Interactive Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
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
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Automatización 24/7</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                Elimine cuellos de botella manuales. Orquestamos flujos de datos que operan mientras su equipo descansa.
                            </p>
                            {/* Visual representation of flowlines */}
                            <div className="relative h-24 w-full bg-slate-100 dark:bg-black/40 rounded-lg overflow-hidden p-4">
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                                    <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                                    <span className="w-2 h-2 rounded-full bg-primary/40"></span>
                                </div>
                                <div className="flex flex-col gap-3 mt-4">
                                    <div className="h-1.5 w-[60%] bg-primary/30 rounded-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary w-1/3 animate-pulse"></div>
                                    </div>
                                    <div className="h-1.5 w-[85%] bg-primary/30 rounded-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary w-1/2 delay-100 animate-pulse"></div>
                                    </div>
                                    <div className="h-1.5 w-[40%] bg-primary/30 rounded-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary w-full opacity-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tooltip/Metric Toggle Area */}
                        <div className="mt-auto relative group/popover">
                            <button className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-tighter hover:text-primary/80 dark:hover:text-white transition-colors">
                                ¿Cómo escalamos esto?
                                <span className="material-symbols-outlined text-sm">trending_up</span>
                            </button>
                            {/* Mini Popover */}
                            <div className="absolute bottom-full left-0 mb-4 w-64 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl opacity-0 group-hover/popover:opacity-100 translate-y-2 group-hover/popover:translate-y-0 transition-all pointer-events-none z-20">
                                <p className="text-xs font-bold text-slate-900 dark:text-white mb-2 uppercase">ROI Técnico</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] text-slate-500">Eficiencia Operativa</span>
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
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Datos que Deciden</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                Del silencio operativo a la visibilidad total. Paneles en tiempo real que revelan oportunidades ocultas.
                            </p>
                            {/* Visual representation of dynamic chart */}
                            <div className="relative h-24 w-full bg-slate-100 dark:bg-black/40 rounded-lg flex items-end justify-between p-4 gap-1">
                                <div className="w-full h-[20%] bg-primary/20 rounded-t-sm group-hover:h-[60%] transition-all duration-700"></div>
                                <div className="w-full h-[35%] bg-primary/20 rounded-t-sm group-hover:h-[45%] transition-all duration-700 delay-75"></div>
                                <div className="w-full h-[15%] bg-primary/20 rounded-t-sm group-hover:h-[80%] transition-all duration-700 delay-150"></div>
                                <div className="w-full h-[40%] bg-primary/20 rounded-t-sm group-hover:h-[95%] transition-all duration-700 delay-200"></div>
                                <div className="w-full h-[25%] bg-primary/20 rounded-t-sm group-hover:h-[70%] transition-all duration-700 delay-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="px-2 py-1 bg-primary text-[10px] font-bold text-white rounded">VISIBILIDAD TOTAL</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto relative group/popover">
                            <button className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-tighter hover:text-primary/80 dark:hover:text-white transition-colors">
                                ¿Cómo escalamos esto?
                                <span className="material-symbols-outlined text-sm">insights</span>
                            </button>
                            {/* Mini Popover */}
                            <div className="absolute bottom-full left-0 mb-4 w-64 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl opacity-0 group-hover/popover:opacity-100 translate-y-2 group-hover/popover:translate-y-0 transition-all pointer-events-none z-20">
                                <p className="text-xs font-bold text-slate-900 dark:text-white mb-2 uppercase">Decisión de Negocio</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] text-slate-500">Predicción de Churn</span>
                                        <span className="text-xs font-bold text-primary">Precisión 92%</span>
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
                            <h3 className="text-xl font-bold mb-3 dark:text-white">Escalabilidad Infinita</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                Arquitecturas que crecen con su demanda. Soporte para miles de usuarios simultáneos sin degradación.
                            </p>
                            {/* Geometric expanding structure visual */}
                            <div className="relative h-24 w-full bg-slate-100 dark:bg-black/40 rounded-lg flex items-center justify-center p-4">
                                <div className="relative w-12 h-12 border-2 border-primary/40 rotate-45 flex items-center justify-center group-hover:w-16 group-hover:h-16 transition-all duration-500">
                                    <div className="w-6 h-6 bg-primary/60 group-hover:scale-150 transition-all duration-500"></div>
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary"></div>
                                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto relative group/popover">
                            <button className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-tighter hover:text-primary/80 dark:hover:text-white transition-colors">
                                ¿Cómo escalamos esto?
                                <span className="material-symbols-outlined text-sm">cloud_upload</span>
                            </button>
                            {/* Mini Popover */}
                            <div className="absolute bottom-full left-0 mb-4 w-64 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl opacity-0 group-hover/popover:opacity-100 translate-y-2 group-hover/popover:translate-y-0 transition-all pointer-events-none z-20">
                                <p className="text-xs font-bold text-slate-900 dark:text-white mb-2 uppercase">Infraestructura</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] text-slate-500">Tiempo de respuesta</span>
                                        <span className="text-xs font-bold text-primary">&lt; 100ms</span>
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
                        <div className="text-4xl font-bold dark:text-white">40%</div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm max-w-[200px]">Promedio de reducción en costos operativos tras la migración.</div>
                    </div>
                    <div className="h-10 w-[1px] bg-slate-300 dark:bg-white/10 hidden md:block"></div>
                    <div className="flex items-center gap-6">
                        <div className="text-4xl font-bold dark:text-white">2.5x</div>
                        <div className="text-slate-500 dark:text-slate-400 text-sm max-w-[200px]">Aumento en la velocidad de despliegue de nuevas funciones.</div>
                    </div>
                    <button className="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all">
                        Iniciar Consultoría
                    </button>
                </div>
            </main>
            {/* Dynamic Background Canvas Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default GrowthEngine;
