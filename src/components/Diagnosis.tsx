import { useState, useRef, useEffect } from 'react';

const steps = [
    {
        title: "Identificación de Fricción",
        question: "¿Cuál es el principal cuello de botella de tu empresa hoy?",
        desc: "Selecciona el área que requiere atención inmediata para que podamos personalizar tu hoja de ruta tecnológica.",
        options: [
            { id: "manual", title: "Procesos Manuales Lentos", desc: "Tareas repetitivas, hojas de cálculo fragmentadas y errores operativos.", icon: "history_toggle_off" },
            { id: "data", title: "Falta de Visibilidad", desc: "Dificultad para obtener reportes en tiempo real y tomar decisiones.", icon: "visibility_off" },
            { id: "sales", title: "Ventas Estancadas", desc: "Crecimiento limitado por falta de optimización comercial y CRM.", icon: "trending_down" },
            { id: "silos", title: "Sistemas Desconectados", desc: "Herramientas que no se hablan y generan duplicidad de datos.", icon: "link_off" }
        ]
    },
    {
        title: "Escala y Visión",
        question: "¿A qué escala proyectas tu crecimiento en los próximos 12 meses?",
        desc: "Define tus objetivos estratégicos para que podamos alinear nuestra metodología de consultoría con tu nivel de ambición.",
        options: [
            { id: "optimize", title: "Optimizar lo actual", desc: "Refinar procesos internos y maximizar la eficiencia operativa existente.", icon: "trending_up" },
            { id: "regional", title: "Escalar regionalmente", desc: "Expansión geográfica y penetración agresiva en nuevos mercados.", icon: "public" },
            { id: "transformation", title: "Transformación total", desc: "Innovación disruptiva y creación de nuevos modelos de negocio digitales.", icon: "rocket_launch" }
        ]
    },
    {
        title: "Tamaño de Operación",
        question: "¿Cuál es la dimensión actual de tu equipo operativo?",
        desc: "Esto nos permite dimensionar correctamente la infraestructura y el soporte necesario.",
        options: [
            { id: "startup", title: "Startup / Early Stage", desc: "1-10 empleados. Enfoque en agilidad y validación tecnológica.", icon: "child_care" },
            { id: "smb", title: "Empresa en Crecimiento", desc: "11-50 empleados. Necesidad de robustez y procesos estructurados.", icon: "trending_up" },
            { id: "enterprise", title: "Gran Empresa / Corporativo", desc: "50+ empleados. Complejidad alta, múltiples sedes y sistemas heredados.", icon: "corporate_fare" },
            { id: "scaleup", title: "Scale-up Global", desc: "Expansión internacional activa y requerimientos de alta disponibilidad.", icon: "public" }
        ]
    },
    {
        title: "Infraestructura Actual",
        question: "¿Qué tecnologías core sostienen tu operación hoy?",
        desc: "Analizamos tu stack actual para asegurar compatibilidad y transiciones suaves.",
        options: [
            { id: "legacy", title: "Sistemas On-premise", desc: "Servidores físicos propios y software instalado localmente.", icon: "dns" },
            { id: "cloud", title: "Cloud Nativo", desc: "Uso de AWS, Azure o Google Cloud con microservicios.", icon: "cloud" },
            { id: "hybrid", title: "Arquitectura Híbrida", desc: "Mezcla de sistemas antiguos con soluciones modernas en la nube.", icon: "hub" },
            { id: "none", title: "Sin Stack Definido", desc: "Uso de herramientas aisladas sin una base tecnológica central.", icon: "architecture" }
        ]
    },
    {
        title: "Inversión y Prioridad",
        question: "¿Cuál es el presupuesto estimado para esta fase de transformación?",
        desc: "Esto nos ayuda a proponer soluciones que se ajusten a tu capacidad de inversión y retorno esperado.",
        options: [
            { id: "essential", title: "Esencial / MVP", desc: "Enfoque en resolver el problema crítico con mínima inversión.", icon: "savings" },
            { id: "strategic", title: "Inversión Estratégica", desc: "Presupuesto robusto para cambios significativos y escalables.", icon: "payments" },
            { id: "aggressive", title: "Transformación Agresiva", desc: "Inversión total para liderar el mercado tecnológicamente.", icon: "account_balance" },
            { id: "custom", title: "A Medida / Sin Límite", desc: "Desarrollo premium con requerimientos especiales de alto impacto.", icon: "diamond" }
        ]
    }
];

const Diagnosis = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState<Record<number, string>>({});
    const [growthRate, setGrowthRate] = useState(50);
    const [formData, setFormData] = useState({ name: '', company: '', email: '' });
    const [isProcessing, setIsProcessing] = useState(false);
    const [isScheduling, setIsScheduling] = useState(false);
    const [isResources, setIsResources] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const handleSelect = (optionId: string) => {
        setSelections({ ...selections, [currentStep]: optionId });
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsSubmitted(true);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simular análisis premium
        setTimeout(() => {
            setIsProcessing(false);
            setIsSubmitted(true);
        }, 3500);
    };

    if (isProcessing) {
        return (
            <section id="diagnostico" className="py-24 px-6 bg-slate-50 dark:bg-slate-950 flex items-center justify-center min-h-[600px]">
                <div className="max-w-md w-full text-center">
                    <div className="mb-12 relative">
                        <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary animate-pulse">analytics</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 dark:text-white">Procesando Diagnóstico B2B</h2>
                    <div className="space-y-3">
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary animate-[loading_3.5s_ease-in-out_forwards] shadow-[0_0_15px_rgba(13,89,242,0.5)]"></div>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                            Análisis de infraestructura completado. Generando hoja de ruta...
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    if (isScheduling) {
        return (
            <section id="diagnostico" className="bg-slate-50 dark:bg-slate-950 min-h-screen">
                {/* Header for Dashboard Consistency */}
                <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-6 lg:px-20 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-2xl">insights</span>
                            </div>
                            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">FiberLink Labs</h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-10">
                            <button onClick={() => { setIsScheduling(false); setIsResources(false); }} className={`text-sm font-medium hover:text-primary transition-colors dark:text-slate-300`}>Roadmap</button>
                            <button onClick={() => { setIsScheduling(false); setIsResources(true); }} className={`text-sm font-medium hover:text-primary transition-colors dark:text-slate-300`}>Resources</button>
                            <button onClick={() => setIsScheduling(true)} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg transition-colors">
                                <span className="material-symbols-outlined text-lg">calendar_month</span>
                                <span className="text-sm font-bold">Agendar</span>
                            </button>
                        </nav>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Side: Value Proposition */}
                        <div className="flex flex-col space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                                <span className="material-symbols-outlined text-sm">verified</span>
                                Estrategia B2B de Alto Nivel
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                                Reserva tu Consultoría con un <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Arquitecto Digital</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                                Sesión estratégica de transformación digital diseñada exclusivamente para ejecutivos B2B. Al finalizar, tendrás un diagnóstico técnico claro de tu arquitectura actual y un plan de acción inmediato.
                            </p>

                            <div className="space-y-6 pt-4">
                                {[
                                    { icon: 'query_stats', title: '30-min Deep Dive', desc: 'Sesión técnica intensiva para analizar tus objetivos comerciales y capacidad digital.' },
                                    { icon: 'rule_folder', title: 'Process Audit', desc: 'Identificación exhaustiva de cuellos de botella en tu flujo de datos actual.' },
                                    { icon: 'map', title: 'Initial Roadmap', desc: 'Entrega de un plan de ejecución de alto nivel validado por nuestros arquitectos.' }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                                        <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                                            <span className="material-symbols-outlined">{benefit.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold dark:text-white">{benefit.title}</h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2].map((n) => (
                                        <div key={n} className="size-10 rounded-full border-2 border-slate-200 dark:border-slate-950 bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-sm">person</span>
                                        </div>
                                    ))}
                                    <div className="size-10 rounded-full border-2 border-slate-200 dark:border-slate-950 bg-primary flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-tighter">
                                        +15
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                                    "Liderando la arquitectura de +15 empresas Fortune 500 este año."
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Scheduling Card */}
                        <div className="lg:sticky lg:top-24">
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
                                <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-white/5">
                                    <div>
                                        <h4 className="text-lg font-bold dark:text-white">Selecciona Fecha y Hora</h4>
                                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                                            <span className="material-symbols-outlined text-[14px]">public</span>
                                            Timezone: Madrid (GMT+1)
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-2xl font-black text-primary">30</span>
                                        <span className="text-xs text-slate-400 block uppercase tracking-widest font-bold">Minutos</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-8">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="font-bold text-lg dark:text-white">Febrero 2026</span>
                                            <div className="flex gap-2">
                                                <button className="size-8 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-center transition-all">
                                                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                                                </button>
                                                <button className="size-8 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-center transition-all">
                                                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                                            <div>Dom</div><div>Lun</div><div>Mar</div><div>Mié</div><div>Jue</div><div>Vie</div><div>Sáb</div>
                                        </div>
                                        <div className="grid grid-cols-7 gap-2">
                                            {/* Static calendar demo */}
                                            {Array.from({ length: 28 }).map((_, i) => {
                                                const day = i + 1;
                                                const isAvailable = [20, 21, 23, 24, 25, 26, 27].includes(day);
                                                const isSelected = day === 20;

                                                return (
                                                    <button
                                                        key={i}
                                                        disabled={!isAvailable}
                                                        className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all ${isSelected
                                                            ? 'bg-primary text-white shadow-lg shadow-primary/40 font-bold'
                                                            : isAvailable
                                                                ? 'font-bold border border-primary/40 text-primary bg-primary/10 hover:bg-primary hover:text-white'
                                                                : 'text-slate-400 cursor-not-allowed'
                                                            }`}
                                                    >
                                                        {day}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500">Horarios Disponibles - 20 de Feb</h5>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                                            {['09:00 AM', '10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'].map((time, i) => (
                                                <button
                                                    key={i}
                                                    className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${time === '12:00 PM'
                                                        ? 'bg-primary text-white font-bold shadow-lg shadow-primary/20 border-primary'
                                                        : 'border-slate-200 dark:border-white/10 hover:border-primary/50 hover:bg-primary/5 dark:text-slate-300'
                                                        }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/5">
                                    <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 group">
                                        Confirmar Sesión Estratégica
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </button>
                                    <p className="text-[10px] text-center text-slate-500 mt-4 uppercase tracking-widest font-medium">
                                        Sin compromiso de compra. Revisión técnica inicial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (isResources && selectedArticle) {
        return (
            <section id="diagnostico" className="bg-slate-50 dark:bg-slate-950 min-h-screen relative overflow-hidden selection:bg-primary/30">
                {/* Reading Progress Bar */}
                <div className="fixed top-0 left-0 w-[45%] h-1 bg-primary z-[100] shadow-[0_0_10px_rgba(13,89,242,0.5)]"></div>

                <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-6 lg:px-20 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <button
                            onClick={() => setSelectedArticle(null)}
                            className="flex items-center gap-3 group"
                        >
                            <div className="size-8 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined text-xl">arrow_back</span>
                            </div>
                            <span className="text-sm font-bold dark:text-slate-300">Volver a Recursos</span>
                        </button>
                        <nav className="hidden md:flex items-center gap-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Leyendo: Quantum Architecture 2024</span>
                        </nav>
                        <div className="flex gap-4">
                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500"><span className="material-symbols-outlined">share</span></button>
                            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500"><span className="material-symbols-outlined">bookmark</span></button>
                        </div>
                    </div>
                </header>

                <main className="w-full">
                    <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center border-b border-slate-200 dark:border-slate-800">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                            <span className="material-symbols-outlined text-sm">bolt</span> Quantum Networking
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight mb-10 dark:text-white">
                            The Future of Quantum-Safe Fiber Architectures 2024
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 dark:text-slate-400 font-medium">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-2xl text-primary">account_circle</span>
                                <span className="text-slate-900 dark:text-slate-100">Dr. Aris Thorne</span>
                            </div>
                            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
                            <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-lg">calendar_today</span>
                                <span>Oct 24, 2024</span>
                            </div>
                            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
                            <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-lg">schedule</span>
                                <span>12 min read</span>
                            </div>
                        </div>
                    </section>

                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
                        <aside className="hidden lg:block lg:col-span-2">
                            <div className="sticky top-32 space-y-8">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Contenidos</h4>
                                <nav className="flex flex-col gap-4 text-sm font-semibold">
                                    {['Introducción', 'Amenazas Quantum', 'Diseño Seguro', 'Implementación'].map((item, idx) => (
                                        <a key={item} href="#" className={`flex items-center gap-2 group ${idx === 0 ? 'text-primary' : 'text-slate-500 hover:text-primary transition-colors'}`}>
                                            <span className={`h-px transition-all group-hover:w-6 ${idx === 0 ? 'w-6 bg-primary' : 'w-4 bg-transparent group-hover:bg-primary'}`}></span> {item}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        <article className="col-span-1 lg:col-span-7 font-serif leading-relaxed">
                            <p className="text-xl md:text-2xl font-medium text-slate-900 dark:text-slate-100 italic mb-12 border-l-4 border-primary pl-6">
                                "As quantum computing moves from theoretical possibility to industrial reality, the traditional fiber-optic infrastructures find themselves at a crossroads."
                            </p>

                            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 mb-12">
                                <p>In the current landscape of digital transformation, we often discuss data transit speeds in terabits and latency in microseconds. However, the emergence of Shor’s algorithm and its potential implementation on large-scale quantum computers has introduced a new metric: the quantum-safety window.</p>
                                <p>FiberLink Labs has spent the last five years researching the convergence of post-quantum cryptography (PQC) and physical layer security.</p>
                            </div>

                            <div className="my-12 p-8 bg-slate-100 dark:bg-slate-900 rounded-xl border border-primary/20 relative group">
                                <div className="absolute top-4 right-4 text-[10px] uppercase font-bold text-primary tracking-widest bg-primary/10 px-2 py-0.5 rounded">Fig 1.2</div>
                                <h3 className="text-lg font-bold mb-6 dark:text-white">Hybrid QKD & PQC Topology</h3>
                                <div className="aspect-video w-full bg-slate-200 dark:bg-slate-950 rounded-xl flex items-center justify-center p-8 relative overflow-hidden">
                                    <div className="flex items-center gap-8 relative z-10">
                                        <div className="size-16 rounded-lg border-2 border-primary bg-primary/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-3xl text-primary">hub</span>
                                        </div>
                                        <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-emerald-400 relative">
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-emerald-400 font-bold whitespace-nowrap">Encrypted Tunnel</div>
                                        </div>
                                        <div className="size-16 rounded-lg border-2 border-emerald-400 bg-emerald-400/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-3xl text-emerald-400">dns</span>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,#0d59f2_1px,transparent_0)] bg-[size:16px_16px]"></div>
                                </div>
                                <p className="text-sm text-slate-500 mt-6 italic leading-relaxed">The integration of Quantum Key Distribution (QKD) over existing Dark Fiber assets requires a dual-channel multiplexing strategy.</p>
                            </div>

                            <h2 className="text-2xl font-bold mt-12 mb-6 dark:text-white">Amenazas Quantum en Fibra Clásica</h2>
                            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300">
                                <p>Traditional RSA and ECC encryptions are fundamentally mathematically linked to factoring problems that quantum bits can navigate with exponential efficiency.</p>
                                <ul className="space-y-4 pt-4 border-l-2 border-slate-200 dark:border-slate-800 pl-6">
                                    {[
                                        { icon: 'security_update_warning', title: 'Retroactive Decryption', desc: 'Large-scale harvesting of encrypted traffic today for decryption tomorrow.' },
                                        { icon: 'emergency', title: 'Critical Infrastructure Collapse', desc: 'Financial services and utility grids remain the primary targets.' }
                                    ].map((li, i) => (
                                        <li key={i} className="flex gap-4">
                                            <span className="material-symbols-outlined text-primary">{li.icon}</span>
                                            <div>
                                                <strong className="text-slate-900 dark:text-slate-100">{li.title}</strong>
                                                <p className="text-base text-slate-500 leading-snug">{li.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>

                        <aside className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-32 space-y-8">
                                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">rocket_launch</span> Soluciones
                                    </h4>
                                    <div className="space-y-6">
                                        {[
                                            { title: 'Quantum-Link Core', icon: 'settings_input_component' },
                                            { title: 'Global Edge Mesh', icon: 'language' }
                                        ].map((sol) => (
                                            <div key={sol.title} className="group cursor-pointer">
                                                <div className="h-20 w-full rounded-lg bg-slate-200 dark:bg-slate-800 mb-2 overflow-hidden bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-2xl text-primary/40 transition-transform group-hover:scale-110">{sol.icon}</span>
                                                </div>
                                                <h5 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{sol.title}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 bg-primary rounded-2xl text-white shadow-xl shadow-primary/20">
                                    <h4 className="text-lg font-bold mb-2">Fiber Insights</h4>
                                    <p className="text-xs text-blue-100 mb-6 font-medium">Stay ahead with our executive briefings.</p>
                                    <input
                                        type="email"
                                        aria-label="Email para briefings"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-4 text-sm placeholder:text-blue-200 focus:ring-2 focus:ring-white mb-3 outline-none transition-all"
                                        placeholder="correo@empresa.com"
                                    />
                                    <button className="w-full bg-white text-primary font-bold py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors shadow-lg shadow-white/10">Suscribirse</button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>
            </section>
        );
    }

    if (isResources) {
        return (
            <section id="diagnostico" className="bg-slate-50 dark:bg-slate-950 min-h-screen relative overflow-hidden">
                <div className="fixed inset-0 pointer-events-none opacity-10 bg-[radial-gradient(var(--color-primary)_1px,transparent_0)] bg-[size:24px_24px]"></div>

                {/* Header */}
                <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-6 lg:px-20 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-2xl">terminal</span>
                            </div>
                            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">FiberLink Labs</h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-10">
                            <button onClick={() => { setIsResources(false); setIsScheduling(false); }} className="text-sm font-medium hover:text-primary transition-colors dark:text-slate-300">Roadmap</button>
                            <button onClick={() => setIsResources(true)} className="text-sm font-medium text-primary underline underline-offset-8">Resources</button>
                            <button onClick={() => setIsScheduling(true)} className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors dark:text-white">
                                <span className="material-symbols-outlined text-lg">calendar_month</span>
                                <span className="text-sm font-bold">Agendar</span>
                            </button>
                        </nav>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-6 lg:px-20 py-12 relative z-10">
                    {/* Hero Featured */}
                    <section className="mb-16">
                        <div className="group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 aspect-[21/9] flex items-end shadow-2xl">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 article-item-hero-bg"></div>
                            <div className="relative p-8 lg:p-16 w-full max-w-4xl">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded">Estrategia 2025</span>
                                    <span className="text-slate-300 text-xs flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">schedule</span> 12 min lectura
                                    </span>
                                </div>
                                <h2 className="text-white text-3xl lg:text-5xl font-bold leading-tight tracking-tight mb-6">
                                    Por qué tu ERP actual está frenando tu crecimiento del 2025
                                </h2>
                                <p className="text-slate-300 text-lg max-w-2xl mb-8 font-light leading-relaxed">
                                    Análisis profundo sobre la deuda técnica heredada y cómo la modernización de infraestructura está definiendo a los líderes del mercado B2B.
                                </p>
                                <button
                                    onClick={() => setSelectedArticle('erp-2025')}
                                    className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-primary hover:text-white transition-all group"
                                >
                                    Leer Artículo Completo
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-2 dark:text-white">Insights Tecnológicos</h2>
                            <p className="text-slate-500 dark:text-slate-400">Liderazgo de pensamiento para la era de la infraestructura inteligente.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            {['Todos', 'Estrategia', 'Ingeniería', 'Automatización'].map((cat) => (
                                <button key={cat} className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${cat === 'Todos' ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Article Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            { id: 'legacy-infra', title: 'Modernización de Infraestructura Legacy', cat: 'Ingeniería', time: '6 min', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3jaKNZWtVywFchwQykhGrvJgyqveT5FAAYPhfFytdG0Bxsrf3zX5kW3ZCabjt14wY4TKjszWpuK8-Ntqq_HH4kSjIerJcSj5MRiamc2yaxK_Uh7enrhnSF_MFyYDqrDnZb0vs8w-6ZJjGhGYJjo-_35rGmYxW0M25kXUAKV0XUmVqEva2lHGEqlByeNkeDWcUp2dRlww5TskRKNy1RLvkmyoFS6Sp-pRLfhTP5KTpz_xik6ew8QVAoxFZpOdi3fQdNlT99fPdliav' },
                            { id: 'ai-logistics', title: 'IA Generativa en Logística Compleja', cat: 'Automatización', time: '8 min', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRoLXHieA-POYEpEAdddGE0nyM78SI_IyDB-d-6W_3Wl5hnM0P0te2nAiQJhvjJ--vTOKkHIi0DbHkugpNKaxFadjk5fTVU4Ok-4gHYUXS5VNWkn3LfbpykBmOKEvxuja3DJhMDS7jCSy1A2L8YTklBD7gELvRiHY9euFbt4fmXoSjsh7mJYp7EAkvqXlx7Lfi8NxcEaHt1wIZFWbdIkFmbmt-2ODsQF4WsHXxQg05SkbMhs7rqSiyeOHpNjz1_TSxo_lB3LL6wAwh' },
                            { id: 'cyber-b2b', title: 'Ciberseguridad Proactiva B2B', cat: 'Ingeniería', time: '10 min', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnq2QcRAMwrySNWxFTBeG-0qr3X1qhs5VhWP3QkemGGudjZBdflREMR7bwhbVuB_sl0pjDK_l_aNaMSAkD79TpZxVHm1No43mHdy5UKLiYQyozQ9bnHavtAR3kFvTIHXDSZUikE7qm8vUkmORak7qMlMyMM_RXxQr3ZI95ab6iVJb4aKma-bHrM8vBFyG52TReFq1zLLJz8lN8v18VrZQRbjYpEXyKzHfP_HzRz-egEJOX775X87DZK3C5m1hThwV3VkxmwgBAWVj-' }
                        ].map((post, i) => (
                            <article
                                key={i}
                                onClick={() => setSelectedArticle(post.id)}
                                className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-primary transition-all shadow-lg hover:shadow-primary/5 cursor-pointer"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-2 py-1 bg-slate-900/80 backdrop-blur text-primary text-[10px] font-bold uppercase tracking-wider rounded border border-primary/30">{post.cat}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                                        <span className="material-symbols-outlined text-sm">timer</span> {post.time}
                                    </div>
                                    <h3 className="text-xl font-bold leading-snug mb-3 dark:text-white group-hover:text-primary transition-colors">{post.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-6">Exploramos cómo las nuevas arquitecturas están redefiniendo el retorno de inversión en el sector empresarial.</p>
                                    <button className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                        Leer más <span className="material-symbols-outlined">arrow_right_alt</span>
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div className="p-10 lg:p-16 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Executive Briefings</span>
                            <h2 className="text-slate-900 dark:text-white text-3xl lg:text-4xl font-bold mb-6">Insights exclusivos en su bandeja de entrada</h2>
                            <p className="text-slate-500 dark:text-slate-400 mb-8">Únase a más de 5,000 directivos que reciben nuestro análisis semanal sobre tendencias tecnológicas críticas.</p>
                            <form className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:ring-1 focus:ring-primary outline-none"
                                    placeholder="correo@empresa.com"
                                    aria-label="Email para newsletter"
                                    type="email"
                                />
                                <button className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:brightness-110 transition-all">Suscribirse</button>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        );
    }

    if (isSubmitted) {
        return (
            <section id="diagnostico" className="bg-slate-50 dark:bg-slate-950 relative min-h-screen">
                {/* Dashboard Header */}
                <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-6 lg:px-20 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-2xl">insights</span>
                            </div>
                            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">FiberLink Labs</h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-10">
                            <button onClick={() => { setIsResources(false); setIsScheduling(false); }} className="text-sm font-medium text-primary underline underline-offset-8">Roadmap</button>
                            <button onClick={() => setIsResources(true)} className="text-sm font-medium hover:text-primary transition-colors dark:text-slate-300">Resources</button>
                            <button onClick={() => setIsScheduling(true)} className="flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-800 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors dark:text-white">
                                <span className="material-symbols-outlined text-lg">calendar_month</span>
                                <span className="text-sm font-bold">Agendar</span>
                            </button>
                        </nav>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-6 py-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Content Area: Roadmap Timeline */}
                        <div className="lg:col-span-8">
                            <div className="mb-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    Diagnóstico Finalizado
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white mb-4">
                                    Hoja de Ruta Estratégica: <span className="text-primary italic">{formData.company || 'Tu Empresa'}</span>
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                                    Basado en su diagnóstico de madurez digital, hemos diseñado una trayectoria de transformación en tres etapas críticas para escalar sus operaciones.
                                </p>
                            </div>

                            {/* Timeline Container */}
                            <div className="relative pl-8 lg:pl-12">
                                {/* Vertical Line */}
                                <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/10 rounded-full shadow-[0_0_15px_rgba(13,89,242,0.4)] opacity-50"></div>

                                {/* Phase 1 */}
                                <div className="relative mb-16 group">
                                    <div className="absolute -left-[38px] lg:-left-[54px] top-1 size-6 lg:size-8 bg-white dark:bg-slate-950 border-4 border-primary rounded-full flex items-center justify-center z-10">
                                        <div className="size-2 bg-primary rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 shadow-xl">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                                            <h3 className="text-2xl font-bold dark:text-white">Fase 1: Optimización Inmediata</h3>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">Objetivo: Captura de "Quick Wins" y estabilización del embudo de conversión digital.</p>
                                        <ul className="space-y-4">
                                            {[
                                                "Auditoría SEO Técnica Completa y corrección de Core Web Vitals.",
                                                "Rediseño de UX/UI en Landing Pages críticas para mejorar el CTR en un 15%.",
                                                "Implementación de tracking avanzado (GA4 + GTM) para atribución precisa."
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Phase 2 */}
                                <div className="relative mb-16 group">
                                    <div className="absolute -left-[38px] lg:-left-[54px] top-1 size-6 lg:size-8 bg-white dark:bg-slate-950 border-4 border-primary/40 rounded-full flex items-center justify-center z-10">
                                        <div className="size-2 bg-primary/40 rounded-full"></div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 shadow-xl">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="material-symbols-outlined text-primary text-3xl">account_tree</span>
                                            <h3 className="text-2xl font-bold dark:text-white">Fase 2: Arquitectura de Crecimiento</h3>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">Objetivo: Integración de sistemas y creación de pipelines de datos escalables.</p>
                                        <ul className="space-y-4">
                                            {[
                                                "Integración nativa CRM-ERP para visibilidad 360 del ciclo de vida del cliente.",
                                                "Automatización de Pipelines de Ventas (Lead Scoring y Nurturing automático).",
                                                "Migración a arquitectura Cloud-Native para soportar alta demanda transaccional."
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">settings_suggest</span>
                                                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Phase 3 */}
                                <div className="relative group">
                                    <div className="absolute -left-[38px] lg:-left-[54px] top-1 size-6 lg:size-8 bg-white dark:bg-slate-950 border-4 border-primary/20 rounded-full flex items-center justify-center z-10">
                                        <div className="size-2 bg-primary/20 rounded-full"></div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 shadow-xl">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
                                            <h3 className="text-2xl font-bold dark:text-white">Fase 3: Ecosistema Inteligente</h3>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">Objetivo: Liderazgo de mercado mediante IA y automatización predictiva.</p>
                                        <ul className="space-y-4">
                                            {[
                                                "Implementación de Motores de Recomendación basados en IA para personalización web.",
                                                "Despliegue de Analítica Predictiva para reducción de Churn y Forecasting.",
                                                "Automatización Total de Operaciones Back-office con RPA e IA Generativa."
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="material-symbols-outlined text-primary mt-1">psychology</span>
                                                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar: Maturity Gauge */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-xl p-8 sticky top-24 shadow-2xl">
                                <h4 className="text-xl font-bold mb-8 text-center dark:text-white">Madurez Digital</h4>
                                {/* Gauge SVG */}
                                <div className="relative flex justify-center mb-8">
                                    <svg className="w-48 h-48 transform -rotate-90">
                                        <circle className="text-slate-200 dark:text-slate-800" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12" />
                                        <circle className="text-primary" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502.4" strokeDashoffset="160.7" strokeLinecap="round" strokeWidth="12" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-5xl font-bold dark:text-white">68%</span>
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">Puntaje Actual</span>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Promedio Industria</span>
                                        <span className="font-bold dark:text-white">56%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full w-[56%]"></div>
                                    </div>
                                    <p className="text-[11px] text-green-500 font-bold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">trending_up</span>
                                        +12% POR ENCIMA DE SUS COMPETIDORES DIRECTOS
                                    </p>
                                </div>
                                <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                                    <h5 className="text-xs font-bold uppercase tracking-wider mb-4 text-slate-500">Próximos Pasos</h5>
                                    <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg mb-3 border border-primary/20">
                                        <span className="material-symbols-outlined text-primary">event</span>
                                        <div className="text-[10px]">
                                            <p className="font-bold text-slate-900 dark:text-slate-200">Reunión de Estrategia</p>
                                            <p className="text-slate-500">Pendiente de agendar</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => { setIsSubmitted(false); setIsResources(false); setIsScheduling(false); setCurrentStep(0); setSelections({}); setFormData({ name: '', company: '', email: '' }); }}
                                        className="w-full py-3 mt-4 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all uppercase tracking-widest text-slate-500"
                                    >
                                        Reiniciar Diagnóstico
                                    </button>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-xl h-48 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-indigo-900 z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                    alt="Expert assistance"
                                    className="absolute inset-0 object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 opacity-50"
                                />
                                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                                    <h4 className="text-white font-bold text-lg mb-1">¿Necesita asistencia experta?</h4>
                                    <p className="text-white/80 text-sm">Nuestros consultores están listos para ayudarle a ejecutar cada fase.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Footer Action Bar */}
                <div className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full overflow-hidden border-2 border-primary p-0.5 shadow-[0_0_15px_rgba(13,89,242,0.3)]">
                                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold dark:text-white">Asignado: Carlos Méndez</p>
                                <p className="text-xs text-slate-500">Lead Transformation Consultant</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800">
                                <span className="material-symbols-outlined">picture_as_pdf</span>
                                Descargar PDF
                            </button>
                            <button
                                onClick={() => setIsScheduling(true)}
                                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:brightness-110 hover:shadow-lg hover:shadow-primary/30 transition-all"
                            >
                                <span className="material-symbols-outlined">calendar_month</span>
                                Agendar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const step = steps[currentStep];
    const progress = ((currentStep + 1) / steps.length) * 100;

    useEffect(() => {
        if (progressBarRef.current) {
            const width = currentStep === steps.length - 1 ? 100 : progress;
            progressBarRef.current.style.width = `${width}%`;
        }
    }, [currentStep, progress, steps.length]);

    return (
        <section id="diagnostico" className="py-24 px-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Progress */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">
                            {currentStep === steps.length - 1 ? 'Diagnóstico Digital Finalizado' : `Paso 0${currentStep + 1} de 05`}
                        </span>
                        <span className="text-sm font-mono text-slate-500 dark:text-slate-400">
                            {currentStep === steps.length - 1 ? '100%' : `${Math.round(progress)}%`}
                        </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                            ref={progressBarRef}
                            className="h-full bg-primary transition-all duration-500 shadow-[0_0_12px_rgba(13,89,242,0.5)]"
                        ></div>
                    </div>
                    {currentStep === steps.length - 1 && (
                        <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400 italic">
                            Análisis de infraestructura en curso. Generando reporte estratégico...
                        </p>
                    )}
                </div>

                {/* Content */}
                {currentStep < steps.length - 1 && (
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 dark:text-white">
                            {step.question}
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
                            {step.desc}
                        </p>
                    </div>
                )}

                {/* Final step header */}
                {currentStep === steps.length - 1 && (
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white leading-tight">
                            Resumen Estratégico
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Para entregarte tu hoja de ruta personalizada y el reporte de arquitectura detallado, necesitamos los datos finales de tu liderazgo.
                        </p>
                    </div>
                )}

                {/* Options */}
                <div className={`grid gap-6 mb-12 ${step.options.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {step.options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            className={`group relative flex flex-col items-start p-8 rounded-xl border-2 transition-all text-left overflow-hidden ${selections[currentStep] === option.id
                                ? 'border-primary bg-primary/5 dark:bg-primary/10'
                                : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/50'
                                }`}
                        >
                            <div className={`absolute top-0 left-0 w-1 h-full bg-primary transition-opacity ${selections[currentStep] === option.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                            <div className={`mb-6 p-3 rounded-lg transition-colors ${selections[currentStep] === option.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                                <span className="material-symbols-outlined text-3xl">{option.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 dark:text-white">{option.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                {option.desc}
                            </p>
                            <div className={`mt-6 flex items-center text-primary font-bold text-xs uppercase tracking-wider transition-opacity ${selections[currentStep] === option.id ? 'opacity-100' : 'opacity-0'}`}>
                                {selections[currentStep] === option.id ? 'Seleccionado' : 'Seleccionar'}
                                <span className="material-symbols-outlined ml-1 text-sm">{selections[currentStep] === option.id ? 'check_circle' : 'chevron_right'}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Slider for Step 2 */}
                {currentStep === 1 && (
                    <div className="mb-16 p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
                        <div className="flex justify-between items-center mb-6">
                            <label htmlFor="growth-rate-slider" className="font-bold text-sm uppercase tracking-widest text-slate-400">Porcentaje de crecimiento estimado</label>
                            <span className="text-3xl font-extrabold text-primary">{growthRate}%</span>
                        </div>
                        <div className="relative pt-1 border-0">
                            <input
                                id="growth-rate-slider"
                                type="range"
                                min="0"
                                max="100"
                                value={growthRate}
                                onChange={(e) => setGrowthRate(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                                title="Porcentaje de crecimiento"
                            />
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-slate-500 mt-6 px-1">
                                <span>Mantenimiento (0%)</span>
                                <span>Moderado (25%)</span>
                                <span>Acelerado (50%)</span>
                                <span>Exponencial (75%)</span>
                                <span>Unicornio (100%+)</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Final Form Step 5 */}
                {currentStep === steps.length - 1 && (
                    <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-xl shadow-2xl backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-6">
                                <div className="group">
                                    <label htmlFor="ceo-name" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200 transition-colors group-focus-within:text-primary">
                                        Nombre del CEO / Líder de Proyecto
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">person</span>
                                        <input
                                            id="ceo-name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                            placeholder="Ej. Alejandro Martínez"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <label htmlFor="company-name" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200 transition-colors group-focus-within:text-primary">
                                        Nombre de la Empresa
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">business</span>
                                        <input
                                            id="company-name"
                                            required
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                            placeholder="Ej. TechCorp Solutions S.A."
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <label htmlFor="corporate-email" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200 transition-colors group-focus-within:text-primary">
                                        Email Corporativo
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary">mail</span>
                                        <input
                                            id="corporate-email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                            placeholder="nombre@empresa.com"
                                            type="email"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 px-8 rounded-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-3 text-lg group"
                                >
                                    <span>Generar Propuesta Estratégica</span>
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </form>
                        <div className="mt-10 flex flex-col items-center gap-4 text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest border border-slate-200 dark:border-slate-800 rounded-full px-4 py-2 bg-slate-50 dark:bg-slate-900/50">
                                <span className="material-symbols-outlined text-[16px] text-green-500">lock</span>
                                Acceso Estratégico Exclusivo y Encriptado
                            </div>
                            <p className="text-[10px] text-center max-w-sm uppercase tracking-wider">
                                Sus datos están protegidos bajo protocolos de confidencialidad B2B de FiberLink Labs.
                            </p>
                        </div>
                    </div>
                )}

                {/* Navigation (Only show for non-final steps or as a fallback) */}
                {currentStep < steps.length - 1 && (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                            <span className="material-symbols-outlined">info</span>
                            <p className="text-xs max-w-xs leading-tight">
                                Tus respuestas son confidenciales y se utilizarán exclusivamente para generar tu diagnóstico personalizado.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            {currentStep > 0 && (
                                <button
                                    onClick={prevStep}
                                    className="flex-1 sm:flex-none px-8 py-4 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-widest"
                                >
                                    Atrás
                                </button>
                            )}
                            <button
                                onClick={nextStep}
                                disabled={!selections[currentStep]}
                                className={`flex-1 sm:flex-none px-10 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-widest ${selections[currentStep]
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:-translate-y-1'
                                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                                    }`}
                            >
                                Siguiente
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Accents */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        </section>
    );
};

export default Diagnosis;
