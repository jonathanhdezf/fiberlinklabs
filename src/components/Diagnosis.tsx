import React, { useState, useRef, useEffect } from 'react';

const steps = [
    {
        title: "Paso 1: Situación Actual",
        question: "Paso 1: Situación Actual",
        desc: "¿Qué es lo que más te quita tiempo o te preocupa hoy?",
        options: [
            { id: "manual", title: "Mucho Trabajo Manual", desc: "Tareas repetitivas que se podrían automatizar.", icon: "history_toggle_off" },
            { id: "data", title: "Sin Control Claro", desc: "Es difícil saber exactamente cuánto se vende o gasta.", icon: "visibility_off" },
            { id: "sales", title: "Pocos Clientes Nuevos", desc: "Crecimiento frenado por no tener presencia web clara.", icon: "trending_down" },
            { id: "silos", title: "Herramientas Lentas", desc: "Sistemas viejos o desconectados que nos retrasan.", icon: "link_off" }
        ]
    },
    {
        title: "Paso 2: Metas de Crecimiento",
        question: "Paso 2: Metas de Crecimiento",
        desc: "¿Qué quieres lograr en los próximos 12 meses?",
        options: [
            { id: "optimize", title: "Hacer el negocio más eficiente", desc: "Ahorrar tiempo y reducir errores diarios.", icon: "trending_up" },
            { id: "regional", title: "Crecer a nuevas ciudades", desc: "Llegar a más clientes en la región o el país.", icon: "public" },
            { id: "transformation", title: "Renovación Digital Total", desc: "Convertir el negocio en un referente tecnológico.", icon: "rocket_launch" }
        ]
    },
    {
        title: "Paso 3: Contacto",
        question: "Paso 3: Contacto",
        desc: "Dinos dónde enviarte tu plan de crecimiento personalizado.",
        options: []
    }
];

const Diagnosis = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState<Record<number, string>>({});
    const [formData, setFormData] = useState({ name: '', company: '', email: '' });
    const [status, setStatus] = useState<'idle' | 'processing' | 'results'>('idle');
    const modalRef = useRef<HTMLDivElement>(null);

    const handleSelect = (optionId: string) => {
        setSelections(prev => ({ ...prev, [currentStep]: optionId }));
        // Fast interaction: auto-advance
        setTimeout(() => {
            if (currentStep < 2) setCurrentStep(currentStep + 1);
        }, 300);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('processing');
        setTimeout(() => {
            setStatus('results');
        }, 3500);
    };

    const reset = () => {
        setIsOpen(false);
        setCurrentStep(0);
        setSelections({});
        setStatus('idle');
        setFormData({ name: '', company: '', email: '' });
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <section id="diagnostico" className="py-32 px-6 relative overflow-hidden bg-background transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full"></div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-10">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Mejora tu Negocio
                </div>

                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 text-foreground leading-[1.1]">
                    ¿Tu tecnología actual te ayuda a <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 italic block mt-2">crecer o te está frenando?</span>
                </h2>

                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                    En menos de 2 minutos, identifica qué está frenando tu crecimiento y recibe un plan de acción diseñado por nuestros expertos.
                </p>

                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(13,89,242,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(13,89,242,0.5)] transition-all active:scale-95"
                >
                    <span className="relative z-10">Comenzar Diagnóstico Gratis</span>
                    <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">rocket_launch</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
                    <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={reset}></div>

                    <div
                        ref={modalRef}
                        className="relative w-full max-w-4xl bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500"
                    >
                        {status === 'idle' && (
                            <div className="flex flex-col h-full max-h-[90vh]">
                                {/* Modal Header */}
                                <div className="p-8 pb-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined font-bold">query_stats</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">{steps[currentStep].title}</h4>
                                            <div className="flex gap-1 mt-1">
                                                {[0, 1, 2].map(s => (
                                                    <div key={s} className={`h-1 w-8 rounded-full transition-all duration-500 ${s <= currentStep ? 'bg-primary' : 'bg-slate-200'}`}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={reset} className="size-10 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-center transition-colors">
                                        <span className="material-symbols-outlined text-slate-400">close</span>
                                    </button>
                                </div>

                                {/* Modal Content - Step Flow */}
                                <div className="p-8 md:p-12 overflow-y-auto">
                                    <div className="mb-10 text-center max-w-2xl mx-auto">
                                        <h3 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">{steps[currentStep].question}</h3>
                                        <p className="text-slate-500 font-medium">{steps[currentStep].desc}</p>
                                    </div>

                                    {currentStep < 2 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {steps[currentStep].options.map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => handleSelect(opt.id)}
                                                    className={`group flex items-start p-6 rounded-2xl border-2 transition-all text-left relative overflow-hidden ${selections[currentStep] === opt.id ? 'border-primary bg-primary/5' : 'border-slate-100 hover:border-primary/50 hover:bg-slate-50'}`}
                                                >
                                                    <div className={`mr-5 size-12 rounded-xl flex items-center justify-center transition-colors ${selections[currentStep] === opt.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                                                        <span className="material-symbols-outlined text-2xl font-bold">{opt.icon}</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="font-bold text-lg mb-1 text-slate-900">{opt.title}</h5>
                                                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{opt.desc}</p>
                                                    </div>
                                                    {selections[currentStep] === opt.id && (
                                                        <div className="absolute right-4 top-4 text-primary animate-in zoom-in-0 duration-300">
                                                            <span className="material-symbols-outlined filled">check_circle</span>
                                                        </div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="max-w-md mx-auto">
                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                {['name', 'company', 'email'].map((field) => (
                                                    <div key={field} className="relative group">
                                                        <input
                                                            id={`modal-field-${field}`}
                                                            required
                                                            type={field === 'email' ? 'email' : 'text'}
                                                            placeholder=" "
                                                            value={formData[field as keyof typeof formData]}
                                                            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                                                            className="peer w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all text-slate-900 pt-7"
                                                        />
                                                        <label
                                                            htmlFor={`modal-field-${field}`}
                                                            className="absolute left-5 top-4 text-slate-400 text-xs font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4.5 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary"
                                                        >
                                                            {field === 'name' ? 'Tu Nombre' : field === 'company' ? 'Empresa' : 'Email de Negocios'}
                                                        </label>
                                                    </div>
                                                ))}
                                                <button type="submit" className="w-full mt-4 py-5 bg-primary text-white font-black rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-3 group">
                                                    Ver Mi Hoja de Ruta
                                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                                </button>
                                            </form>
                                        </div>
                                    )}
                                </div>

                                {/* Modal Footer Nav */}
                                <div className="p-8 mt-auto border-t border-slate-100 flex items-center justify-between">
                                    <button
                                        onClick={() => setCurrentStep(prev => prev - 1)}
                                        disabled={currentStep === 0}
                                        className={`flex items-center gap-2 font-bold text-xs uppercase tracking-widest transition-all ${currentStep === 0 ? 'opacity-0' : 'text-slate-400 hover:text-primary'}`}
                                    >
                                        <span className="material-symbols-outlined text-sm">arrow_back</span> Atrás
                                    </button>
                                    <span className="text-xs font-mono text-slate-400">Paso 0{currentStep + 1} / 03</span>
                                </div>
                            </div>
                        )}

                        {status === 'processing' && (
                            <div className="p-12 md:p-24 text-center flex flex-col items-center justify-center min-h-[500px] animate-in fade-in duration-500">
                                <div className="relative mb-12">
                                    {/* Advanced pulsing analyzer animation */}
                                    <div className="size-32 rounded-full border-4 border-primary/20 animate-[spin_3s_linear_infinite]"></div>
                                    <div className="absolute inset-0 size-32 rounded-full border-t-4 border-primary animate-[spin_1.5s_ease-in-out_infinite]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-4xl text-primary animate-pulse font-black">hub</span>
                                    </div>
                                    {/* Floating data dots */}
                                    {[0, 1, 2, 3].map(i => (
                                        <div key={i} className={`absolute size-2 bg-primary rounded-full animate-ping opacity-50 data-dot-${i}`}></div>
                                    ))}
                                </div>
                                <h2 className="text-3xl font-black mb-4 text-slate-900">Procesando Diagnóstico B2B</h2>
                                <p className="text-slate-500 max-w-sm font-medium animate-pulse">
                                    Nuestra IA está analizando tu modelo de datos y arquitectura para generar recomendaciones...
                                </p>
                                <div className="mt-12 w-full max-w-xs h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary animate-[loading_3.5s_ease-in-out_forwards]"></div>
                                </div>
                            </div>
                        )}

                        {status === 'results' && (
                            <div className="flex flex-col h-full max-h-[95vh] animate-in slide-in-from-bottom-5 duration-700">
                                <div className="p-8 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                            <span className="material-symbols-outlined text-lg">insights</span>
                                        </div>
                                        <h2 className="text-lg font-black tracking-tight text-slate-900 uppercase">Resultados Estratégicos</h2>
                                    </div>
                                    <button onClick={reset} className="px-5 py-2 rounded-lg bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors">Cerrar</button>
                                </div>

                                <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 text-left">
                                        <div className="lg:col-span-7">
                                            <h1 className="text-3xl md:text-5xl font-black mb-6 text-slate-900 leading-tight">
                                                Hoja de Ruta: <span className="text-primary">{formData.company || 'Empresa'}</span>
                                            </h1>
                                            <div className="space-y-4">
                                                {[
                                                    { level: 'Fase 1', name: 'Optimización de Flujos', color: 'bg-blue-500', desc: 'Eliminación inmediata de fricciones manuales y automatización de procesos básicos.' },
                                                    { level: 'Fase 2', name: 'Escalamiento de Datos', color: 'bg-indigo-500', desc: 'Centralización de infraestructura para permitir crecimiento regional sin duplicidad.' },
                                                    { level: 'Fase 3', name: 'Ecosistema Adaptativo', color: 'bg-purple-500', desc: 'Implementación de IA y analítica predictiva para toma de decisiones autónoma.' }
                                                ].map((fase, i) => (
                                                    <div key={i} className="group p-6 bg-white border border-slate-200 rounded-3xl hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                                                        <div className="flex items-center gap-4 mb-4">
                                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase text-white ${fase.color}`}>{fase.level}</span>
                                                            <h3 className="text-xl font-bold text-slate-900">{fase.name}</h3>
                                                        </div>
                                                        <p className="text-slate-500 text-sm leading-relaxed font-medium">{fase.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="lg:col-span-5">
                                            <div className="sticky top-0 space-y-6">
                                                <div className="p-8 bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/20 rounded-[2.5rem] flex flex-col items-center text-center shadow-2xl">
                                                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">Puntuación Técnica</h4>
                                                    <div className="relative size-40 mb-8">
                                                        <svg className="size-full transform -rotate-90">
                                                            <circle cx="80" cy="80" r="70" className="stroke-slate-100 dark:stroke-white/5 fill-none" strokeWidth="12" />
                                                            <circle cx="80" cy="80" r="70" className="stroke-primary fill-none transition-all duration-[2000ms] ease-out" strokeWidth="12" strokeDasharray="440" strokeDashoffset="140" strokeLinecap="round" />
                                                        </svg>
                                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                            <span className="text-5xl font-black text-slate-900">68<span className="text-2xl opacity-50">%</span></span>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-slate-600 font-bold px-4">
                                                        Tu infraestructura tiene un nivel de madurez <span className="text-primary italic">Intermedio</span>.
                                                    </p>
                                                </div>

                                                <div className="p-8 bg-slate-950 rounded-[2.5rem] text-white">
                                                    <h5 className="font-bold mb-4">¿Siguiente Paso?</h5>
                                                    <p className="text-sm text-slate-400 mb-6 font-medium">Validamos estos resultados con un Arquitecto Digital en una sesión de 15 minutos.</p>
                                                    <a href="#contacto" className="block w-full py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95 text-center" onClick={() => reset()}>RESERVAR SESIÓN</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style>{`
                @keyframes loading {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                .filled { font-variation-settings: 'FILL' 1; }
                .custom-scrollbar::-webkit-scrollbar { width: 5px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
                .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }
                
                /* Processing Dots Positioning */
                .data-dot-0 { top: 50%; left: 110%; animation-delay: 0s; }
                .data-dot-1 { top: 110%; left: 50%; animation-delay: 0.5s; }
                .data-dot-2 { top: 50%; left: -10%; animation-delay: 1s; }
                .data-dot-3 { top: -10%; left: 50%; animation-delay: 1.5s; }
            `}</style>
        </section>
    );
};

export default Diagnosis;
